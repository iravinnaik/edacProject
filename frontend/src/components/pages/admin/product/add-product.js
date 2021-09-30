import React, { Component } from 'react'
import productService from '../../../../services/productService';
import categoryServices from '../../../../services/categoryServices';


export default class addProduct extends Component {
    constructor(props) {
        console.log("Add Product constructor");
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
             categoryId:6,
                 
            categories:[{
                id:"",
                categoryName:"",
                description:""
            }]
            
            
        }
        this.saveProduct = this.saveProduct.bind(this);

       
    }

   
    saveProduct = (e) => {
        e.preventDefault();
        let product = {name: this.state.name,
            description:this.state.description,
            price:this.state.price,
           rating:this.state.rating,
            brand:this.state.brand,
            storagecapacity:this.state.storagecapacity,
            os:this.state.os,
            color:this.state.color,
            modelyear:this.state.modelyear,
            screensize:this.state.screensize,
            
            categoryId:this.state.categoryId
              
           
            
        
        };
        console.log(this.state.categoryId);
        console.log(this.state.categories);
        console.log(this.state.categories.id);
        
        console.log(product);
        productService.createProduct(product)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({message : 'Product added successfully.'});
                this.props.history.push('/product');
                alert("Product added successfully.");
            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/product');
            })
            
    }
    componentDidMount(){
        categoryServices.getAllCategories().then((res) => {
            this.setState({ categories: res.data});
         
            
        });
    }

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

    render() {
        
        return (
            <div className="container">
            <div className = "card col-md-8 offset-md-4">
            <h2 className="text-center">Add Product</h2>
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
                <label>Product Rating:</label>
                <input  placeholder="rating" name="rating" className="form-control" value={this.state.rating} onChange={this.onChange}/>
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
            <div className="form-group" >
            <label>Product Category :</label>
                <select placeholder="category" name="categoryId" className="form-control" value={this.state.categoryId}  onChange={this.onChange} >
                   {
                       this.state.categories.map(cate => 
                        <option  key={cate.id}  value={cate.id} onChange={this.onChange} >
                            
                            {cate.categoryName}
                           
                           
                        </option>
                        )
                      
                   } 
                </select>
            </div>
       
       
           <div>
           
           <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
           </div>

           
           </form>
          
           
           </div>
        </div>
         
        )
    }
}
