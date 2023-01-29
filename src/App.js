import React from "react";
import { useForm } from "react-hook-form";

import "./styles.css";

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const example = watch("example");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Example</label>
      <input
        name="example"
        defaultValue="test"
        ref={register}
        data-testid="example"
      />
      <label>ExampleRequired</label>
      <input
        name="exampleRequired"
        ref={register({ required: true, maxLength: 10 })}
        data-testid="exampleRequired"
      />
      {errors.exampleRequired && <p>This field is required</p>}

      {example === "test" && <i data-testid="message">Hidden message</i>}
      <input type="submit" data-testid="submit" />
    </form>
  );
}
