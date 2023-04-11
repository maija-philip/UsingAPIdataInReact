import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MinorModal from './MinorModal.js';

// displays the classes you can take for the minor specified
class ClassChip extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            name: props.name,
        };
    }

    // when clicked, let the minor model know that it is clicked so that it can display info on class
    handleClick = () => {
        let isClickedbool = this.state.isClicked;

        this.setState({
            isClicked: !isClickedbool,
        });

        this.props.func(this, this.state.name);
    }

    // when another is clicked, unclick this one
    handleUnclick = () => {
        this.setState({
            isClicked: false,
        });
    }

    render() {
        
        const { isClicked, name } = this.state;
        let className = "classChip ";

        // add the filled class to show the chip is clicked
        if (isClicked) {
            className += "filled";
        }

        // return class chip 
        return (
            <Chip label={name} onClick={this.handleClick} className={className}/>
        );
    }

    
}

export default ClassChip;