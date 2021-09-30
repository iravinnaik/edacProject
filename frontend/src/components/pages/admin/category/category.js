import React, { Component } from 'react'
import categoryServices from '../../../../services/categoryServices';

export default class category extends Component {
    constructor(props) {
        console.log("View Single Category constructor");
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
            <div className = "card col-md-8 offset-md-4">
            <h3 className = "text-center"> View Category Details</h3> 
            <div className = "card-body">               
                                   <div className="col-sm" >
                                      <table className = "table table-striped table-bordered">
                                     <tbody>
                                      <tr>
                                      <th> Category Title</th>
                                      <td> {this.state.categoryName} </td>
                                      </tr>
                                      <tr>
                                      <th> Category Description</th>
                                      <td> {this.state.description} </td>
                                      </tr>
                                      <tr>
                                      <th> Actions</th>
                                      <td> 
                                      <button onClick={ () => this.editCategory(this.state.id)} className="btn btn-info">Update </button>
                                           <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCategory(this.state.id)} className="btn btn-danger">Delete </button>
                                          
                                      </td>
                                      </tr>
                                      </tbody>
                                      </table>
                                 
                                   </div>
                                   </div>
                             
            </div>
            </div>

      
        )
    }
}
