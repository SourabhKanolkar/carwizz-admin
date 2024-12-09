import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { db } from "../../firebase-config";
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function Home() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsCollection = collection(db, 'bookings');
        const bookingsSnapshot = await getDocs(bookingsCollection);
        const bookingsList = bookingsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBookings(bookingsList);
      } catch (error) {
        console.error("Error fetching bookings: ", error);
      }
    };

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Reference the specific document
      const bookingDoc = doc(db, 'bookings', id);

      // Delete the document
      await deleteDoc(bookingDoc);

      // Update the state to remove the deleted booking
      setBookings(bookings.filter(booking => booking.id !== id));

      console.log(`Booking with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting booking: ", error);
    }
  };

  return (
    <>
      <Navbar />
      <section id='home-page'>
        <div className="container mt-3">
          <h3 className='text-center'>BOOKINGS ARE LISTED BELOW</h3>
          <div className="row">
            {bookings.map((booking) => (
              <div className="col-md-3 mb-3" key={booking.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{booking.Model || "No Title"}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{booking.Client_name || "Unknown User"}</h6>
                    <p className="card-text">CONTACT NO: {booking.Cnumber || "N/A"}</p>
                    <p className="card-text">DATE: {booking.Date || "N/A"}</p>
                    <button className='btn btn-primary'>
                      <a
                        style={{ textDecoration: "none", color: "#fff" }}
                        href={`tel:${booking.Cnumber}`}
                      >
                        CALL NOW
                      </a>
                    </button>
                    <button
                      className='btn btn-danger'
                      onClick={() => handleDelete(booking.id)}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
