import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import React from 'react';
import { Button } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
import AddItemForm from './AddItemForm';
import AddCategoryModal from './AddCategoryModal'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    minWidth: 200,
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    border: '4 solid blueGrey',
    boxShadow: theme.shadows[0],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const AddThisItem = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">
        {' '}
        <AddItemForm callback={handleClose}/>
        <AddCategoryModal/>
      </h2>
    </div>
  );

  return (
    <div>
      <Button
        fullWidth
        variant="outlined"
        size="large"
        align="center"
        type="button"
        onClick={handleOpen}
        style={{
          backgroundColor: blueGrey['700'],
          fontFamily: 'nunito',
          color: 'white',
          marginBottom: '5px',
          marginTop: '15px',
          marginLeft: '0px',
        }}
      >
        Add Closet Item
      </Button>{' '}
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >

        {body}
      </Modal>
    </div>
  );
};


export default (AddThisItem);