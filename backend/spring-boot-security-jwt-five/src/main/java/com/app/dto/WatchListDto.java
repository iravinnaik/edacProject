package com.app.dto;

import java.util.List;

public class WatchListDto {
    private List<WatchListItemDto> cartItems;

    public WatchListDto(List<WatchListItemDto> cartItemDtoList) {
        this.cartItems = cartItemDtoList;
    }

    public List<WatchListItemDto> getcartItems() {
        return cartItems;
    }

    public void setCartItems(List<WatchListItemDto> cartItemDtoList) {
        this.cartItems = cartItemDtoList;
    }
}

