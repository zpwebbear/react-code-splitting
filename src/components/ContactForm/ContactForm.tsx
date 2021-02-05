import { BaseSyntheticEvent } from "react";
import { resolver } from "./schema";
import { useReactHookForm } from 'modules/form';

export const ContactForm = () => {
  const { register, handleSubmit } = useReactHookForm(resolver);
  
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
