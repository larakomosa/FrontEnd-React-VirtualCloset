import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form, FormGroup} from 'react-bootstrap'
import { isArrayLiteralExpression } from 'typescript';

export class EditItemModal extends Component {

    constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state={isComplete: false}
}

toggle=()=> {
    if (this.props.depisComplete=== true){
        return (
            <p>Yes</p>
        );
    } else {
        return (<p>No</p>)
    }
}

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

}