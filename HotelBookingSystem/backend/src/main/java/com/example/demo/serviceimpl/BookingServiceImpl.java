package com.example.demo.serviceimpl;

import com.example.demo.entity.Booking;
import com.example.demo.repository.BookingRepository;
import com.example.demo.service.BookingService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {

    private final BookingRepository repository;

    public BookingServiceImpl(BookingRepository repository) {
        this.repository = repository;
    }

    @Override
    public Booking saveBooking(Booking booking) {
        return repository.save(booking);
    }

    @Override
    public List<Booking> getAllBookings() {
        return repository.findAll();
    }

    @Override
    public Booking getBookingById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Booking updateBooking(Integer id, Booking booking) {

        Booking existing = repository.findById(id).orElse(null);

        if (existing != null) {

            existing.setBookingNumber(booking.getBookingNumber());
            existing.setCustomerId(booking.getCustomerId());
            existing.setHotelId(booking.getHotelId());
            existing.setCheckInDate(booking.getCheckInDate());
            existing.setCheckOutDate(booking.getCheckOutDate());
            existing.setBookingDate(booking.getBookingDate());
            existing.setAdults(booking.getAdults());
            existing.setChildren(booking.getChildren());
            existing.setTotalRooms(booking.getTotalRooms());
            existing.setTotalNights(booking.getTotalNights());
            existing.setBookingStatus(booking.getBookingStatus());
            existing.setPaymentStatus(booking.getPaymentStatus());
            existing.setSubtotal(booking.getSubtotal());
            existing.setTaxAmount(booking.getTaxAmount());
            existing.setDiscountAmount(booking.getDiscountAmount());
            existing.setFinalAmount(booking.getFinalAmount());
            existing.setSpecialRequest(booking.getSpecialRequest());

            return repository.save(existing);
        }

        return null;
    }

    @Override
    public void deleteBooking(Integer id) {
        repository.deleteById(id);
    }
}