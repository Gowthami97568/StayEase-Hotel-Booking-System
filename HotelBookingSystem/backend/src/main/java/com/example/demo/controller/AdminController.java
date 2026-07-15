package com.example.demo.controller;

import com.example.demo.dto.AdminRegisterRequest;
import com.example.demo.entity.Hotel;
import com.example.demo.entity.User;
import com.example.demo.repository.HotelRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

    private final UserRepository userRepository;
    private final HotelRepository hotelRepository;

    public AdminController(UserRepository userRepository,
                           HotelRepository hotelRepository) {

        this.userRepository = userRepository;
        this.hotelRepository = hotelRepository;
    }
    @PostMapping("/register")
public String register(@RequestBody AdminRegisterRequest request) {

    if (userRepository.findByEmail(request.getEmail()).isPresent()) {
        throw new RuntimeException("Email already exists");
    }

    User user = new User();

    user.setFirstName(request.getAdminName());
    user.setLastName("");
    user.setPhone(request.getContactNumber());
    user.setEmail(request.getEmail());
    user.setPassword(request.getPassword());
    user.setRole("ADMIN");

    user = userRepository.save(user);

    Hotel hotel = new Hotel();

    hotel.setOwnerId(user.getUserId());

    hotel.setHotelName(request.getHotelName());

    hotel.setHotelEmail(request.getEmail());

    hotel.setContactNumber(request.getContactNumber());

    hotel.setAddress(request.getAddress());

    hotel.setCity(request.getCity());

    hotel.setState(request.getState());

    hotel.setCountry(request.getCountry());

    hotel.setPincode(request.getPincode());

    hotel.setDescription("");

    hotel.setStatus("ACTIVE");

    hotelRepository.save(hotel);

    return "Admin Registered Successfully";
    
}
   
}