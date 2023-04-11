import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClassChip from './ClassChip.js';
import { Class } from '@mui/icons-material';
import ClassBlock from './ClassBlock.js';
import getData from '../Utils/getData.js';


// Displays a button that offers to show the classes required for each degree and their descriptions
// gets degreeName + degreeTitle from props
class CourseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            degreeCourses: {},
            coursesLoaded: false,
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

    // gets the courses in the major and their class data
    componentDidMount() {
        // get data

        // get the letter M or B from the name if it's a Bachelors or Masters degree
        let degreeDigit = this.props.degreeTitle.charAt(this.props.degreeTitle.length - 4);
        getData('courses/degreeName=' + degreeDigit + 'S' + this.props.degreeName.toUpperCase() )
            .then((json) => {
                this.setState({
                    degreeCourses: json,
                    coursesLoaded: true,
                });
            });
    }

    // open and close the modal
    handleOpen = () => {this.setState({isOpen: true})};
    handleClose = () => {this.setState({isOpen: false})};

    // if string is uppercase, then it returns true
    containsUppercase(str) {
        return /[A-Z]/.test(str);
    }

    // the course should display if it is not a concentration or a GE
    courseShouldDisplay = (c) => {

        if (!this.containsUppercase(c)) {
            return false;
        }

        if (c.includes('Concentration')) {
            return false;
        }

        if (c.includes('LASE')) {
            return false;
        }

        return true;
    }

    render() {

        const { degreeCourses, coursesLoaded, isOpen, classActiveName } = this.state;

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

        // if the data isn't loaded, display the button and modal but show a loading screen on the modal
        if (!coursesLoaded) {return (
            <div>
                {/* button that displays minors name and opens the modal */}
            <Button onClick={this.handleOpen} className="courseModalButton">See Required Classes</Button>
            
                {/* modal that opens and displays minor information */}
            <Modal
                open={isOpen}
                onClose={this.handleClose}
                aria-labelledby={this.title}
                >
                <Box sx={style} className="peopleModalBox">
                    <div>
                        <p>Loading...</p>
                    </div>
                </Box>
            </Modal>
            </div>
        )}

        if (Array.isArray(degreeCourses)) {
            return;
        }

        return (
            <div>
                {/* button that displays minors name and opens the modal */}
            <Button onClick={this.handleOpen} className="courseModalButton">See Required Classes</Button>
            
                {/* modal that opens and displays minor information */}
            <Modal
                open={isOpen}
                onClose={this.handleClose}
                aria-labelledby={this.title}
                >
                <Box sx={style} className="peopleModalBox">
                    <div>
    
                        <h2>Classes for {this.props.degreeTitle}</h2>
                        <p>These are just your major related classes and not your General Education classes</p>
                        <br/>

                        {/* show the classes that the minor has as chips */}
                        {degreeCourses.courses.filter(this.courseShouldDisplay).map( (c, index) => 
    
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

export default CourseModal;