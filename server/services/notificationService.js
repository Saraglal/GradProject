const axios = require('axios');

const sendNotification = (to, title, body, data) => {
    let notificationData = {
        to: to,
        notification: {
            title: title,
            body: body,
            sound: 'default'
        },
        data: data
    };

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://fcm.googleapis.com/fcm/send',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'key=AAAAG8RlLd0:APA91bGY9jq_7aa8uCaabvtNDV_GnkTkLT3PySB2USgj5S6synEPXuXOSpTAoavU-vDcsi-5QrIFhErQwwNHdTYkihz2kzWQ-c-iXLiVDKQZ4EWOqIXKJ5JwIKJCtDMHhTfim7TKSfh1'
        },
        data: JSON.stringify(notificationData)
    };

    return axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
};

module.exports = sendNotification;
