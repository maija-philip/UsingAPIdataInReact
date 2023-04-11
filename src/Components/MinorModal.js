import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClassChip from './ClassChip.js';
import { Class } from '@mui/icons-material';
import ClassBlock from './ClassBlock.js';

// Displays information on the minor selected.
class MinorModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minor: this.props.minor,
            isOpen: false,
            classChipActive: null,
            classActiveName: "",
        }
    }

    // change the state to add the class name for the chip clicked in order to show more info on it
    classChipClicked = (chip, name) => {
        if (this.state.classChipActive != null) {
            this.state.classChipActive.handleUnclick();
        }

        this.setState({
            classChipActive: chip,
            classActiveName: name,
        })
        
    };

    // open and close the modal
    handleOpen = () => {this.setState({isOpen: true})};
    handleClose = () => {this.setState({isOpen: false})};

    render() {

        const { minor, isOpen, classActiveName } = this.state;
        const minorJustName = minor.title.slice(0, minor.title.indexOf('('));

        // modal styles
        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60vw',
            minWidth: '400px',
            maxHeight: '90vh',
            overflowX: 'scroll',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          };

        return (
            <div>
                {/* button that displays minors name and opens the modal */}
            <Button onClick={this.handleOpen} className="minorModalButton">{minorJustName}</Button>
            
                {/* modal that opens and displays minor information */}
            <Modal
                open={isOpen}
                onClose={this.handleClose}
                aria-labelledby={this.title}
                >
                <Box sx={style} className="peopleModalBox">
                    <div>
    
                        <h2>{minorJustName.replaceAll('&amp;', String.fromCharCode('&amp;'))}</h2>
                        <h3 className='space'>({minor.name})</h3>
                        <p>{minor.description}</p>
                        <br/>
                        <p><b>Note: </b>{minor.note}</p>
                        <br/>
    
                        {/* show the classes that the minor has as chips */}
                        {minor.courses.map( (c, index) => 
                                <ClassChip name={c}  key={index} func={this.classChipClicked}/>
                            )}
                        
                        
                        {/* if a class has been clicked, then show it's description */}
                        {classActiveName && <ClassBlock name={classActiveName}/>}
                        
    
                    </div>
                </Box>
            </Modal>
            </div>
        );
    }
    
    
}

export default MinorModal;