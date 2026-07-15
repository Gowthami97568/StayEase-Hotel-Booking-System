package com.example.demo.service;

import com.example.demo.entity.Room;
import java.util.List;

public interface RoomService {

    Room saveRoom(Room room);

    List<Room> getAllRooms();

    Room getRoomById(Integer id);

    Room updateRoom(Integer id, Room room);

    void deleteRoom(Integer id);
}