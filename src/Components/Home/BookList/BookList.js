import React from "react";
import { useHistory } from "react-router-dom";

const BookList = (props) => {
  const { name, author, price, image, _id } = props.data;
  let history = useHistory();
  function handleClick(e) {
    history.push(`/details/${e}`);
  }

  return (
    <div className="col-md-4 BookList">
      <div className="pb-3 shadow-lg p-3 mb-5 bg-body rounded">
        <img
          className="img-thumbnail pt-4 pe-5 ps-5 pb-4 bg-secondary"
          src={`data:image/jpeg;base64,${image.img}`}
          alt=""
        />
        <h3>{name}</h3>
        <h4>{author}</h4>
        <div className="d-flex justify-content-between">
          <div>
            <h2>{price}/=</h2>
          </div>
          <div>
            <button
              className="btn btn-success"
              onClick={() => handleClick(_id)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
