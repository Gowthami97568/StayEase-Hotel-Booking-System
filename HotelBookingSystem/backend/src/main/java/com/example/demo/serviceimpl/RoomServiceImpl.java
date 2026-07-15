package com.example.demo.serviceimpl;

import com.example.demo.entity.Room;
import com.example.demo.repository.RoomRepository;
import com.example.demo.service.RoomService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {

    private final RoomRepository repository;

    public RoomServiceImpl(RoomRepository repository) {
        this.repository = repository;
    }

    @Override
    public Room saveRoom(Room room) {
        return repository.save(room);
    }

    @Override
    public List<Room> getAllRooms() {
        return repository.findAll();
    }

    @Override
    public Room getRoomById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Room updateRoom(Integer id, Room room) {

        Room existing = repository.findById(id).orElse(null);

        if (existing != null) {
            existing.setHotelId(room.getHotelId());
            existing.setRoomType(room.getRoomType());
            existing.setRoomNumber(room.getRoomNumber());
            existing.setPricePerNight(room.getPricePerNight());
            existing.setCapacity(room.getCapacity());
            existing.setBedType(room.getBedType());
            existing.setRoomSize(room.getRoomSize());
            existing.setTotalRooms(room.getTotalRooms());
            existing.setDescription(room.getDescription());
            existing.setStatus(room.getStatus());

            return repository.save(existing);
        }

        return null;
    }

    @Override
    public void deleteRoom(Integer id) {
        repository.deleteById(id);
    }
}