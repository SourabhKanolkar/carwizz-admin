import React, { useState } from 'react';
import { auth } from '../../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password, age } = formData;

    if (!name || !email || !password || !age) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered successfully:', userCredential.user);

      // Optionally save additional user data to Firestore or your backend
      alert('Registration successful!');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg" style={{ width: '30rem' }}>
          <h3 className="text-center mb-4">Register</h3>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
          <div className="text-center mt-3">
            <small>
              Already have an account? <Link to="/">Sign-Up</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
