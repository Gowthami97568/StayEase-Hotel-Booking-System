package com.example.demo.serviceimpl;

import com.example.demo.entity.Hotel;
import com.example.demo.repository.HotelRepository;
import com.example.demo.service.HotelService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelServiceImpl implements HotelService {

    private final HotelRepository repository;

    public HotelServiceImpl(HotelRepository repository) {
        this.repository = repository;
    }

    @Override
    public Hotel saveHotel(Hotel hotel) {
        return repository.save(hotel);
    }

    @Override
    public List<Hotel> getAllHotels() {
        return repository.findAll();
    }

    @Override
    public Hotel getHotelById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Hotel updateHotel(Integer id, Hotel hotel) {

        Hotel existing = repository.findById(id).orElse(null);

        if (existing != null) {

            existing.setOwnerId(hotel.getOwnerId());
            existing.setHotelName(hotel.getHotelName());
            existing.setDescription(hotel.getDescription());
            existing.setAddress(hotel.getAddress());
            existing.setCity(hotel.getCity());
            existing.setState(hotel.getState());
            existing.setCountry(hotel.getCountry());
            existing.setPincode(hotel.getPincode());
            existing.setLatitude(hotel.getLatitude());
            existing.setLongitude(hotel.getLongitude());
            existing.setStarRating(hotel.getStarRating());
            existing.setContactNumber(hotel.getContactNumber());
            existing.setHotelEmail(hotel.getHotelEmail());
            existing.setCheckInTime(hotel.getCheckInTime());
            existing.setCheckOutTime(hotel.getCheckOutTime());
            existing.setStatus(hotel.getStatus());

            return repository.save(existing);
        }

        return null;
    }

    @Override
    public void deleteHotel(Integer id) {
        repository.deleteById(id);
    }
}