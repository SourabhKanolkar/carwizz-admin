import React, { useState } from 'react';
import Navbar from './Navbar';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

export default function AddCar() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    class: '',
    imgUrl: '',
    cylinders: '',
    transmission: '',
    drive: '',
    fuel_type: '',
    city_mpg: '',
    highway_mpg: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const carsCollection = collection(db, 'CARS');
      await addDoc(carsCollection, formData);
      alert('Car added successfully!');
      setFormData({
        make: '',
        model: '',
        year: '',
        class: '',
        imgUrl: '',
        cylinders: '',
        transmission: '',
        drive: '',
        fuel_type: '',
        city_mpg: '',
        highway_mpg: '',
      });
    } catch (error) {
      console.error('Error adding car:', error);
      alert('Failed to add car. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg" style={{ width: '40rem' }}>
          <h3 className="text-center mb-4">Add a Cab</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="make" className="form-label">
                    Company Name (Make)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="make"
                    placeholder="Enter the company name"
                    value={formData.make}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="model" className="form-label">
                    Model Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="model"
                    placeholder="Enter the model name"
                    value={formData.model}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="year" className="form-label">
                    Year
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="year"
                    placeholder="Enter the year"
                    value={formData.year}
                    onChange={handleChange}
                    min="1886"
                    max={new Date().getFullYear()}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="class" className="form-label">
                    Class
                  </label>
                  <select
                    className="form-select"
                    id="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select class</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="hatchback">Hatchback</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="imgUrl" className="form-label">
                    Image URL
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="imgUrl"
                    placeholder="Enter the image URL"
                    value={formData.imgUrl}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cylinders" className="form-label">
                    Cylinders
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="cylinders"
                    placeholder="Enter the number of cylinders"
                    value={formData.cylinders}
                    onChange={handleChange}
                    min="1"
                    required
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="transmission" className="form-label">
                    Transmission
                  </label>
                  <select
                    className="form-select"
                    id="transmission"
                    value={formData.transmission}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select transmission type</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="drive" className="form-label">
                    Drive
                  </label>
                  <select
                    className="form-select"
                    id="drive"
                    value={formData.drive}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select drive type</option>
                    <option value="fwd">FWD (Front-Wheel Drive)</option>
                    <option value="rwd">RWD (Rear-Wheel Drive)</option>
                    <option value="awd">AWD (All-Wheel Drive)</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Fuel Type</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="fuel_type"
                      id="petrol"
                      value="petrol"
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="petrol">
                      Petrol
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="fuel_type"
                      id="diesel"
                      value="diesel"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="diesel">
                      Diesel
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="fuel_type"
                      id="electric"
                      value="electric"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="electric">
                      Electric
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="city_mpg" className="form-label">
                    Mileage (City) km/l
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="city_mpg"
                    placeholder="Enter city mileage"
                    value={formData.city_mpg}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="highway_mpg" className="form-label">
                    Mileage (Highway) km/l
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="highway_mpg"
                    placeholder="Enter highway mileage"
                    value={formData.highway_mpg}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Add Cab
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
