import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/watchlist';
 
 
 
 
 
 class watchListService {
     
    getAllWatchLists(userId) {
        return axios.get(API_URL +'/'+ userId, { headers: authHeader() });
      }

    createWatchList(id1,id){
        return axios.post(API_URL+'/add/'+ id1+"/"+id, { headers: authHeader() });
    }

    getWatchListById(watchListId){
        return axios.get(API_URL + '/' + watchListId, { headers: authHeader() });
    }

    updateWatchList(watchList){
        return axios.put(API_URL + '/update/' + watchList.id, watchList, { headers: authHeader() });
    }

    deleteWatchList(watchListId,userId){
        return axios.delete(API_URL + '/delete/' + watchListId+"/"+userId, { headers: authHeader() });
    }
   
}
export default new  watchListService();