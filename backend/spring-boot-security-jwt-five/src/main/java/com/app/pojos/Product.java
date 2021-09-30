package com.app.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.app.dto.ProductDto;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private @NotNull String name;
    private  String imageURL;
    private @NotNull double price;
    private @NotNull String description;
    private String brand;
    private String storagecapacity;
    private String os;
    private String color;
    private int modelyear;
    private double screensize;
    @Column(name = "created_date")
    private Date createdDate;
    private double rating;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "category_id")
    Category category;


    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "product")
    private List<WatchList> watchLists;





    public Product(ProductDto productDto, Category category) {
        this.name = productDto.getName();
        this.imageURL = productDto.getImageURL();
        this.description = productDto.getDescription();
        this.price = productDto.getPrice();
        this.category = category;
        this.brand=productDto.getBrand();
        this.storagecapacity=productDto.getStoragecapacity();
        this.os=productDto.getOs();
        this.color=productDto.getColor();
        this.modelyear=productDto.getModelyear();
        this.screensize=productDto.getScreensize();
        this.rating=productDto.getRating();
       
       
 
    }

    public Product(String name, String imageURL, double price, String description, Category category,
    		String brand,String storagecapacity,String os,String color,int modelyear,double screensize,double rating) {
        super();
        this.name = name;
        this.imageURL = imageURL;
        this.price = price;
        this.description = description;
        this.category = category;
        this.brand=brand;
        this.storagecapacity=storagecapacity;
        this.os=os;
        this.color=color;
        this.modelyear=modelyear;
        this.screensize=screensize;
        this.createdDate = new Date();
        this.rating=rating;

    }

    public Product() {
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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
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
    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }
    

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", imageURL=" + imageURL + ", price=" + price + ", description="
				+ description + ", brand=" + brand + ", storagecapacity=" + storagecapacity + ", os=" + os + ", color="
				+ color + ", modelyear=" + modelyear + ", screensize=" + screensize + ", category=" + category
				+ ", watchLists=" + watchLists + "]";
	}


}
