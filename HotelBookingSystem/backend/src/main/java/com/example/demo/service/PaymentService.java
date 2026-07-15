package com.example.demo.service;

import com.example.demo.entity.Payment;
import java.util.List;

public interface PaymentService {

    Payment savePayment(Payment payment);

    List<Payment> getAllPayments();

    Payment getPaymentById(Integer id);

    Payment updatePayment(Integer id, Payment payment);

    void deletePayment(Integer id);
}