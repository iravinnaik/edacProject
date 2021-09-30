package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.WatchList;
import com.app.pojos.User;

import java.util.List;
@Repository
public interface WatchListRepository extends JpaRepository<WatchList, Integer> {

    List<WatchList> findAllByUserOrderByCreatedDateDesc(User user);

    List<WatchList> deleteByUser(User user);

}

