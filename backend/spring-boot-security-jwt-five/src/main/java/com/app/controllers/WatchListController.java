package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.config.ApiResponse;
import com.app.config.WatchListException;
import com.app.dto.AddToWatchListDto;
import com.app.dto.WatchListDto;
import com.app.payload.response.JwtResponse;
import com.app.pojos.Product;
import com.app.pojos.User;
import com.app.repository.UserRepository;
import com.app.security.services.WatchListService;
import com.app.security.services.ProductService;
import com.fasterxml.jackson.databind.ser.std.UUIDSerializer;

import java.util.Optional;

import javax.validation.Valid;
@CrossOrigin
@RestController
@RequestMapping("/api/test/watchlist")
public class WatchListController {
    @Autowired
    private WatchListService watchListService;

    @Autowired
    private ProductService productService;

    @Autowired
	private UserRepository userRepository; 
    public JwtResponse w;
 

    
    @PostMapping("/add/{userid}/{productid}")
    public ResponseEntity<ApiResponse> addToWatchList(AddToWatchListDto addToWatchListDto,@PathVariable long userid,@PathVariable int productid) throws  Exception {
    	addToWatchListDto.setProductId(productid);
    	Product product = productService.getProductById(addToWatchListDto.getProductId());
        watchListService.addToWatchList(addToWatchListDto, product, userRepository.findById(userid).get());
        return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Item has been added"), HttpStatus.OK);

    }
    @GetMapping("/{userid}")
    public ResponseEntity<WatchListDto> getWatchListItems(@PathVariable long userid) throws Exception {
    //	User u;
//		if(w.getAccessToken().equals(token))
//    	 u=userRepository.findByUsername(token).get();
    	WatchListDto watchListDto = watchListService.listWatchListItems(userRepository.findById(userid).get());
        return new ResponseEntity<WatchListDto>(watchListDto,HttpStatus.OK);
    }
    @PutMapping("/update/{WatchListItemId}/{userid}")
    public ResponseEntity<ApiResponse> updateWatchListItem(@RequestBody @Valid AddToWatchListDto WatchListDto,
                                                      @PathVariable("userid") long userid) throws Exception {
        Product product = productService.getProductById(WatchListDto.getProductId());
        watchListService.updateWatchListItem(WatchListDto, userRepository.findByid(userid).get(),product);
        return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Product has been updated"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{WatchListItemId}/{userid}")
    public ResponseEntity<ApiResponse> deleteWatchListItem(@PathVariable("WatchListItemId") int itemID,@PathVariable("userid") long userId) throws Exception,WatchListException  {
       // Long userId = userRepository.findByUsername(username).get().getId();
        watchListService.deleteWatchListItem(itemID, userId);
        return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Item has been removed"), HttpStatus.OK);
    }

}
