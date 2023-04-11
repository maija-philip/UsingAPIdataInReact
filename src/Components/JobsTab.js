import React from 'react';
import { Tab } from 'semantic-ui-react';
import getData from '../Utils/getData.js';
import JobTable from './JobTable.js';


// Loading order App > PeopleTabs > PeopleGroup > PeopleModal

// creates a tab and gets the employment data to pass on to the tabs for coop and first jobs
class PeopleTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: {},
            jobsLoaded: false,
        };
    }

    // gets employment data
    componentDidMount() {
        getData('employment/')
        .then((json) => {
            this.setState({
            jobs: json,
            jobsLoaded: true,
            });
        });
    }

    render() {
        const { jobs, jobsLoaded } = this.state;

        // key="" below is very important because it makes the component rerender
        // the tab content + title
        const panes = [
            {
              menuItem: 'First Job after Graduation',
              render: () => <Tab.Pane attached={false} className='peopleTab'>
                                <JobTable data={jobs.coopTable.coopInformation} key={1}/>
                            </Tab.Pane>,
            },
            {
              menuItem: 'Co-op',
              render: () => <Tab.Pane attached={false} className='peopleTab'>   
                                <JobTable data={jobs.employmentTable.professionalEmploymentInformation} key={2}/>
                            </Tab.Pane>,
            },
        ];

        // if the data isn't loaded, return 'loading...'
        if (!jobsLoaded) {return <section><h2>Loading...</h2></section>}

        return(
            <section>
                <div className='spaceBelow'>
                    <h2>Jobs Our Students Have gotten</h2>
                </div>

            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

                
            </section>
        );
    }

}

export default PeopleTab;