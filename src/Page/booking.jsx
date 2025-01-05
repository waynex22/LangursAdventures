import React, { useState } from "react";
import emailjs from "emailjs-com";
function Booking() {
    const [formData, setFormData] = useState({
        name: "",
        trip: "",
        dayOfTrip: "",
        Numberofparticipants: "",
        email: "",
        message: "",
        privacy: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        if (!formData.privacy) {
          alert("Please accept the privacy policy.");
          return;
        }
    
        emailjs.send(
          "service_rbwirdu",
          "template_mvdj66j", 
          formData,
          "xFaIxPAgMMSG8dh6F"
        )
        .then((result) => {
        //   console.log(result.text);
          alert("Email sent successfully!");
          window.location.href = "/";
        })
        .catch((error) => {
        //   console.log(error.text);
          alert("Failed to send email.");
        });
      };
  return (
    <div className="bg-sessionImg flex items-center justify-center min-h-screen">
      <div className=" p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          LET US BUILD AN ADVENTURE FOR YOU
        </h2>
        <form onSubmit={sendEmail}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-100 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="trip"
                className="block text-sm font-medium text-gray-700"
              >
                Choose a trip
              </label>
              <select
                id="trip"
                name="trip"
                className="mt-1 block w-full p-2  border-gray-100 bg-gray-100  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.trip}
                onChange={handleChange}
              >
                <option value="" selected="selected">
                  Please choose
                </option>
                <option value="Full day kayaking">Full day kayaking</option>
                <option value="Half day kayaking PM">Half day kayaking PM</option>
                <option value="Half day kayaking AM">Half day kayaking AM</option>
                <option value="Half day Rock climbing">Half day Rock climbing</option>
                <option value="Full day Rock climbing & Kayaking">Full day Rock climbing & Kayaking</option>
                <option value="Half day Deep Water Solo AM">Half day Deep Water Solo AM</option>
                <option value="Half day Deep Water Solo PM">Half day Deep Water Solo PM</option>
                <option value="Full day Deep Water Solo & Kayaking">
                  Full day Deep Water Solo & Kayaking
                </option>
                <option value="Full day Rock climbing & Deep Water solo">
                  Full day Rock climbing & Deep Water solo
                </option>
                <option value="Half day Trekking AM">Half day Trekking AM</option>
                <option value="Half day Trekking PM">Half day Trekking PM</option>
                <option value="Full day Trekking">Full day Trekking</option>
                <option value="National Park Trek">National Park Trek</option>
                <option value="Glowing Plankton tour">Glowing Plankton tour</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="dayOfTrip"
                className="block text-sm font-medium text-gray-700"
              >
                Day of Trip
              </label>
              <input
                type="date"
                id="dayOfTrip"
                name="dayOfTrip"
                value={formData.dayOfTrip}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md  border-gray-100 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="Numberofparticipants"
                className="block text-sm font-medium text-gray-700"
              >
                Number of participants
              </label>
              <input
                type="number"
                id="Numberofparticipants"
                name="Numberofparticipants"
                value={formData.Numberofparticipants}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md  border-gray-100 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md  border-gray-100 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md  border-gray-100 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              ></textarea>
            </div>
          </div>

          <div className="flex items-start mb-4">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-100 bg-gray-100 rounded focus:ring-indigo-500"
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                I have read and understand the privacy policy.
              </label>
            </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-orange-500 text-white p-2 rounded-md shadow hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Booking;
