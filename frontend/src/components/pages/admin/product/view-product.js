import React, { Component } from 'react'

import productService from '../../../../services/productService';

export default class viewProduct extends Component {
    constructor(props) {
        console.log("All Product constructor");
        super(props)

        this.state = {
                product: []
               
        }
        this.addProduct = this.addProduct.bind(this);

       
    }

    componentDidMount(){
        productService.getAllProducts().then((res) => {
            this.setState({ product: res.data});
            let product=res.data;
            console.log(product);

        });
      
    }
    addProduct() {
        window.localStorage.removeItem("id");
        this.props.history.push('/add-product');
    }

    editProduct(id) {
        console.log(id);
        window.localStorage.setItem("id", id);
        this.props.history.push('/edit-product');
    }

    viewProduct(id){
        console.log(id);
        window.localStorage.removeItem("id");
        window.localStorage.setItem("id", id);
        this.props.history.push(`/view-product/${id}`);
    }

    deleteProduct(id) {
        productService.deleteproduct(id)
           .then(res => {
               this.setState({message : 'product deleted successfully.'});
               this.setState({product: this.state.product.filter(product => product.id !== id)});
           })

    }

    // <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.id)} className="btn btn-danger">Delete </button><br/>
    render() {
        return (
            <div className="container">
            <h2 className="text-center">Product List</h2>
            <div className = "row">
            <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
            </div>
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
                                      <th> Product Rating</th>
                                      <td> {product.rating} </td>
                                      </tr>
                                      <tr>
                                      <th> Actions</th>
                                      <td> 
                                      
                                          
                                           <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(product.id)} className="btn btn-info">View </button> 
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
        )
    }
}

//<button onClick={ () => this.editProduct(product.id)} className="btn btn-info">Update </button><br/>