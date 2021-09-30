import React, { Component } from 'react'

import watchListService from '../../../../services/watchListService';

export default class viewWatchList extends Component {
    constructor(props) {
        console.log("All User WatchList constructor");
        super(props)

        this.state = {
            
            watchList:{
                cartItems:[
                    {
                        id:"",
                        userId:"",
                        product:{
                            id: "",
                            name: "",
                           
                            price: "",
                            description: "",
                            brand: "",
                            storagecapacity:"",
                            os: "",
                            color: "",
                            modelyear: "",
                            screensize: ""
                        }
                    }
                ]

            }
               
            
              
            ,
                product:[]
               
        }
        
       
    }


 componentDidMount(){

 
	let user=window.localStorage.getItem("user");
    let user1=JSON.parse(user)
   
    console.log(user1);
    console.log(user1.id);
 	let id=user1.id
        watchListService.getAllWatchLists(id).then((res) => {
          this.setState({ watchList: res.data});
            let watchList=res.data;
            console.log(watchList);

        });
      
    }


    deleteWatchList(id) {
        let user=window.localStorage.getItem("user");
        let user1=JSON.parse(user)
        console.log(user1);
        console.log(user1.id);
        let userId=user1.id
        console.log(id);

        watchListService.deleteWatchList(id,userId)
           .then(res => {
               this.setState({message : 'WatchList deleted successfully.'});
               this.setState({watchList: this.state.watchList.cartItems.filter(watchList => watchList.id !== id)});
           })

    }
    render() {
        return (
            <div className="container">
            <h2 className="text-center">Watch List</h2>
           
            <br></br>
            <div className="container">
                <div className="row">
                    {
                       this.state.watchList.cartItems.map(
                           watch =>
                           <div className="col-sm" key={watch.id}>
                               
                               <div className="col-sm" >
                               
                                      <table className = "table table-striped table-bordered">
                                      <tbody>
                                      <tr>
                                      <th> Product Title</th>
                                      <td> {watch.product.name} </td>
                                      </tr>
                                      
                                      <tr>
                                      <th>Product Specification</th>
                                      <td> {watch.product.description} </td>
                                      </tr>
                                      <tr>
                                      <th> Product Price</th>
                                      <td> {watch.product.price} </td>
                                      </tr>
                                      
                                      <tr>
                                      <th> Product brand</th>
                                      <td> {watch.product.brand} </td>
                                      </tr>
                                      <tr>
                                      <th> Storage Capacity</th>
                                      <td> {watch.product.storagecapacity} </td>
                                      </tr>
                                      <tr>
                                      <th> Device OS</th>
                                      <td> {watch.product.os} </td>
                                      </tr>
                                      <tr>
                                      <th> Product Color</th>
                                      <td> {watch.product.color} </td>
                                      </tr>
                                      <tr>
                                      <th> Model Year</th>
                                      <td> {watch.product.modelyear} </td>
                                      </tr>
                                      <tr>
                                      <th> Screen Size</th>
                                      <td> {watch.product.screensize} </td>
                                      </tr>
                                      <tr>
                                      <th> Actions</th>
                                      <td> 
                                     
                                           <button style={{marginLeft: "10px"}} onClick={ () => this.deleteWatchList(watch.id)} className="btn btn-danger">Delete </button>
                                           
                                      </td>
                                      </tr>
                                      </tbody>
                                      </table>
                            </div>
                            </div>
                       )
                    }
                </div>
            </div>
            
            </div>
            

       
        )
    }
}
