package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.config.ApiResponse;
import com.app.dto.ProductDto;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.pojos.User;
import com.app.repository.UserRepository;
import com.app.security.services.CategoryService;
import com.app.security.services.MailService;
import com.app.security.services.ProductService;
import com.app.security.services.SendMailServiceImpl;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/api/test/product")
public class ProductController {
    @Autowired ProductService productService;
    @Autowired
    CategoryService categoryService;
    @Autowired
    MailService service;
    @Autowired
    UserRepository userrepo;
 

    @GetMapping("/")
    public ResponseEntity<List<ProductDto>> getProducts() {
        List<ProductDto> body = productService.listProducts();
        return new ResponseEntity<List<ProductDto>>(body, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ApiResponse> addProduct(@RequestBody ProductDto productDto) {
        Optional<Category> optionalCategory = categoryService.readCategory(productDto.getCategoryId());
        Category category = optionalCategory.get();
        productService.addProduct(productDto, category);
    	List<User> list=userrepo.findAll();
    	for(User u:list)
    	{
    		service.sendMail(u.getEmail());
    	}  
        return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Product has been added"), HttpStatus.CREATED);
    }

    @PostMapping("/update/{productID}")
    public ResponseEntity<ApiResponse> updateProduct(@PathVariable("productID") Integer productID, @RequestBody @Valid ProductDto productDto) {
        Optional<Category> optionalCategory = categoryService.readCategory(productDto.getCategoryId());
        if (!optionalCategory.isPresent()) {
            return new ResponseEntity<ApiResponse>(new ApiResponse(false, "category is invalid"), HttpStatus.CONFLICT);
        }
        Category category = optionalCategory.get();
        productService.updateProduct(productID, productDto, category);
        return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Product has been updated"), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductsbyid(@PathVariable int id) throws Exception {
        Product body = productService.getProductById(id);
        return new ResponseEntity<Product>(body, HttpStatus.OK);
    }
    @GetMapping("/new")
    public ResponseEntity<List<ProductDto>> getnewlyaddedProducts() {
        List<ProductDto> body = productService.listnewlyaddedProducts();
        return new ResponseEntity<List<ProductDto>>(body, HttpStatus.OK);
    }
    
}
