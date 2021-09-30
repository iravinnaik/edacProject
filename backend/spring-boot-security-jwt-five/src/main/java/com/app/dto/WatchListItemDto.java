package com.app.dto;

import com.app.pojos.WatchList;
import com.app.pojos.Product;

import javax.validation.constraints.NotNull;

public class WatchListItemDto {
    private Integer id;
    private @NotNull Long userId;
    private @NotNull Product product;

    public WatchListItemDto() {
    }

    public WatchListItemDto(WatchList watchList) {
        this.setId(watchList.getId());
        this.setUserId(watchList.getUser().getId());
        this.setProduct(watchList.getProduct());
    }

    @Override
    public String toString() {
        return "WatchListDto{" +
                "id=" + id +
                ", userId=" + userId +
                ", productName=" + product.getName() +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public @NotNull Long getUserId() {
        return userId;
    }

    public void setUserId(Long long1) {
        this.userId = long1;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

}
