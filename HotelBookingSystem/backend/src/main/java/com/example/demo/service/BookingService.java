package com.example.demo.service;

import com.example.demo.entity.Booking;
import java.util.List;

public interface BookingService {

    Booking saveBooking(Booking booking);

    List<Booking> getAllBookings();

    Booking getBookingById(Integer id);

    Booking updateBooking(Integer id, Booking booking);

    void deleteBooking(Integer id);
}