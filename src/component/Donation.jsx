import React, { useEffect, useState } from "react";
import useAxios, { AxiosSource } from "../hook/useAxios";
import { Link } from "react-router-dom";

const Donation = () => {
  const axiosLink = useAxios(AxiosSource);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axiosLink
      .get("/campaign")
      .then((res) => {
        setCampaigns(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [axiosLink]);

  return (
    <div className="my-16">
      {/* Header */}
      <div className="w-10/12 mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-green-900 mb-1">
            Our Donations
          </h2>
          <p className="text-gray-600">
            Support our causes and make a difference today.
          </p>
        </div>

        <div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded">
            View All
          </button>
        </div>
      </div>

      {/* Campaigns */}
      <div className="w-10/12 mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {campaigns.map((campaign) => (
          <div
            key={campaign._id}
            className="bg-white shadow-md rounded p-4 flex flex-col"
          >
            {/* Image & category badge */}
            <div className="relative mb-4">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover rounded"
              />
              <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-medium px-2 py-1 rounded">
                {campaign.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              {campaign.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-4">{campaign.description}</p>

            {/* Raised & Goals */}
            <div className="flex justify-between text-sm text-gray-600 mb-4">
                <div>
                <span>Goals: </span>
                <span className="font-medium">${campaign.goals}</span>{" "}
              </div>
              <div>
                <span>Raised: </span>
                <span className="font-medium text-green-700">
                  ${campaign.raised}
                </span>{" "}
              </div>
              
            </div>

             <Link
              to={`/campaign/${campaign._id}`}
              className="mt-auto bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded text-center"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donation;
