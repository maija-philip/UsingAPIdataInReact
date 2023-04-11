import React from 'react';
import getData from '../Utils/getData.js';
import MinorModal from './MinorModal.js';


// Loading order App > PeopleTabs > PeopleGroup > PeopleModal

// loops through the minors and creates a modal and button for each
class Minors extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            minors: {},
            minorsLoaded: false,
        };
    }

    // loads minors data
    componentDidMount() {
        // get data
        getData('minors/')
            .then((json) => {
                this.setState({
                minors: json,
                minorsLoaded: true,
                });
            });
    
    }

    render() {
        const { minors, minorsLoaded } = this.state;

        // if data isn't loaded, display 'loading...'
        if (!minorsLoaded) {return <section><h2>Loading...</h2></section>}

        return(
            <section id='minors'>
                <h2>Minors</h2>

                <div className='minorBox'>
                    {/* Loop thur minors and create the button and modal */}
                    {minors.UgMinors.map( (m, index) => 
                        <MinorModal minor={m} key={index}/>
                    )}
                </div>
                
                
            </section>
        );
    }

}

export default Minors;