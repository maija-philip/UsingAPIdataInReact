import React from 'react';
import getData from '../Utils/getData.js';
import PeopleModal from './PeopleModal.js';

// loops through people and creates button and modal for them
class PeopleGroup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            pGroup: props.pepGroup,
            title: props.title,
        };
    }

    render() {
        const { pGroup, title } = this.state;

        return(
                <div className='peopleBox'>
                    {/* loops through the people data from props and creates a button and modal for each */}
                    {pGroup.map( (p, index) => 
                        <div className='peopleCard' key={index}>
                            <PeopleModal {...p} /> {/* ...p is everthing in p exploded */}
                        </div>
                    )}
                </div>


        );
    }


} // end of class

export default PeopleGroup;