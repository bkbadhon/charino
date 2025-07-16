import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxios, { AxiosSource } from "../hook/useAxios";

const Admin = () => {
  const axiosLink = useAxios(AxiosSource);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");

  const [campaignData, setCampaignData] = useState({
    title: "",
    description: "",
    image: "",
    goals: "",
    category: "food",
  });
  const [campaignError, setCampaignError] = useState("");
  const [campaignSuccess, setCampaignSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCampaignChange = (e) => {
    setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axiosLink.post("/admin/login", formData);
      localStorage.setItem("adminToken", res.data.token);
      setToken(res.data.token);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You can now create campaigns.",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (err) {
      setError("Invalid username or password");
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid username or password",
      });
    }
  };

  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    setCampaignError("");
    setCampaignSuccess("");

    if (
      !campaignData.title ||
      !campaignData.description ||
      !campaignData.image ||
      !campaignData.goals ||
      !campaignData.category
    ) {
      setCampaignError("Please fill in all fields");
      Swal.fire({
        icon: "warning",
        title: "Incomplete Data",
        text: "Please fill in all fields.",
      });
      return;
    }

    try {
      await axiosLink.post(
        "/campaign",
        {
          ...campaignData,
          goals: Number(campaignData.goals),
          raised: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCampaignSuccess("Campaign created successfully!");
      setCampaignData({
        title: "",
        description: "",
        image: "",
        goals: "",
        category: "food",
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Campaign created successfully!",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (err) {
      setCampaignError("Failed to create campaign");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to create campaign",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken("");
    setCampaignError("");
    setCampaignSuccess("");
    setFormData({ username: "", password: "" });
    Swal.fire({
      icon: "info",
      title: "Logged out",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  if (token) {
    return (
      <div className="max-w-lg text-black mx-auto p-6 border rounded shadow mt-10">
        <h2 className="text-2xl mb-4 text-center font-bold">Create New Campaign</h2>

        <form onSubmit={handleCreateCampaign} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={campaignData.title}
            onChange={handleCampaignChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={campaignData.description}
            onChange={handleCampaignChange}
            className="w-full border px-3 py-2 rounded"
            rows={4}
            required
          />
          <input
            type="url"
            name="image"
            placeholder="Image URL"
            value={campaignData.image}
            onChange={handleCampaignChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="number"
            name="goals"
            placeholder="Goals (number)"
            value={campaignData.goals}
            onChange={handleCampaignChange}
            className="w-full border px-3 py-2 rounded"
            min={0}
            required
          />
          <select
            name="category"
            value={campaignData.category}
            onChange={handleCampaignChange}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="food">Food</option>
            <option value="education">Education</option>
            <option value="water">Water</option>
            <option value="house">House</option>
            <option value="friendship">Friendship</option>
          </select>

          {campaignError && (
            <p className="text-red-600 font-medium">{campaignError}</p>
          )}
          {campaignSuccess && (
            <p className="text-green-600 font-medium">{campaignSuccess}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-800"
          >
            Create Campaign
          </button>
        </form>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleLogin}
      className="w-10/12 my-6  min-h-screen text-black mx-auto p-6 border rounded shadow mt-10"
    >
      <h2 className="text-2xl mb-4 text-center font-bold">Admin Login</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded mb-4"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded mb-4"
        required
      />
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <button
        type="submit"
        className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-800"
      >
        Login
      </button>
    </form>
  );
};

export default Admin;
