const express = require('express');
const router = express.Router();
const axios = require('axios');

const CLIENT_ID = '1bhxsakl36gc0f8og7260oan5571uffw';
const CLIENT_SECRET = 'wcmDiRE8ywzXW1ZbizjueQfG1TvPN5oh';
const ACCESS_TOKEN = 'epzwjjtFcvEArpifW0gMipy7qlUGoEgC';
const folderId = '215905083396';

router.get('/', async (req, res) => {
    const HumanID = req.query.HumanID;

    try {
        // Search for the file by name within the specified folder
        const response = await axios.get(`https://api.box.com/2.0/search?query=${encodeURIComponent(HumanID)}&ancestor_folder_ids=${folderId}`, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        });

        // Check if the response contains any entries
        if (response.data.entries && response.data.entries.length > 0) {
            // Retrieve the fileId from the search response
            const fileId = response.data.entries[0].id;

            // Download the file using the fileId
            const downloadResponse = await axios.get(`https://api.box.com/2.0/files/${fileId}/content`, {
                responseType: 'stream',
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            });

            // Set the appropriate headers for the file download
            res.setHeader('Content-disposition', `attachment; filename=${downloadResponse.headers['x-file-name']}`);
            res.setHeader('Content-type', downloadResponse.headers['content-type']);

            // Pipe the file data to the response stream
            downloadResponse.data.pipe(res);
        } else {
            console.error('File not found');
            res.status(404).json({ error: 'File not found' });
        }
    } catch (error) {
        console.error('File download failed:', error.response.data);
        res.status(500).json({ error: 'File download failed' });
    }
});



module.exports = router;

