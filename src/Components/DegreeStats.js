import React from 'react';
import getData from '../Utils/getData.js';


// Loading order App > PeopleTabs > PeopleGroup > PeopleModal

// displays the statistics like employment percentage and avg salary after graduation
class DegreeStats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: {},
            statsLoaded: false,
        };
    }

    // get statistics data
    componentDidMount() {
        // get data
        getData('employment/degreeStatistics/')
            .then((json) => {
                this.setState({
                    stats: json.degreeStatistics,
                    statsLoaded: true,
                });
            });
    
    }

    render() {
        const { stats, statsLoaded } = this.state;

        if (!statsLoaded) {return <section><h2>Loading...</h2></section>}

        return(
            <section>
                <h2>Degree Statistics</h2>
                
                 {/* Display the statistic and description */}
                 {stats.statistics.map( (s, index) => 
                        <div key={index}>
                            <h3 className='orange'>{s.value}</h3>
                            <p>{s.description}</p>
                        </div>
                    )}

                
            </section>
        );
    }

}

export default DegreeStats;