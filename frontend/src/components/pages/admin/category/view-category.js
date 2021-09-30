import React, { Component } from 'react'
import categoryServices from '../../../../services/categoryServices';


export default class viewCategory extends Component {

    constructor(props) {
        console.log("Category constructor");
        super(props)

        this.state = {
                category: []
        }
        this.addCategory = this.addCategory.bind(this);

       
    }

    componentDidMount(){
        categoryServices.getAllCategories().then((res) => {
            this.setState({ category: res.data});
        });
    }
    addCategory() {
        window.localStorage.removeItem("id");
        this.props.history.push('/add-category');
    }

    editCategory(id) {
        console.log(id);
        window.localStorage.setItem("cId", id);
        this.props.history.push('/edit-category');
    }

    viewCategory(id){
        console.log(id);
        window.localStorage.removeItem("cId");
        window.localStorage.setItem("cId", id);
        this.props.history.push(`/view-category/${id}`);
    }
                                  //  <tr>
                                    //  <th> Actions</th>
                                   //   <td> 
                                   //   <button onClick={ () => this.editCategory(category.id)} className="btn btn-info">Update </button>
                                          
                                     //      <button style={{marginLeft: "10px"}} onClick={ () => this.viewCategory(category.id)} className="btn btn-info">View </button> 
                                    //  </td>
                                    //  </tr>

    deleteCategory(id) {
        categoryServices.deleteCategory(id)
           .then(res => {
               this.setState({message : 'Category deleted successfully.'});
               this.setState({category: this.state.category.filter(category => category.id !== id)});
           })

    }
// <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCategory(category.id)} className="btn btn-danger">Delete </button>
    render() {
        return (
            <div className="container">
            <h2 className="text-center">Category List</h2>
            <div className = "row">
            <button className="btn btn-primary" onClick={this.addCategory}> Add Category</button>
            </div>
            <br></br>
            <div className="container">
            <div className = "row ">
                                  {  this.state.category.map(
                                  category =>
                                   <div className="col-sm" key = {category.id}>
                                      <table className = "table table-striped table-bordered">
                                     <tbody>
                                      <tr>
                                      <th> Category Title</th>
                                      <td> {category.categoryName} </td>
                                      </tr>
                                      <tr>
                                      <th>Description </th>
                                      <td> {category.description} </td>
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
