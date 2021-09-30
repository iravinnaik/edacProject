package com.app.dto;

import com.app.pojos.WatchList;

import javax.validation.constraints.NotNull;

public class AddToWatchListDto {
    private Integer id;
    private @NotNull Integer productId;

    public AddToWatchListDto() {
    }



    @Override
    public String toString() {
        return "WatchListDto{" +
                "id=" + id +
                ", productId=" + productId +
                ",";
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

}
