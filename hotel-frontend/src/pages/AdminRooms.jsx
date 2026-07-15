import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import { hotelAdminService } from "../services/hotelService";
import "./AdminDashboard.css";
import "./AdminHotels.css";

const emptyForm = { type: "", price: "", beds: "", guests: "", available: "", image: "" };

function AdminRooms() {
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editingRoomId, setEditingRoomId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const loadHotels = () =>
    hotelAdminService.getAllHotelsAdmin().then((data) => {
      setHotels(data);
      if (!selectedHotelId && data.length) setSelectedHotelId(data[0].id);
    });

  useEffect(() => { loadHotels(); }, []);

  const selectedHotel = hotels.find((h) => h.id === selectedHotelId);

  const openAdd = () => {
    setEditingRoomId(null);
    setForm(emptyForm);
    setShowModal(true);
  };

  const openEdit = (room) => {
    setEditingRoomId(room.id);
    setForm({ type: room.type, price: room.price, beds: room.beds, guests: room.guests, available: room.available, image: room.image });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      price: Number(form.price),
      guests: Number(form.guests),
      available: Number(form.available),
    };
    if (editingRoomId) {
      await hotelAdminService.updateRoom(selectedHotelId, editingRoomId, payload);
    } else {
      await hotelAdminService.addRoom(selectedHotelId, payload);
    }
    setShowModal(false);
    loadHotels();
  };

  const handleDelete = async (roomId) => {
    if (!confirm("Delete this room type?")) return;
    await hotelAdminService.deleteRoom(selectedHotelId, roomId);
    loadHotels();
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-main">
        <header className="admin-main__header">
          <div className="admin-main__header-row">
            <div>
              <h1>Rooms</h1>
              <p>Manage room types, pricing, and availability per hotel.</p>
            </div>
            {selectedHotelId && (
              <button className="btn-primary btn-inline" onClick={openAdd}>+ Add Room</button>
            )}
          </div>
        </header>

        <section className="admin-panel">
          <div className="form-group" style={{ maxWidth: 340 }}>
            <label>Select Hotel</label>
            <select value={selectedHotelId || ""} onChange={(e) => setSelectedHotelId(Number(e.target.value))}>
              {hotels.map((h) => (
                <option key={h.id} value={h.id}>{h.name}</option>
              ))}
            </select>
          </div>

          <div className="table-wrap" style={{ marginTop: 20 }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Room Type</th>
                  <th>Price/Night</th>
                  <th>Beds</th>
                  <th>Guests</th>
                  <th>Available</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {selectedHotel?.rooms.map((room) => (
                  <tr key={room.id}>
                    <td>{room.type}</td>
                    <td>₹{room.price.toLocaleString()}</td>
                    <td>{room.beds}</td>
                    <td>{room.guests}</td>
                    <td>{room.available}</td>
                    <td>
                      <button className="btn-secondary btn-sm" onClick={() => openEdit(room)}>Edit</button>{" "}
                      <button className="btn-danger btn-sm" onClick={() => handleDelete(room.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
                {selectedHotel?.rooms.length === 0 && (
                  <tr><td colSpan={6} className="muted">No rooms yet for this hotel.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {showModal && (
        <Modal title={editingRoomId ? "Edit Room" : "Add Room"} onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Room Type</label>
              <input value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} placeholder="Deluxe Room" required />
            </div>
            <div className="form-group">
              <label>Price per Night (₹)</label>
              <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Bed Configuration</label>
              <input value={form.beds} onChange={(e) => setForm({ ...form, beds: e.target.value })} placeholder="1 King Bed" required />
            </div>
            <div className="form-group">
              <label>Max Guests</label>
              <input type="number" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Rooms Available</label>
              <input type="number" value={form.available} onChange={(e) => setForm({ ...form, available: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} required />
            </div>
            <button type="submit" className="btn-primary">{editingRoomId ? "Save Changes" : "Add Room"}</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default AdminRooms;