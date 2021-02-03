import { BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { resolver } from "./schema";

export const ContactForm = () => {
  const { register, handleSubmit } = useForm({
      resolver: resolver,
  });
  
  const onSubmit = (data: BaseSyntheticEvent) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <select name="gender" ref={register}>
        <option>Please select gender</option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
};
