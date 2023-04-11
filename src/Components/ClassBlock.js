import React from 'react';
import getData from '../Utils/getData.js';
import MinorModal from './MinorModal.js';


// Loading order App > PeopleTabs > PeopleGroup > PeopleModal

// Shows information about class clicked in the minor modal
class ClassBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classs: {},
            classLoaded: false,
        };
    }

    // gets all course data
    componentDidMount = () => {
        // get data
        getData('course')
            .then((json) => {
                this.setState({
                classs: json,
                classLoaded: true,
                });
            })
            .catch((error) => {
                console.log('Error: ' + error);
              });
    
    }

    render() {
        const { classs, classLoaded } = this.state;
        const className = this.props.name;

        // if data isn't loaded yet
        if (!classLoaded) {return <div className='classBlock'><h3>Loading...</h3></div>}


        // find the class wanted
        const clas = classs.find((element) => {
            if (className == element.courseID) {
                return true;
            }
            return false;
        })



        // display class information
        return(
            <div className='classBlock'>
                <p><b>{clas.title.replaceAll('&amp;', String.fromCharCode('&amp;'))}</b></p>
                <p>{clas.description}</p>
            </div>
        );
    }

}

export default ClassBlock;