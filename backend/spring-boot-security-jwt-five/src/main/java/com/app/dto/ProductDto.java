package com.app.dto;

import com.app.pojos.Product;

import javax.validation.constraints.NotNull;

public class ProductDto {

    private Integer id;
    private @NotNull String name;
    private @NotNull String imageURL;
    private @NotNull double price;
    private @NotNull String description;
    private Integer categoryId;
    private String brand;
    private String storagecapacity;
    private String os;
    private String color;
    private int modelyear;
    private double screensize;
    private double rating;

    public ProductDto(Product product) {
        this.setId(product.getId());
        this.setName(product.getName());
        this.setImageURL(product.getImageURL());
        this.setDescription(product.getDescription());
        this.setPrice(product.getPrice());
        this.setBrand(product.getBrand());
        this.setStoragecapacity(product.getStoragecapacity());
        this.setOs(product.getOs());
        this.setColor(product.getColor());
        this.setModelyear(product.getModelyear());
        this.setScreensize(product.getScreensize());
        this.setCategoryId(product.getCategory().getId());
        this.setRating(product.getRating());
    }

    public ProductDto(@NotNull String name, @NotNull String imageURL, @NotNull double price, @NotNull String description,  Integer categoryId,
    		String brand, String storagecapacity,String os,String color,int modelyear,double sreensize,double rating) {
        this.name = name;
        this.imageURL = imageURL;
        this.price = price;
        this.description = description;
        this.categoryId = categoryId;
        this.brand=brand;
        this.storagecapacity=storagecapacity;
        this.os=os;
        this.color=color;
        this.modelyear=modelyear;
        this.screensize=sreensize;
        this.rating=rating;
    }

    public ProductDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getStoragecapacity() {
		return storagecapacity;
	}

	public void setStoragecapacity(String storagecapacity) {
		this.storagecapacity = storagecapacity;
	}

	public String getOs() {
		return os;
	}

	public void setOs(String os) {
		this.os = os;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getModelyear() {
		return modelyear;
	}

	public void setModelyear(int modelyear) {
		this.modelyear = modelyear;
	}

	public double getScreensize() {
		return screensize;
	}

	public void setScreensize(double screensize) {
		this.screensize = screensize;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}
    
}
