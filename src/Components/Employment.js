import React from 'react';
import getData from '../Utils/getData.js';


// Loading order App > PeopleTabs > PeopleGroup > PeopleModal

// header for the employment section -> displays info about ischool employment
class Employment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employment: {},
            employmentLoaded: false,
        };
    }

    // get the employment description data
    componentDidMount() {
        // get data
        getData('employment/introduction/')
            .then((json) => {
                this.setState({
                    employment: json.introduction,
                    employmentLoaded: true,
                });
            });
    
    }

    render() {
        const { employment, employmentLoaded } = this.state;

        // if descriptions not loaded, just display 'loading...'
        if (!employmentLoaded) {return <section><h2>Loading...</h2></section>}

        return(
            <section id='employment'>
                <h2>Employment</h2>
                <h3>{employment.title}</h3>
                
                 {/* Display employment and Coop descriptions */}
                 {employment.content.map( (c, index) => 
                        <div key={index}>
                            {(c.title != 'Employment') && <h3>{c.title}</h3>}
                            <p>{c.description}</p>
                        </div>
                    )}

                
            </section>
        );
    }

}

export default Employment;