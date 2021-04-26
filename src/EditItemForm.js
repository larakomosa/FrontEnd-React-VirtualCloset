import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import { Button, Typography } from '@material-ui/core';

export class EditItemForm extends Component {
    state = {
        newItem: {
        id: '',
          name: '',
          category: '',
          favorite: '',
        },
      };

      handleChange = (propertyName) => (event) => {
        //captures values for inputted information
        this.setState({
          newItem: {
            ...this.state.newItem,
            [propertyName]: event.target.value,
          },
     
        });
        console.log(this.state.newItem)
      };

handleSubmit(event){
    fetch(process.env.REACT_APP_API + 'VirtualCloset', {
        method: 'PUT',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            Id: event.target.id.value,
            Name: event.target.name.value,
            Category: event.target.category.value,
            Favorite: event.target.favorite.value
        })
    })
    .then((result)=>{
    },
    (error)=>{
        alert(error)
    })
    this.props.callback();
}

handleCancel = (event) => {
    //captures values for inputted information
    console.log('meow, meow');
    this.props.callback();
  };

render() {
    return (
      <form>
        Edit Item
        <div className="formField">
          <TextField
            fullWidth
            size="small"
            id="outlined-helperText"
            label="testing"
            value={this.state.newItem.name}
            placeholder= "testing"
            onChange={this.handleChange('name')}
            variant="outlined"
          />{' '}
        </div>
        <div className="formField">
          <TextField
            fullWidth
            size="small"
            id="outlined-helperText"
            label="Category"
            placeholder="Enter Coin Price"
            variant="outlined"
            value={this.state.newItem.category}
            onChange={this.handleChange('category')}
          />
        </div>
        <div className="formField">
          <TextField
            className="inner-drop"
            fullWidth
            size="small"
            label="Description"
            placeholder="Favorite?"
            multiline
            rows={2}
            variant="outlined"
            value={this.state.newItem.favorite}
            onChange={this.handleChange('favorite')}
          />
        </div>
        <div className="buttonControl">
          <Button
            style={{
              color: 'grey',
            }}
            variant="outlined"
            color="primary"
            size="Medium"
            type="button"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>{' '}
          <Button
            style={{
              color: '#698399',
            }}
            variant="outlined"
            color="primary"
            size="Medium"
            type="button"
            onClick={this.handleCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    );
  }
}

export default EditItemForm