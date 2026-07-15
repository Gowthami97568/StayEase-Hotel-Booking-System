package com.example.demo.serviceimpl;

import com.example.demo.entity.Customer;
import com.example.demo.entity.User;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.CustomerService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final UserRepository userRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository,
                               UserRepository userRepository) {
        this.customerRepository = customerRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Customer saveCustomer(Customer customer) {

        try {

            // Save customer
            Customer savedCustomer = customerRepository.save(customer);

            // Create login user
            User user = new User();

            user.setFirstName(customer.getFirstName());
            user.setLastName(customer.getLastName());
            user.setPhone(customer.getPhone());

            user.setEmail(customer.getEmail());
            user.setPassword(customer.getPassword());
            user.setRole("CUSTOMER");

            userRepository.save(user);

            return savedCustomer;

        } catch (Exception e) {

            e.printStackTrace();
            throw e;
        }
    }

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getCustomerById(Integer id) {
        return customerRepository.findById(id).orElse(null);
    }

    @Override
    public Customer updateCustomer(Integer id, Customer customer) {

        Customer existing = customerRepository.findById(id).orElse(null);

        if (existing != null) {

            existing.setFirstName(customer.getFirstName());
            existing.setLastName(customer.getLastName());
            existing.setEmail(customer.getEmail());
            existing.setPhone(customer.getPhone());
            existing.setPassword(customer.getPassword());
            existing.setCountry(customer.getCountry());

            customerRepository.save(existing);

            User user = userRepository.findByEmail(customer.getEmail()).orElse(null);

            if (user != null) {
                user.setFirstName(customer.getFirstName());
                user.setLastName(customer.getLastName());
                user.setPhone(customer.getPhone());
                user.setPassword(customer.getPassword());

                userRepository.save(user);
            }

            return existing;
        }

        return null;
    }

    @Override
    public void deleteCustomer(Integer id) {
        customerRepository.deleteById(id);
    }
}