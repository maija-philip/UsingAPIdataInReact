import React from 'react';
import { Tab } from 'semantic-ui-react';
import getData from '../Utils/getData.js';
import PeopleGroup from './PeopleGroup.js';


// Loading order App > PeopleTabs > PeopleGroup > PeopleModal

// creates a tab layout for the faculty and staff
class PeopleTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            people: {},
            peopleLoaded: false,
        };
    }

    // get people data
    componentDidMount() {
        // get data
        getData('people/')
            .then((json) => {
                this.setState({
                people: json,
                peopleLoaded: true,
                });
            });
    
    }

    render() {
        const { people, peopleLoaded } = this.state;

        // key="" below is very important because it makes the component rerender
        // has the name of the tab and it's content
        const panes = [
            {
              menuItem: 'Faculty',
              render: () => <Tab.Pane attached={false} className='peopleTab'>
                                <PeopleGroup pepGroup={people.faculty} key="1"/>
                            </Tab.Pane>,
            },
            {
              menuItem: 'Staff',
              render: () => <Tab.Pane attached={false} className='peopleTab'>   
                                <PeopleGroup pepGroup={people.staff}  key="2"/>
                            </Tab.Pane>,
            },
        ];

        // if the data isn't loaded, just return 'loading...'
        if (!peopleLoaded) {return <section><h2>Loading...</h2></section>}

        return(
            <section id='people'>
                <div className='spaceBelow'>
                    <h2>{people.title}</h2>
                    <h3>{people.subTitle}</h3>
                </div>

            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

                
            </section>
        );
    }

}

export default PeopleTab;