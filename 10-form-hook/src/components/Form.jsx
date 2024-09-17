import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
  // register the form hook
  const {
    register,
    handleSubmit,
    watch, // can be used to get value of any registered form-variable
    formState: { errors, isSubmitting }, // tap into various states of the form
  } = useForm();

  async function onSubmit(data) {
    // simulate an API call. During this wait time, if we don't disable the submit behaviour
    // we can submit the same data multiple times

    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form data: ", data);
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        {/* Register the value/state with the form hook for tracking*/}
        {/* Add validations on the fields */}
        {/* Each validation has a value and an error message */}
        {/* Consitional rendering of error messages */}
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
            required: { value: true, message: "First Name is required" },
            minLength: { value: 3, message: "Length must be atleast 3" },
            maxLength: { value: 6, message: "Length must be atmost 6" },
          })}
        />
        {errors.firstName && (
          <p className="err-msg">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label>Middle Name: </label>
        <input {...register("middleName")} />
      </div>

      <div>
        <label>Last Name: </label>
        {/* Add RegEx for validation */}
        <input
          className={errors.lastName ? "input-error" : ""}
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last Name can only contain letters",
            },
          })}
        />
        {errors.lastName && (
          <p className="err-msg">{errors.lastName.message}</p>
        )}
      </div>

      {/* Disable when the form is submitting */}
      <input
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting" : "Submit"}
      />
    </form>
  );
};

export default Form;
