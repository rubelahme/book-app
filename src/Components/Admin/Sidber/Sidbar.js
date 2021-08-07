import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import imgOne from "../../../img/cloud-upload-outline 1.png";

const Sidebar = () => {
  const [name, setName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setName(data.exampleReq[0].name);
    const formData = new FormData();
    formData.append("exampleReq", data.exampleReq[0]);
    formData.append("example", data.example);
    formData.append("exampleRequired", data.exampleRequired);
    formData.append("exampleRequiredEnd", data.exampleRequiredEnd);

    fetch("http://localhost:4000/add", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("rubel");
      })
      .catch((error) => {
        console.error("ahmed");
      });
  };

  return (
    <div className="sidebar">
      <div>
        <h1 className="m-3">Add Book</h1>
      </div>
      <div className="Sidebar-1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="example">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-6">
                      <div class="form-floating mb-2">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="name@example.com"
                          id="floatingInput"
                          name="Name"
                          {...register("example", { required: true })}
                        />
                        <label for="floatingInput">Book Name</label>
                        {errors.example && <span>This field is required</span>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div class="form-floating mb-2 ">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="name@example.com"
                          id="floatingInputs"
                          name="Author"
                          {...register("exampleRequired", { required: true })}
                        />
                        <label for="floatingInputs">Author Name</label>
                        {errors.exampleRequired && (
                          <span>This field is required</span>
                        )}
                      </div>
                    </div>
                    <div className="col-6">
                      <div class="form-floating mb-2 ">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="name@example.com"
                          name="Price"
                          id="floatingInputEnd"
                          {...register("exampleRequiredEnd", {
                            required: true,
                          })}
                        />
                        <label for="floatingInputEnd">Enter Price</label>
                        {errors.exampleRequiredEnd && (
                          <span>This field is required</span>
                        )}
                      </div>
                    </div>
                    <div className="col-6">
                      <input
                        type="File"
                        class="form-control d-none"
                        placeholder="name@example.com"
                        name="file"
                        id="floating"
                        {...register("exampleReq", {
                          required: true,
                        })}
                      />
                      <label for="floating">
                        <div className="field">
                          <img src={imgOne} alt="" />
                          {name === "" ? (
                            <span>Upload File</span>
                          ) : (
                            <span>{name}</span>
                          )}
                        </div>
                      </label>
                      {errors.exampleReq && <span>This field is required</span>}
                    </div>
                    <div className="col-12">
                      <div className="d-flex justify-content-end">
                        <input className="required" type="submit" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
