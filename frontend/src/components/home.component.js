import React, { Component } from "react";

import UserService from "../services/user.service";
import productService from "../services/productService";
import watchListService from "../services/watchListService";

export default class Home extends Component {
  constructor(props) {
    console.log("All Product constructor");
    super(props)

    this.state = {
     product: [],
     content:""
           
    }
    

   
}


  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
    productService.getAllProducts().then((res) => {
      this.setState({ product: res.data});
      let product=res.data;
      console.log(product);

  });
  }

  addWatchList(id){
    console.log(id);
    

    let user=window.localStorage.getItem("user");
    let user1=JSON.parse(user)
   
    console.log(user1);
    console.log(user1.id);
 	   let id1=user1.id

      watchListService.createWatchList(id1,id).then((res) =>{
        this.setState({watchList:res.data})
        let watchList=res.data;
        console.log(watchList);
        alert("Product Added to WatchList")
      })
   
}

  viewProductUser(id){
    console.log(id);
    window.localStorage.removeItem("id");
    window.localStorage.setItem("id", id);
    this.props.history.push(`/view-product-user/${id}`);
}

addCompareList(id){
  console.log(id);
  
  
 

 if(window.localStorage.getItem("pId1")==null){
  window.localStorage.setItem("pId1", id);
  alert("Product Add to CompareList");
 }
 else if(window.localStorage.getItem("pId2")==null){
  window.localStorage.setItem("pId2", id);
  alert("Product Add to CompareList");
 }else{
  alert("CompareList is Full ");
 }
 
 
}

  render() {
    return (
      <div className="container">


        <div className="container">
          <header className="jumbotron">
            <h3>{this.state.content}</h3>
          </header>
        </div>

        <div className="container">
            <h2 className="text-center">Product List</h2>
            
            <br></br>
            <div className="container">
            <div className = "row ">
                                  {  this.state.product.map(
                                  product =>
                                   <div className="col-sm" key = {product.id}>
                                      <table className = "table table-striped table-bordered">
                                      <tbody>
                                      <tr>
                                      <th> Product Title</th>
                                      <td> {product.name} </td>
                                      </tr>
                                     
                                      <tr>
                                      <th>Product description</th>
                                      <td> {product.description} </td>
                                      </tr>
                                      <tr>
                                      <th> Product Price</th>
                                      <td> {product.price} </td>
                                      </tr>
                                      
                                      <tr>
                                      <th> Actions</th>
                                      <td> 
                                      <button style={{marginLeft: "10px"}} onClick={ () => this.addWatchList(product.id)} className="btn btn-info">AddToWatchList </button> 
                                      <button style={{marginLeft: "10px"}} onClick={ () => this.viewProductUser(product.id)} className="btn btn-info">View </button> 
                                      <button style={{marginLeft: "10px"}} onClick={ () => this.addCompareList(product.id)} className="btn btn-info">AddToCompareList </button>
                                      </td>
                                      </tr>
                                      </tbody>
                                      </table>
                                 
                                   </div>
                               )
                             }
            </div>
            </div>

       </div>


      </div>
     
    );
  }
}
