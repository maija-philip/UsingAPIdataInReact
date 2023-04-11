import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// styling for the modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  minWidth: '400px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

// creates a modal that describes the person selected
export default function PeopleModal({
    username, name, tagline, title, interestArea, office, website, phone, 
    email, twitter, facebook, imagePath}) {

      // handles opening and closing the modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* clicking on the image and name will open the modal */}
      <img onClick={handleOpen} src={imagePath} alt={name} data-pin-nopin="true"/>
      <Button onClick={handleOpen} className="peopleModalButton">{name}</Button>

      {/* modal that describes the people */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={title}
        >
        <Box sx={style} className="peopleModalBox">
            <div>
                {/* displays the basic information */}
                <h2>{name}</h2>
                <h3>{title}</h3>
                <p>{tagline}</p>
                {interestArea && <p id='interest'>Interests: <span style={{textTransform: 'uppercase'}}>{interestArea}</span></p>}

                {/* displays the contact information */}
                {email && <p>Email: {email}</p>}
                {phone && <p>Phone: {phone}</p>}
                {office && <p>Office: {office}</p>}
            </div>

            <div>
                {/* displays the image and socials if they have them */}
                <img src={imagePath} alt={title} />
                {website &&  <a href={website} target="_blank">Website</a>}
                {facebook &&  <a href={facebook} target="_blank">Facebook</a>}
                {twitter &&  <a href={twitter} target="_blank">Twitter</a>}
            </div>
        </Box>
      </Modal>
    </div>
  );
}