import React from 'react';
import getData from '../Utils/getData.js';


// Loading order App > PeopleTabs > PeopleGroup > PeopleModal

// shows career title of former student
class Careers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            careers: {},
            careersLoaded: false,
        };
    }

    componentDidMount() {
        // get data
        getData('employment/careers/')
            .then((json) => {
                this.setState({
                    careers: json.careers,
                    careersLoaded: true,
                });
            });
    
    }

    render() {
        const { careers, careersLoaded } = this.state;

        if (!careersLoaded) {return <section><h2>Loading...</h2></section>}

        return(
            <section>
                <h2>What Careers do our Students go into?</h2>
                

                <div className='employerBox'>
                 {/* Show former students career titles */}
                 {careers.careerNames.map( (n, index) => 
                        <button key={index} className="minorModalButton employer">{n}</button>
                    )}
                </div>

                
            </section>
        );
    }

}

export default Careers;