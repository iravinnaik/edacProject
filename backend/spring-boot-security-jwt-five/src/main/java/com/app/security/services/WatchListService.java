package com.app.security.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.AddToWatchListDto;
import com.app.dto.WatchListDto;
import com.app.dto.WatchListItemDto;
import com.app.payload.response.JwtResponse;
import com.app.pojos.WatchList;
import com.app.pojos.Product;
import com.app.pojos.User;
import com.app.repository.WatchListRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class WatchListService {

    @Autowired
    private  WatchListRepository watchListRepository;
    

    public WatchListService(){}

    public WatchListService(WatchListRepository watchListRepository) {
        this.watchListRepository = watchListRepository;
    }

    public void addToWatchList(AddToWatchListDto addToWatchListDto, Product product, User user){
    	WatchList watchList = new WatchList(product, user);
        watchListRepository.save(watchList);
    }


    public WatchListDto listWatchListItems(User user) {
        List<WatchList> WatchListList = watchListRepository.findAllByUserOrderByCreatedDateDesc(user);
        List<WatchListItemDto> WatchListItems = new ArrayList<>();
        for (WatchList watchList:WatchListList){
            WatchListItemDto watchListItemDto = getDtoFromWatchList(watchList);
            WatchListItems.add(watchListItemDto);
        }

        WatchListDto watchListDto = new WatchListDto(WatchListItems);
        return watchListDto;
    }


    public static WatchListItemDto getDtoFromWatchList(WatchList watchList) {
        WatchListItemDto watchListItemDto = new WatchListItemDto(watchList);
        return watchListItemDto;
    }


    public void updateWatchListItem(AddToWatchListDto WatchListDto, User user,Product product){
        WatchList watchList = watchListRepository.getOne(WatchListDto.getId());
        watchList.setCreatedDate(new Date());
        watchListRepository.save(watchList);
    }

    public void deleteWatchListItem(int id,Long userId) throws Exception {
        if (!watchListRepository.existsById(id))
            throw new Exception("WatchList id is invalid : " + id);
        watchListRepository.deleteById(id);

    }

    public void deleteWatchListItems(int userId) {
        watchListRepository.deleteAll();
    }


    public void deleteUserWatchListItems(User user) {
        watchListRepository.deleteByUser(user);
    }
}


