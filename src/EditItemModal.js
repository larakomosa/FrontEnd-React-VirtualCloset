import React, {Component} from 'react';
import {Modal, Button, Grid, FormGroup, FormControl, FormLabel} from '@material-ui/core'

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

render(){
    return(
    <div className= "container">
        <Modal {...this.props}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Department
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Grid sm={6}>
                        <form onSubmit = {this.handleSubmit}>
                        <FormGroup controlId= "DepartmentId">
                                <FormLabel>Todo Id</FormLabel>
                                <FormControl type="text" name="id" required
                                disabled
                                defaultValue={this.props.clothesId}
                                placeholder = "Id"/>
                                </FormGroup>
                            <FormGroup controlId= "Name">
                                <FormLabel>Name</FormLabel>
                                <FormControl type="text" name="name" required
                                placeholder = {this.props.clothesName}/>
                                </FormGroup>
                            <FormGroup controlId= "Category">
                                <FormLabel>Category</FormLabel>
                                <FormControl type="text" name="category" required
                                placeholder = {this.props.clothesCategory}/>
                                </FormGroup>
                            <FormGroup controlId= "Favorite">
                                <FormLabel>Favorite</FormLabel>
                                <FormControl type="text" name="favorite" required
                                placeholder = {this.props.clothesFavorite?.toString()}/>
                                </FormGroup>
                                <FormGroup>
                                    <Button variant="primary" type="submit">
                                        Update Closet Item
                                    </Button>
                                </FormGroup>
                    </form>
                    </Grid>
         </Modal.Body>
         <Modal.Footer>
             <Button variant="danger" onClick={this.props.onHide}>Close</Button>
         </Modal.Footer>
            </Modal>
    </div>
    )
}


}