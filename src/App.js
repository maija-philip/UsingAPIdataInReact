/**
 * Maija Philip
 * ISTE 340 - Project 2 React
 */
import React from 'react';
import './App.css';
import getData from './Utils/getData.js';
import Header from './Components/Header.js';
import Degrees from './Components/Degrees.js';
import Minors from './Components/Minors.js';
import PeopleTab from './Components/PeopleTab.js';
import Employment from './Components/Employment.js';
import DegreeStats from './Components/DegreeStats.js';
import Employeers from './Components/Employeers.js';
import Careers from './Components/Careers.js';
import JobsTab from './Components/JobsTab.js';


class App extends React.Component {

  /*

  Order Called:
  1. Constructor
  2. Render
  3. ComponentDidMount

  Update Order:
  1. Render
  2. ComponentDidMount

  */
  
  constructor(props) {
    super(props); // defining 'this'

    this.state={
      about: {},
      aboutLoaded: false,
    };
  
  }

  componentDidMount() {

    getData('about/')
      .then((json) => {
        this.setState({
          about: json,
          aboutLoaded: true,
        });
      })
      .catch((error) => {
        console.log('Error: ' + error);
      });

    
  }

  render() {

    const { about, aboutLoaded } = this.state;

    // put a loading text when data hasn't loaded
    if (!aboutLoaded) return (<section className="App"><h2>Loading...</h2></section>)

    return (
      <div className="App">
        <Header about={about}/>


        {/* Other Components */}
        <Degrees/>
        <Minors/>
        <Employment/>
        <DegreeStats/>
        <Employeers/>
        <Careers/>
        <JobsTab/>
        <PeopleTab/>
        <p id='footer'>Made by Maija Philip</p>
      </div>

    );
  }

  
} // end of class

export default App;
