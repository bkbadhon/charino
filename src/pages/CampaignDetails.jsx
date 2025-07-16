import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import useAxios, { AxiosSource } from "../hook/useAxios";

const CampaignDetails = () => {
  const { id } = useParams();
  const axiosLink = useAxios(AxiosSource);
  const [campaign, setCampaign] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    number: "",
    amount: "",
  });
  const [showStripe, setShowStripe] = useState(false);

  useEffect(() => {
    axiosLink
      .get(`/campaign/${id}`)
      .then((res) => setCampaign(res.data))
      .catch((err) => console.error(err));
  }, [id, axiosLink]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDonate = () => {
    if (!formData.username || !formData.number || !formData.amount) {
      alert("Please fill out all fields");
      return;
    }
    setShowStripe(true);
  };

  const handleToken = (token) => {
    console.log("Stripe Token:", token);

    axiosLink
      .post("/donation", {
        donorName: formData.username,
        amount: parseInt(formData.amount),
        campaignId: id,
      })
      .then(() => {
        alert("Donation successful!");
        setCampaign({
          ...campaign,
          raised: campaign.raised + parseInt(formData.amount),
        });
        setFormData({ username: "", number: "", amount: "" });
        setShowStripe(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to process donation");
      });
  };

  if (!campaign) {
    return <div className="text-center my-10">Loading...</div>;
  }

  return (
    <div className="w-10/12 text-black mx-auto my-10 grid gap-8 grid-cols-1 md:grid-cols-2">
      <div>
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold text-black">{campaign.title}</h2>
        <p className="my-4">{campaign.description}</p>
        <div className="text-sm">
          <div>
            Goal: <span className="font-medium">${campaign.goals}</span>
          </div>
          <div>
            Raised:{" "}
            <span className="font-medium text-green-700">${campaign.raised}</span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded p-6">
        <h3 className="text-xl font-bold mb-4">Donate to this campaign</h3>
        <div className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Your name"
            value={formData.username}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="number"
            placeholder="Your phone number"
            value={formData.number}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="amount"
            placeholder="Donation amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {showStripe ? (
            <StripeCheckout
              stripeKey="pk_test_TYooMQauvdEDq54NiTphI7jx" // Replace with your Stripe public key
              token={handleToken}
              amount={formData.amount * 100} // Stripe expects amount in cents
              name={`Donate to ${campaign.title}`}
              description={`Thank you, ${formData.username}!`}
              email={`${formData.username}@gmail.com`}
            />
          ) : (
            <button
              onClick={handleDonate}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded w-full"
            >
              Donate
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
