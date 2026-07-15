import { useState, useMemo } from "react";
import "./ManageRooms.css";

const emptyForm = {
  roomNo: "",
  hotel: "",
  type: "Deluxe",
  beds: "",
  guests: "",
  price: "",
  status: "Available",
};

const ROOM_TYPES = ["Deluxe", "Suite", "Luxury", "Standard"];

function ManageRooms() {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomNo: "101",
      type: "Deluxe",
      hotel: "Horizon",
      beds: 2,
      guests: 2,
      price: 4500,
      status: "Available",
    },
    {
      id: 2,
      roomNo: "102",
      type: "Suite",
      hotel: "Grand",
      beds: 3,
      guests: 4,
      price: 7500,
      status: "Booked",
    },
    {
      id: 3,
      roomNo: "103",
      type: "Luxury",
      hotel: "Royal Palace",
      beds: 2,
      guests: 3,
      price: 6500,
      status: "Available",
    },
    {
        id: 1,
      roomNo: "104",
      type: "Mephil",
      hotel: "GD",
      beds: 2,
      guests: 2,
      price: 4500,
      status: "Available",
    },
    {id: 1,
      roomNo: "105",
      type: "Raj",
      hotel: "Gk",
      beds: 2,
      guests: 2,
      price: 4500,
      status: "Available",
    },
    {
        Id: 1,
      roomNo: "106",
      type: "Royal",
      hotel: "Krish",
      beds: 3,
      guests: 2,
      price: 4500,
      status: "Available",
    },
    {Id: 1,
      roomNo: "107",
      type: "Dely",
      hotel: "palinte",
      beds: 2,
      guests: 2,
      price: 4500,
      status: "Available",
},
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [hotelFilter, setHotelFilter] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null); // null = adding
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const hotelOptions = useMemo(
    () => ["All", ...new Set(rooms.map((r) => r.hotel))],
    [rooms]
  );

  const filteredRooms = rooms.filter((r) => {
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      r.roomNo.toLowerCase().includes(q) ||
      r.hotel.toLowerCase().includes(q) ||
      r.type.toLowerCase().includes(q);
    const matchesStatus = statusFilter === "All" || r.status === statusFilter;
    const matchesHotel = hotelFilter === "All" || r.hotel === hotelFilter;
    return matchesSearch && matchesStatus && matchesHotel;
  });

  const openAddModal = () => {
    setEditingId(null);
    setForm(emptyForm);
    setErrors({});
    setIsModalOpen(true);
  };

  const openEditModal = (room) => {
    setEditingId(room.id);
    setForm({
      roomNo: room.roomNo,
      hotel: room.hotel,
      type: room.type,
      beds: String(room.beds),
      guests: String(room.guests),
      price: String(room.price),
      status: room.status,
    });
    setErrors({});
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.roomNo.trim()) newErrors.roomNo = "Room number is required";
    if (!form.hotel.trim()) newErrors.hotel = "Hotel name is required";
    if (!form.beds || Number(form.beds) <= 0)
      newErrors.beds = "Enter a valid number of beds";
    if (!form.guests || Number(form.guests) <= 0)
      newErrors.guests = "Enter a valid number of guests";
    if (!form.price || Number(form.price) <= 0)
      newErrors.price = "Enter a valid price";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const roomData = {
      roomNo: form.roomNo.trim(),
      hotel: form.hotel.trim(),
      type: form.type,
      beds: Number(form.beds),
      guests: Number(form.guests),
      price: Number(form.price),
      status: form.status,
    };

    if (editingId === null) {
      const newId = rooms.length > 0 ? Math.max(...rooms.map((r) => r.id)) + 1 : 1;
      setRooms((prev) => [...prev, { id: newId, ...roomData }]);
    } else {
      setRooms((prev) =>
        prev.map((r) => (r.id === editingId ? { ...r, ...roomData } : r))
      );
    }

    setIsModalOpen(false);
  };

  const deleteRoom = (id) => {
    if (window.confirm("Delete this room?")) {
      setRooms((prev) => prev.filter((room) => room.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setRooms((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: r.status === "Available" ? "Booked" : "Available" }
          : r
      )
    );
  };

  return (
    <div className="manage-rooms">
      <div className="header">
        <h1>Manage Rooms</h1>
        <button className="add-btn" onClick={openAddModal}>
          + Add Room
        </button>
      </div>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search by room no, hotel, or type..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={hotelFilter}
          onChange={(e) => setHotelFilter(e.target.value)}
        >
          {hotelOptions.map((h) => (
            <option key={h} value={h}>
              {h === "All" ? "All Hotels" : h}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Available">Available</option>
          <option value="Booked">Booked</option>
        </select>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Room No</th>
              <th>Hotel</th>
              <th>Room Type</th>
              <th>Beds</th>
              <th>Guests</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRooms.map((room) => (
              <tr key={room.id}>
                <td>{room.roomNo}</td>
                <td>{room.hotel}</td>
                <td>{room.type}</td>
                <td>{room.beds}</td>
                <td>{room.guests}</td>
                <td>₹{room.price.toLocaleString("en-IN")}</td>
                <td>
                  <span
                    className={room.status === "Available" ? "available" : "booked"}
                    onClick={() => toggleStatus(room.id)}
                    title="Click to toggle status"
                  >
                    {room.status}
                  </span>
                </td>
                <td>
                  <button className="edit-btn" onClick={() => openEditModal(room)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => deleteRoom(room.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredRooms.length === 0 && (
              <tr>
                <td colSpan="8" className="empty-row">
                  No rooms match your search or filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{editingId === null ? "Add Room" : "Edit Room"}</h2>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="roomNo">Room No</label>
                  <input
                    id="roomNo"
                    name="roomNo"
                    type="text"
                    value={form.roomNo}
                    onChange={handleChange}
                    placeholder="e.g. 305"
                  />
                  {errors.roomNo && <span className="field-error">{errors.roomNo}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="type">Room Type</label>
                  <select id="type" name="type" value={form.type} onChange={handleChange}>
                    {ROOM_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="hotel">Hotel</label>
                <input
                  id="hotel"
                  name="hotel"
                  type="text"
                  value={form.hotel}
                  onChange={handleChange}
                  placeholder="e.g. Grand Horizon"
                />
                {errors.hotel && <span className="field-error">{errors.hotel}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="beds">Beds</label>
                  <input
                    id="beds"
                    name="beds"
                    type="number"
                    min="1"
                    value={form.beds}
                    onChange={handleChange}
                    placeholder="e.g. 2"
                  />
                  {errors.beds && <span className="field-error">{errors.beds}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="guests">Max Guests</label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    value={form.guests}
                    onChange={handleChange}
                    placeholder="e.g. 3"
                  />
                  {errors.guests && <span className="field-error">{errors.guests}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Price per night (₹)</label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    min="1"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="e.g. 5000"
                  />
                  {errors.price && <span className="field-error">{errors.price}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                  >
                    <option value="Available">Available</option>
                    <option value="Booked">Booked</option>
                  </select>
                </div>
              </div>

              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  {editingId === null ? "Add Room" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageRooms;