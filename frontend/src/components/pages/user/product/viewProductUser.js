import React, { Component } from 'react'
import categoryServices from '../../../../services/categoryServices';
import productService from '../../../../services/productService';

export default class viewProductUser extends Component {
    constructor(props) {
        console.log("View Product User constructor");
        super(props)

        this.state = {
            
            name:"",
            description:"",
            price:"",
            pRating:"",
            brand:"",
            storagecapacity:"",
            os:"",
	          color:"",
	          modelyear:"",
            screensize:"",
          category:{
            id:"",
            categoryName:"",
            description:""
          }
        
            
        }
       

       
    }

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });


    componentDidMount(){
        productService.getProductById(window.localStorage.getItem("id")).then((res) => {
            let  product = res.data;
            console.log( product);
            this.setState({ 
                name:product.name,
                description:product.description,
                price:product.price,
               
                brand:product.brand,
                storagecapacity:product.storagecapacity,
                os:product.os,
                color:product.color,
                modelyear:product.modelyear,
                screensize:product.screensize,
              categoryId:product.categoryId 
              });
              window.localStorage.setItem("cId", product.categoryId);
        });
      

        categoryServices.getCategoryById().then((res)=>{
          this.setState({category:res.data})
        })
    }
    render() {
        return (
            <div className="container">
            <div className = "card col-md-8 offset-md-4">
            <h2 className="text-center">{this.state.name}</h2>
            
            <br></br>
            <div className="container">
            <div className = "row ">
                                 
                                 
                                   <div className="col-sm" >
                                      <table className = "table table-striped table-bordered">
                                      <tbody>
                                      <tr>
                                      <th> Product Title</th>
                                      <td> {this.state.name} </td>
                                      </tr>
                                     
                                      <tr>
                                      <th>Product Specification</th>
                                      <td> {this.state.description} </td>
                                      </tr>
                                      <tr>
                                      <th> Product Price</th>
                                      <td> {this.state.price} </td>
                                      </tr>
                                      
                                      <tr>
                                      <th> Product brand</th>
                                      <td> {this.state.brand} </td>
                                      </tr>
                                      <tr>
                                      <th> Storage Capacity</th>
                                      <td> {this.state.storagecapacity} </td>
                                      </tr>
                                      <tr>
                                      <th> Device OS</th>
                                      <td> {this.state.os} </td>
                                      </tr>
                                      <tr>
                                      <th> Product Color</th>
                                      <td> {this.state.color} </td>
                                      </tr>
                                      <tr>
                                      <th> Model Year</th>
                                      <td> {this.state.modelyear} </td>
                                      </tr>
                                      <tr>
                                      <th> Screen Size</th>
                                      <td> {this.state.screensize} </td>
                                      </tr>
                                      
                                      </tbody>
                                      </table>
                                 
                                   </div>
                               
                             
            </div>
            </div>
            </div>
       </div>
        )
    }
}
