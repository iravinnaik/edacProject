import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/product';



 class productServices {
   

    getAllProducts() {
        return axios.get(API_URL +'/', { headers: authHeader() });
      }

    createProduct(product){
        return axios.post(API_URL+'/add', product, { headers: authHeader() });
    }

    getProductById(productId){
        return axios.get(API_URL + '/' + productId, { headers: authHeader() });
    }

    updateProduct(product){
        return axios.put(API_URL + '/update/' + product.id, product, { headers: authHeader() });
    }

    deleteProduct(productId){
        return axios.delete(API_URL + '/' + productId, { headers: authHeader() });
    }
}

export default new productServices();