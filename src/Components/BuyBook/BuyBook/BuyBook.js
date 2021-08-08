import React from "react";
import NavBar from "../../Home/NavBar/NavBar";
import { useForm } from "react-hook-form";
import MapGoogle from "../MapGoogle/MapGoogle";
const BuyBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <div className="container pt-5 mt-5">
          <div className="row">
            <div className="col-md-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-12">
                    <label for="fdjgdhdsf">Your District</label>
                    <input
                      id="fdjgdhdsf"
                      className="form-control"
                      {...register("example", { required: true })}
                    />
                    {errors.example && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="col-12">
                    <label for="fd">Your Upazila</label>
                    <input
                      id="fb"
                      className="form-control"
                      {...register("exampleRequired", { required: true })}
                    />
                    {errors.exampleRequired && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="col-12">
                    <input className="form-control mt-3" type="submit" />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-9">
              <MapGoogle></MapGoogle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyBook;
