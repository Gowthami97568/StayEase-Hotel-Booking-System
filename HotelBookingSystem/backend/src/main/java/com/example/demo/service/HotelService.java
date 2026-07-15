package com.example.demo.service;

import com.example.demo.entity.Hotel;
import java.util.List;

public interface HotelService {

    Hotel saveHotel(Hotel hotel);

    List<Hotel> getAllHotels();

    Hotel getHotelById(Integer id);

    Hotel updateHotel(Integer id, Hotel hotel);

    void deleteHotel(Integer id);

}
