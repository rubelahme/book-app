import React from "react";
import { useForm } from "react-hook-form";

const MainSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className=" pt-5 mt-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                  <input
                    className="form-control search p-2"
                    placeholder="search book..."
                    {...register("exampleRequired", { required: true })}
                  />
                  <input
                    className="btn btn-success"
                    type="submit"
                    value="Search"
                  />
                </div>
                <div>
                  {errors.exampleRequired && (
                    <span>Search field is required</span>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
