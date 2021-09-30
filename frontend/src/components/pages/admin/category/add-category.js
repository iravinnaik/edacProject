import React, { Component } from 'react'
import categoryServices from '../../../../services/categoryServices';

export default class addCategory extends Component {


    constructor(props) {
        console.log("Add Category constructor");
        super(props)

        this.state = {
                
                    categoryName:"",
                    description:""
            
        }
        this.saveCategory = this.saveCategory.bind(this);

       
    }
    saveCategory = (e) => {
        e.preventDefault();
        let category = {categoryName: this.state.categoryName,description:this.state.description};
        categoryServices.createCategory(category)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({message : 'Category added successfully.'});
                this.props.history.push('/category');
                alert("Category added successfully")
            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/category');
            })
            
    }

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="container">
            <h2 className="text-center">Add Category</h2>
            <form>
            <div className="form-group" >
                <label>Category Title:</label>
                <input  placeholder="categoryName" name="categoryName" className="form-control" value={this.state.categoryName} onChange={this.onChange}/>
            </div>
            <div className="form-group" >
                <label>Category description:</label>
                <input  placeholder="description" name="description" className="form-control" value={this.state.description} onChange={this.onChange}/>
            </div>           
           

            <button className="btn btn-success" onClick={this.saveCategory}>Save</button>
           </form>
        </div>
        )
    }
}
