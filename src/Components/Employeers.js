import React from 'react';
import getData from '../Utils/getData.js';


// Loading order App > PeopleTabs > PeopleGroup > PeopleModal

// displays some companies that employ our students
class Employeers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employeer: {},
            employeerLoaded: false,
        };
    }

    // find company names
    componentDidMount() {
        // get data
        getData('employment/employers/')
            .then((json) => {
                this.setState({
                    employeer: json.employers,
                    employeerLoaded: true,
                });
            });
    
    }

    render() {
        const { employeer, employeerLoaded } = this.state;

        // if data isn't loaded, return "loading..."
        if (!employeerLoaded) {return <section><h2>Loading...</h2></section>}

        return(
            <section>
                <h2>Who Employs Our Students?</h2>
                
                <div className='employerBox'>
                 {/* Display box with company names */}
                 {employeer.employerNames.map( (n, index) => 
                        <button key={index} className="minorModalButton employer">{n}</button>
                    )}
                </div>

                
            </section>
        );
    }

}

export default Employeers;