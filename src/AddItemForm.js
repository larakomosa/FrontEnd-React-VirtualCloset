import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import { Button, Typography } from '@material-ui/core';

let categories = null
class AddItemForm extends Component {
  
  state = {
        newItem: {
          name: '',
          category: '',
          favorite: '',
        },
     
      }


      refreshList(){
        fetch(process.env.REACT_APP_API + 'category')
        .then(response=>response.json())
            .then(data=>{
              categories = data
          })
        }

    componentDidMount(){
        this.refreshList();
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

        fetch(process.env.REACT_APP_API + 'VirtualCloset', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
            name: this.state.newItem.name,
            category: this.state.newItem.category,
            favorite: this.state.newItem.favorite,
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
    console.log(categories)

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
        <div className="formField">
          <TextField
            fullWidth
            size="small"
            style={{ color: '#698399', fontFamily: 'nunito' }}
            id="outlined-select-currency-native"
            value={this.state.newItem.category}
            select
            onChange={this.handleChange('category')}
            placeholder="Select Category"
            variant="outlined"
            SelectProps={{
              native: true,
            }}
          >
            {/* <option value="">Select a Chore</option>
            {categories.map((option) => (
              <option key={option.value} value={option.id}>
                {option.name}
              </option>
            ))} */}
        
          </TextField>
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

export default AddItemForm;