import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CourseModal from './CourseModal.js';

// create an accordian for the undergrad and graduate degrees
export default function SimpleAccordion(props) {
  const degrees = props.degrees;
  return (
    <div>

        {/* for each degree in the program, create an accordian tab */}
      {degrees.map( (d, index) => 
            <Accordion className='degreeAccordian' key={index}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    > 
                    {/* If there is no title, it is the advanced certificates category */}
                    <Typography>{d.title && d.title}{!d.title && 'Advanced Certificates'}</Typography>
                </AccordionSummary>

                <AccordionDetails className='degreeAccordianData'>
                    <p>{d.description}</p>
                    {/* If it is not a Certificate */}
                    {d.concentrations && 
                        <div>
                            <p><b>Concentrations:</b></p>
                            <ul>
                                {/* loops through and displays concentrations as a list */}
                                {d.concentrations.map( (c, index) => <li key={index}>{c}</li>)}
                                
                            </ul>
                            <CourseModal degreeName={d.degreeName} degreeTitle={d.title}/>
                        </div>
                    }

                    {/* If it is a Certificate */}
                    {!d.concentrations &&
                        <div>
                            <ul>
                                {/* displays available advanced certificates in a list */}
                                {d.availableCertificates.map( (c, index) => <li key={index}>{c}</li>)}
                                
                            </ul>
                        </div>
                    }
                    
                </AccordionDetails>
            </Accordion>
        )}

      
    </div>
  );
}