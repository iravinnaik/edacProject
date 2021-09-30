import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";

import BoardAdmin from "./components/board-admin.component";


import viewCategory from "./components/pages/admin/category/view-category";
import addCategory from "./components/pages/admin/category/add-category";
import editCategory from "./components/pages/admin/category/edit-category";
import category from "./components/pages/admin/category/category";

import viewProduct from "./components/pages/admin/product/view-product";
import addProduct from "./components/pages/admin/product/add-product";
import product from "./components/pages/admin/product/product";
import editProduct from "./components/pages/admin/product/edit-product";

import viewWatchList from "./components/pages/user/watchList/view-watchList";

import UploadImages from "./components/pages/admin/product/image-uploadComponent";
import viewProductUser from "./components/pages/user/product/viewProductUser";
import compareProduct from "./components/pages/user/product/compareProduct";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <div>
       
        <nav className="navbar navbar-expand navbar-dark bg-dark">
      
          <Link to={"/"} className="navbar-brand">
          
            Product Comparison Portal
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>


            {
            
            showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                 
                </Link>
              
              </li>

           
            )}
          {
            showAdminBoard &&
           (<li className="nav-item"> 
           <Link to={"/category"} className="nav-link">
             Category
           </Link>
           </li>)
          }
          {
            showAdminBoard &&
           (<li className="nav-item"> 
           <Link to={"/product"} className="nav-link">
           Product
           </Link>
           </li>)
          }
          {
                 showAdminBoard &&
                (<li className="nav-item"> 
             <Link to={"/uploadImage"} className="nav-link">
                
                </Link>
               </li>)
               }

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/watchList"} className="nav-link">
                WishList
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/compare"} className="nav-link">
               compare
                </Link>
              </li>
            )}
            
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
          
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
            <Route exact path="/category" component={viewCategory}/>
            <Route exact path="/add-category" component={addCategory}/>
            <Route exact path="/edit-category" component={editCategory}/>
            <Route exact path="/view-category/:id" component={category}/>
            <Route exact path="/product" component={viewProduct}/>
            <Route exact path="/add-product" component={addProduct}/>
            <Route exact path="/view-product/:id" component={product}/>
            <Route exact path="/edit-product" component={editProduct}/>
            <Route exact path="/watchList" component={viewWatchList}/>
            <Route exact path="/uploadImage" component={UploadImages}/>
            <Route exact path="/view-product-user/:id" component={viewProductUser}/>
            <Route exact path="/compare" component={compareProduct}/>
          </Switch>
        </div>
      </div>
    );
  }
}


            
export default App;
