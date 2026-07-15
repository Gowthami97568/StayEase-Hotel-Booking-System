import api from "./api";

export const authService = {

  // CUSTOMER LOGIN
  async login(email, password) {

    const { data } = await api.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", data);
    localStorage.setItem("role", "CUSTOMER");

    return data;
  },

  // ADMIN LOGIN
  async adminLogin(email, password) {

    const { data } = await api.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", data);
    localStorage.setItem("role", "ADMIN");

    return data;
  },

  // CUSTOMER REGISTER
  async customerRegister(customer) {

    const { data } = await api.post("/customers", customer);

    return data;
  },

  // ADMIN REGISTER
  async adminRegister(admin) {

    const { data } = await api.post("/admin/register", admin);

    return data;
  },

  // LOGOUT
  logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");

  },

  // CHECK LOGIN
  isAuthenticated() {

    return localStorage.getItem("token") !== null;

  },

  // GET ROLE
  getCurrentRole() {

    return localStorage.getItem("role");

  },

  // GET TOKEN
  getToken() {

    return localStorage.getItem("token");

  }

};