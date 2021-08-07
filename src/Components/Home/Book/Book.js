import React, { useState } from "react";
import { useEffect } from "react";
import BookList from "../BookList/BookList";

const Book = () => {
  const [Booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/add")
      .then((res) => res.json())
      .then((Data) => setBooking(Data));
  }, [Booking]);

  return (
    <main>
      <section>
        <div className="container pt-5">
          <div className="row">
            {Booking.length === 0 && (
              <div className="col-12 text-center mb-5">
                <div class="spinner-border text-danger" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {Booking.map((Book) => (
              <BookList key={Book.id} data={Book}></BookList>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Book;
