import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/category';



 class categoryServices {
   

    getAllCategories() {
        return axios.get(API_URL +'/', { headers: authHeader() });
      }

    createCategory(category){
        return axios.post(API_URL+'/create', category, { headers: authHeader() });
    }

    getCategoryById(categoryId){
        return axios.get(API_URL + '/' + categoryId, { headers: authHeader() });
    }

    updateCategory(category){
        return axios.put(API_URL + '/' + category.cId, category, { headers: authHeader() });
    }

    deleteCategory(categoryId){
        return axios.delete(API_URL + '/' + categoryId, { headers: authHeader() });
    }
}

export default new categoryServices();