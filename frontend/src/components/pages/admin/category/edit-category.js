import React, { Component } from 'react'
import categoryServices from '../../../../services/categoryServices';

export default class editCategory extends Component {


    constructor(props) {
        console.log("Update Category constructor");
        super(props)

        this.state = {
                     id:"",
                     categoryName:"",
                     description:""
            
        }
        this.saveCategory = this.saveCategory.bind(this);
        this.loadCategory = this.loadCategory.bind(this);

    }

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });


    saveCategory = (e) => {
        e.preventDefault();
        let category = {id:this.state.id,categoryName: this.state.categoryName,description:this.state.description};
        categoryServices.updateCategory(category)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({message : 'Category Updated successfully.'});
                this.props.history.push('/category');
            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/category');
            })
            
    }

    componentDidMount() {
        this.loadCategory();
    }

    loadCategory() {
        categoryServices.getCategoryById(window.localStorage.getItem("cId"))
            .then((res) => {
                
                let category = res.data;
                console.log(category);
                this.setState({
                id: category.id,
                categoryName: category.categoryName,
               description:category.description
                
                })
            });
    }
    render() {
        return (
            <div className="container">
            <h2 className="text-center">Update Category</h2>
            <form>
            <div className="form-group" >
                <label>Category Title:</label>
                <input  placeholder="categoryName" name="categoryName" className="form-control" value={this.state.categoryName} onChange={this.onChange}/>
            </div>
            <div className="form-group" >
                <label>Description:</label>
                <input  placeholder="description" name="description" className="form-control" value={this.state.description} onChange={this.onChange}/>
            </div>

           
           

            <button className="btn btn-success" onClick={this.saveCategory}>Save</button>
           </form>
        </div>
        )
    }
}
