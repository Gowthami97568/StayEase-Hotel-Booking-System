package com.example.demo.controller;

import com.example.demo.entity.Hotel;
import com.example.demo.service.HotelService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hotels")
@CrossOrigin("*")
public class HotelController {

    private final HotelService service;

    public HotelController(HotelService service) {
        this.service = service;
    }

    @PostMapping
    public Hotel saveHotel(@RequestBody Hotel hotel) {
        return service.saveHotel(hotel);
    }

    @GetMapping
    public List<Hotel> getAllHotels() {
        return service.getAllHotels();
    }

    @GetMapping("/{id}")
    public Hotel getHotel(@PathVariable Integer id) {
        return service.getHotelById(id);
    }

    @PutMapping("/{id}")
    public Hotel updateHotel(@PathVariable Integer id,
                             @RequestBody Hotel hotel) {
        return service.updateHotel(id, hotel);
    }

    @DeleteMapping("/{id}")
    public String deleteHotel(@PathVariable Integer id) {
        service.deleteHotel(id);
        return "Hotel Deleted Successfully";
    }
}