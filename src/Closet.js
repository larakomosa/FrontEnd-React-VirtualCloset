import React, {Component} from 'react';
import {EditItemModal} from './EditItemModal';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Grid, Button} from '@material-ui/core';
import './Closet.css'
import blueGrey from '@material-ui/core/colors/blueGrey';
import {AddThisItem} from './AddItemModal';


export class Closet extends Component{


    constructor(props){
        super(props);
        this.state={closet:[], addModalShow: false, editModalShow:false, isComplete: false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'VirtualCloset')
        .then(response=>response.json())
        .then(data=>{
            this.setState({closet:data});
        })
    
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDep(depid){
fetch(process.env.REACT_APP_API+ `VirtualCloset/`+ depid,{
        method: 'DELETE',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }})
    }


    render(){
        const {closet, clothesId, clothesName, clothesCategory, clothesFavorite} = this.state;
        let addModalClose=()=>this.setState({addModalShow:false})
        let editModalClose=()=>this.setState({editModalShow: false})
        return(
        <Grid container spacing ={1}>
        <Grid item sm={2} md={2} lg={2}></Grid>
            <Grid item sm={8} md={8} lg={8}>
    <TableContainer>
      <Table aria-label="customized table" size="small" aria-label="a dense table">
        <TableHead style={{
    backgroundColor: blueGrey['700'],
    color: "white",
    fontFamily: 'nunito',
  }}>
          <TableRow>
            <TableCell  style={{fontFamily: "nerko one", color: "white", fontWeight:"bold"}}>Item</TableCell>
            <TableCell style={{fontFamily: "nerko one", color: "white", fontWeight:"bold"}}align="right">Category</TableCell>
            <TableCell style={{fontFamily: "nerko one", color: "white", fontWeight:"bold"}}align="right">Favorite</TableCell>
            <TableCell style={{fontFamily: "nerko one", color: "white", fontWeight:"bold"}} align="left">Adjust Item</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style = {{marginBottom: '20px'}}>
        {closet.map(clothes=>
            <TableRow key={clothes.id}>
              <TableCell style={{fontFamily: "nunito", color: blueGrey['700'], fontWeight:"bold"}} component="th" scope="row">
                {clothes.name}
              </TableCell>
              <TableCell style={{fontFamily: "nunito", color: blueGrey['700'], fontWeight:"bold"}} component="th" scope="row">
                {clothes.category}
              </TableCell>
              <TableCell style= {{fontFamily: "nunito", color: blueGrey['700'], fontWeight:"bold"}} align="right">
                {clothes.favorite.toString()}</TableCell>
              <TableCell>
              <Button className= "Edit" variant="contained" color="secondary" size="small" style={{fontFamily: "nerko one", color: "white", fontWeight:"bold"}}
              onClick={()=>this.setState({editModalShow:true.valueOf,
              clothesId: clothes.id, clothesName: clothes.name, clothesCategory: clothes.category, clothesFavorite: clothes.favorite})}>
                  Edit
              </Button>
              &nbsp;
              <Button className= "Edit" variant="contained" color="secondary" size="small" style={{fontFamily: "nerko one", color: "white", fontWeight:"bold"}}
              onClick={()=>this.deleteDep(clothes.id)}>
                  Delete
              </Button>
              <EditItemModal show ={this.state.editModalShow}
              onHide={editModalClose}
              clothesId= {clothesId}
              clothesName= {clothesName}
              clothesCategory= {clothesCategory}/>
          </TableCell>
        </TableRow>
        )}
     </TableBody>
     </Table>
     </TableContainer>
<AddThisItem/>        
  </Grid>
  <Grid item sm={2} md={2} lg={2}></Grid>
</Grid>

  );}}

  export default Closet;  