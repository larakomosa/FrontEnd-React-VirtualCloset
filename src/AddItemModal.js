import React, {Component} from 'react';
import {Modal, Button, Grid, FormGroup, FormControl, FormLabel} from '@material-ui/core'
import { isArrayLiteralExpression } from 'typescript';

export class AddItemModal extends Component {

    constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(event){
    console.log('submit called')
    fetch(process.env.REACT_APP_API + 'VirtualCloset', {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            Name: event.target.Name.value,
            Category: event.target.Category.value,
            Favorite: event.target.Favorite.value
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },
    (error)=>{
        alert('Failed')
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
                    Add Task Item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Grid sm={6}>
                        <form onSubmit = {this.handleSubmit}>
                            <FormGroup controlId= "Name">
                                <FormLabel>Name</FormLabel>
                                <FormControl type="text" name="Name" required
                                placeholder = "Name"/>
                                </FormGroup>
                                <FormGroup controlId= "Category">
                                <FormLabel>Category</FormLabel>
                                <FormControl type="text" name="Category" required
                                placeholder = "Category"/>
                                </FormGroup>
                                <FormGroup controlId= "Favorite">
                                <FormLabel>Favorite</FormLabel>
                                <FormControl type="text" name="Favorite" required
                                placeholder = "Favorite"/>
                                </FormGroup>
                                <FormGroup>
                                    <Button variant="primary" type="submit">
                                        Add Some Clothes!
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