import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Home/NavBar/NavBar";

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState("");
  useEffect(() => {
    fetch(`http://localhost:4000/add/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <section>
      <NavBar></NavBar>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <div className="pb-3 shadow-lg p-3 mb-5 bg-body rounded">
                <img
                  className=" w-75 h-75 pt-4 pe-5 ps-5 pb-4 bg-secondary"
                  src={`data:image/jpeg;base64,${item.image.img}`}
                  alt=""
                />
                <h3>{item.name}</h3>
                <h4>{item.author}</h4>
                <div className="d-flex justify-content-between">
                  <div>
                    <h2>{item.price}/=</h2>
                  </div>
                  <div>
                    <button className="btn btn-success">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
