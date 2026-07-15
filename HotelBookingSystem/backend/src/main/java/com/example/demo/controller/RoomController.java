package com.example.demo.controller;

import com.example.demo.entity.Room;
import com.example.demo.service.RoomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
@CrossOrigin("*")
public class RoomController {

    private final RoomService service;

    public RoomController(RoomService service) {
        this.service = service;
    }

    @PostMapping
    public Room saveRoom(@RequestBody Room room) {
        return service.saveRoom(room);
    }

    @GetMapping
    public List<Room> getAllRooms() {
        return service.getAllRooms();
    }

    @GetMapping("/{id}")
    public Room getRoom(@PathVariable Integer id) {
        return service.getRoomById(id);
    }

    @PutMapping("/{id}")
    public Room updateRoom(@PathVariable Integer id,
                           @RequestBody Room room) {
        return service.updateRoom(id, room);
    }

    @DeleteMapping("/{id}")
    public String deleteRoom(@PathVariable Integer id) {
        service.deleteRoom(id);
        return "Room Deleted Successfully";
    }
}