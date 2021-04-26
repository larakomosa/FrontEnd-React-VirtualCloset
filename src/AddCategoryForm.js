import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import { Button, Typography } from '@material-ui/core';

let categories = null
class AddCategoryForm extends Component {
  
  state = {
        newItem: {
          name: '',
        },
     
      }

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

      handleCancel = (event) => {
        console.log('meow, meow');
        this.props.callback();
      };

      handleSubmit = (event) => {

        fetch(process.env.REACT_APP_API + 'Category', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
            name: this.state.newItem.name,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            // alert(result);
        },
        (error)=>{
            alert('Failed')
        })
        this.props.callback();
    }

  render() {

    return (
      <form>
        Add New Item
        <div className="formField">
          <TextField
            fullWidth
            size="small"
            id="outlined-helperText"
            label="Name"
            value={this.state.newItem.name}
            placeholder="Add Reward Here"
            onChange={this.handleChange('name')}
            variant="outlined"
          />{' '}
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

export default AddCategoryForm;