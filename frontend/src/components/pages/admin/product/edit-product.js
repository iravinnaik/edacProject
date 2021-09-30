import React, { Component } from 'react'
import productService from '../../../../services/productService';


export default class editProduct extends Component {
    constructor(props) {
        console.log("View Product constructor");
        super(props)

        this.state = {
            id:"",
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
         categoryId:""
       
            
        }
       

       
    }

    saveProduct = (e) => {
        e.preventDefault();
        let product = {
            id:this.state.id,
            name:this.state.name,
            description:this.state.description,
            price:this.state.price,
           
            brand:this.state.brand,
            storagecapacity:this.state.storagecapacity,
            os:this.state.os,
            color:this.state.color,
            modelyear:this.state.modelyear,
            screensize:this.state.screensize,
            //categoryId:this.state.categoryId
                
           
            
        
        };
       
       // console.log(this.state.categoryId);
        console.log(product);
        productService.updateProduct(product)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({message : 'Product Updated successfully.'});
                this.props.history.push('/product');
            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/product');
            })
            
    }

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });


    componentDidMount(){
       
        productService.getProductById(window.localStorage.getItem("id")).then((res) => {
            let  product = res.data;
            console.log( product);
            this.setState({ 
                id:product.id,
                name:product.name,
                description:product.description,
                price:product.price,
               
                brand:product.brand,
                storagecapacity:product.storagecapacity,
                os:product.os,
                color:product.color,
                modelyear:product.modelyear,
                screensize:product.screensize,
               // categoryId:product.categoryId

              });
        });
    }
    render() {
        return (
             <div className="container">
            <div className = "card col-md-8 offset-md-4">
            <h2 className="text-center">Update Product</h2>
            <form>
            <div className="form-group" >
                <label>Product Name:</label>
                <input  placeholder="name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
            </div>
            <div className="form-group" >
                <label>description:</label>
                <input  placeholder="description" name="description" className="form-control" value={this.state.description} onChange={this.onChange}/>
            </div>
            <div className="form-group" >
                <label>Product Price:</label>
                <input  placeholder="price" name="price" className="form-control" value={this.state.price} onChange={this.onChange}/>
            </div>
           
            <div className="form-group" >
                <label>Product Brand:</label>
                <input  placeholder="brand" name="brand" className="form-control" value={this.state.brand} onChange={this.onChange}/>
            </div>
            <div className="form-group" >
                <label>Product storagecapacity:</label>
                <input  placeholder="storagecapacity" name="storagecapacity" className="form-control" value={this.state.storagecapacity} onChange={this.onChange}/>
            </div>
            <div className="form-group" >
                <label>Product os:</label>
                <input  placeholder="os" name="os" className="form-control" value={this.state.os} onChange={this.onChange}/>
            </div>
            <div className="form-group" >
                <label>Product color:</label>
                <input  placeholder="color" name="color" className="form-control" value={this.state.color} onChange={this.onChange}/>
            </div>
            <div className="form-group" >
                <label>Product modelyear:</label>
                <input  placeholder="modelyear" name="modelyear" className="form-control" value={this.state.modelyear} onChange={this.onChange}/>
            </div>
            <div className="form-group" >
                <label>Product screensize:</label>
                <input  placeholder="screensize" name="screensize" className="form-control" value={this.state.screensize} onChange={this.onChange}/>
            </div>
            

           
           

            <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
           </form>
          
           </div>
        </div>
        )
    }
}
