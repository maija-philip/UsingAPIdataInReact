import React from 'react';
import getData from '../Utils/getData';
import DegreeAccordian from './UndergradAccordian.js';

// displays the undergrad and graduate degrees offered in iSchool
class Degrees extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            degrees: {},
            degreesLoaded: false,
        };
    }

    // gets the degree data
    componentDidMount() {
        // get data
        getData('degrees/')
            .then((json) => {
                this.setState({
                degrees: json,
                degreesLoaded: true,
                });
            });
    }

    render() {
        const { degrees, degreesLoaded } = this.state;

        // returns 'loaded...' before the data is loaded
        if (!degreesLoaded) {return <section><h2>Loading...</h2></section>}

        return(
            <section id='degrees'>
                <h2>Undergraduate Degrees</h2>
                {/* Creates an accordian with info about the undergrad degrees */}
                <DegreeAccordian degrees={degrees.undergraduate}/>


                <h2 className='extraSpace'>Graduate Degrees</h2>
                {/* Creates an accordian with info about the grad degrees */}
                <DegreeAccordian degrees={degrees.graduate}/>                

            </section>
        );
    }


} // end of class

export default Degrees;