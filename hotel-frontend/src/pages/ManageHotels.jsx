import { useState } from "react";
import "./ManageHotels.css";

const emptyForm = {
  name: "",
  city: "",
  rooms: "",
  status: "Active",
  image: "",
};

const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300";

function ManageHotels() {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "The Grand Horizon",
      city: "Goa",
      rooms: 45,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300",
    },
    {
      id: 2,
      name: "Royal Palace",
      city: "Mysore",
      rooms: 30,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300",
    },
    {
      id: 3,
      name: "Sea View Resort",
      city: "Kochi",
      rooms: 60,
      status: "Inactive",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=300",
    },
    {
      id: 4,
      name: "Mountain Retreat",
      city: "Darjeeling",
      rooms: 25,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300",
    },
    {
      id: 5,
      name: "Sea View Resort",
      city: "Bangalore",
      rooms: 60,
      status: "Inactive",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=300",
    },
  ]);

  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null); // null = adding, else editing
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const filteredHotels = hotels.filter((h) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      h.name.toLowerCase().includes(q) || h.city.toLowerCase().includes(q)
    );
  });

  const openAddModal = () => {
    setEditingId(null);
    setForm(emptyForm);
    setErrors({});
    setIsModalOpen(true);
  };

  const openEditModal = (hotel) => {
    setEditingId(hotel.id);
    setForm({
      name: hotel.name,
      city: hotel.city,
      rooms: String(hotel.rooms),
      status: hotel.status,
      image: hotel.image,
    });
    setErrors({});
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Hotel name is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.rooms || Number(form.rooms) <= 0)
      newErrors.rooms = "Enter a valid number of rooms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const hotelData = {
      name: form.name.trim(),
      city: form.city.trim(),
      rooms: Number(form.rooms),
      status: form.status,
      image: form.image.trim() || PLACEHOLDER_IMG,
    };

    if (editingId === null) {
      // Add new hotel
      const newId =
        hotels.length > 0 ? Math.max(...hotels.map((h) => h.id)) + 1 : 1;
      setHotels((prev) => [...prev, { id: newId, ...hotelData }]);
    } else {
      // Update existing hotel
      setHotels((prev) =>
        prev.map((h) => (h.id === editingId ? { ...h, ...hotelData } : h))
      );
    }

    setIsModalOpen(false);
  };

  const deleteHotel = (id) => {
    if (window.confirm("Delete this hotel?")) {
      setHotels((prev) => prev.filter((h) => h.id !== id));
    }
  };

  return (
    <div className="manage-hotels">
      <div className="page-header">
        <h1>Manage Hotels</h1>
        <button className="add-btn" onClick={openAddModal}>
          + Add Hotel
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by hotel name or city..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Hotel</th>
              <th>City</th>
              <th>Rooms</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredHotels.map((hotel) => (
              <tr key={hotel.id}>
                <td>
                  <img
                    src={hotel.image}
                    className="hotel-img"
                    alt={hotel.name}
                    onError={(e) => {
                      e.target.src = PLACEHOLDER_IMG;
                    }}
                  />
                </td>
                <td>{hotel.name}</td>
                <td>{hotel.city}</td>
                <td>{hotel.rooms}</td>
                <td>
                  <span
                    className={hotel.status === "Active" ? "active" : "inactive"}
                  >
                    {hotel.status}
                  </span>
                </td>
                <td>
                  <button className="edit" onClick={() => openEditModal(hotel)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => deleteHotel(hotel.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredHotels.length === 0 && (
              <tr>
                <td colSpan="6" className="empty-row">
                  No hotels match "{search}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{editingId === null ? "Add Hotel" : "Edit Hotel"}</h2>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Hotel Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Sunset Bay Resort"
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="e.g. Jaipur"
                />
                {errors.city && <span className="field-error">{errors.city}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="rooms">Rooms</label>
                  <input
                    id="rooms"
                    name="rooms"
                    type="number"
                    min="1"
                    value={form.rooms}
                    onChange={handleChange}
                    placeholder="e.g. 40"
                  />
                  {errors.rooms && (
                    <span className="field-error">{errors.rooms}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="image">Image URL (optional)</label>
                <input
                  id="image"
                  name="image"
                  type="text"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  {editingId === null ? "Add Hotel" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageHotels;