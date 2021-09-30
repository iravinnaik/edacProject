import React, { Component } from 'react'
import productService from '../../../../services/productService';

export default class compareProduct extends Component {
    constructor(props) {
        console.log("Compare Product constructor");
        super(props)

        this.state = {
            name:"",
            description:"",
            price:"",
           rating:"",
            brand:"",
            storagecapacity:"",
            os:"",
	        color:"",
	        modelyear:"",
            screensize:"",
           
         product1:{
           
         },
         product2:{
           
         },
         name2:"",
         description2:"",
         price2:"",
        rating2:"",
         brand2:"",
         storagecapacity2:"",
         os2:"",
         color2:"",
         modelyear2:"",
         screensize2:"",

         price3:"",
         storagecapacity3:"",
         screensize3:"",
         modelyear3:"",
         
            
        }
       

       
    }
   

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

    componentDidMount(){
        productService.getProductById(window.localStorage.getItem("pId1")).then((res) => {
            let  product1 = res.data;
            console.log( product1);
            this.setState({ 
                name:product1.name,
                description:product1.description,
                price:product1.price,
               rating:product1.rating,
                brand:product1.brand,
                storagecapacity:product1.storagecapacity,
                os:product1.os,
                color:product1.color,
                modelyear:product1.modelyear,
                screensize:product1.screensize,
              categoryId:product1.categoryId 
              });
              window.localStorage.setItem("cId", product1.categoryId);
        });
        productService.getProductById(window.localStorage.getItem("pId2")).then((res) => {
            let  product2 = res.data;
            console.log( product2);
            this.setState({ 
                name2:product2.name,
                description2:product2.description,
                price2:product2.price,
               rating2:product2.rating,
                brand2:product2.brand,
                storagecapacity2:product2.storagecapacity,
                os2:product2.os,
                color2:product2.color,
                modelyear2:product2.modelyear,
                screensize2:product2.screensize,
              categoryId2:product2.categoryId 
              });
              window.localStorage.setItem("cId", product2.categoryId2);
        });
       
    }

    

    clearCompareList(){
        window.localStorage.removeItem("pId1");
        window.localStorage.removeItem("pId2");
        alert("CompareList Is Clear")
    }
    render() {
        return (
            <div className="container">
            <div className = "card col-md-8 offset-md-4">
            <div className = "row">
            <button className="btn btn-primary" onClick={this.clearCompareList}>ClearList </button>
            </div>
            <br></br>
            <div className="container">
            <div className = "row ">
                                 
                                 
                                   <div className="col-sm" >
                                      <table className = "table table-striped table-bordered">
                                      <tbody>
                                      <tr>
                                      <th> Product Name</th>
                                      <td> {this.state.name} </td>
                                      <td> {this.state.name2} </td>
                                      </tr>
                                      
                                      <tr>
                                      <th>Product Description</th>
                                      <td> {this.state.description} </td>
                                      <td> {this.state.description2} </td>
                                      </tr>
                                      <tr>
                                      <th> Product Price</th>
                                      <td> {this.state.price} </td>
                                      <td> {this.state.price2} </td>
                                      </tr>
                                      <tr>
                                      <th> Product Rating</th>
                                      <td> {this.state.rating} </td>
                                      <td> {this.state.rating2} </td>
                                      </tr>
                                      
                                      <tr>
                                      <th> Product brand</th>
                                      <td> {this.state.brand} </td>
                                      <td> {this.state.brand2} </td>
                                      </tr>
                                      <tr>
                                      <th> Storage Capacity</th>
                                      <td> {this.state.storagecapacity} </td>
                                      <td> {this.state.storagecapacity2} </td>
                                      </tr>
                                      <tr>
                                      <th> Device OS</th>
                                      <td> {this.state.os} </td>
                                      <td> {this.state.os2} </td>
                                      </tr>
                                      <tr>
                                      <th> Product Color</th>
                                      <td> {this.state.color} </td>
                                      <td> {this.state.color2} </td>
                                      </tr>
                                      <tr>
                                      <th> Model Year</th>
                                      <td> {this.state.modelyear} </td>
                                      <td> {this.state.modelyear2} </td>
                                      </tr>
                                      <tr>
                                      <th> Screen Size</th>
                                      <td> {this.state.screensize} </td>
                                      <td> {this.state.screensize2} </td>
                                      </tr>
                                      
                                      </tbody>
                                      </table>
                                 
                                   </div>
                               
                             
            </div>
            </div>

            <div  className="container">
                <div  className = "row ">
                    {this.state.price3}

                </div>
            </div>
            </div>

           
                               
                             
            </div>
            
      
        )
    }
}
