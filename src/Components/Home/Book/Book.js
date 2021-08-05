import React from "react";
import imgOne from "../../../img/image 19.png";
import imgTwo from "../../../img/image 20.png";
import imgThree from "../../../img/image 21.png";
import imgFour from "../../../img/image 22.png";
import imgFive from "../../../img/image 23.png";
import imgSix from "../../../img/image 25.png";
import BookList from "../BookList/BookList";

export const Booking = [
  {
    name: "Javascript",
    Author: "Adom D",
    Amount: 350,
    id: 1,
    img: imgOne,
  },
  {
    name: "React",
    Author: "Thour T",
    Amount: 450,
    id: 2,
    img: imgTwo,
  },
  {
    name: "Rood to react",
    Author: "Emasin A",
    Amount: 250,
    id: 3,
    img: imgThree,
  },
  {
    name: "C programming",
    Author: "Manusit W",
    Amount: 450,
    id: 4,
    img: imgFour,
  },
  {
    name: "TypeScript",
    Author: "Pislon J",
    Amount: 250,
    id: 5,
    img: imgFive,
  },
  {
    name: "Javascript EveryWhere",
    Author: "Losit W",
    Amount: 550,
    id: 6,
    img: imgSix,
  },
];

const Book = () => {
  return (
    <main>
      <section>
        <div className="container pt-5">
          <div className="row">
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
