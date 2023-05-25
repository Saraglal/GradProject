import React from "react" ;
import style from './doners.module.css'
import TopBar from '.././Components/topbar/topbar';
import DonersTable from '.././Components/tables/donerstable';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/base/Button' ;
import SlideBar from '.././Components/slidebar/slidebuttonbar';




const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  borderRadius:'10px',
  boxShadow: 20,
  p:3,
};



const Doners = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <TopBar/>
            {/*add & new buttons*/}
            <Box  className= {`${style.actionBox}`} sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab onClick={handleOpen} variant="extended" color="primary" aria-label="add">
                    <AddCircleSharpIcon /> <p>add</p>
                </Fab>
                <a href="./add_doners">
                    <Fab variant="extended" color="success" aria-label="edit">
                        <PersonAddSharpIcon /> <p>new</p>
                    </Fab>
                </a>
                {/*the pop page of add button*/}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className= {`${style.submit}`} sx={styles}>
                        <Grid className= {`${style.grid}`} container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="national_number"
                            label="National Number"
                            name="National Number"
                            autoComplete="National Number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="units"
                            label="Units"
                            name="Units"
                            autoComplete="Units"
                            />
                        </Grid>
                        </Grid>
                        <Button
                            className= {`${style.button}`}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                            >
                            Submit
                        </Button>
                    </Box>
                </Modal>
            </Box>
            <SlideBar/>
            <DonersTable/>
        </div>
    )
}

export default Doners;