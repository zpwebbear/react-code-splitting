import { useForm, UseFormOptions } from "react-hook-form";
type HookFormResolver = UseFormOptions["resolver"];
export const useReactHookForm = (resolver: HookFormResolver) => {
  const { register, handleSubmit } = useForm({
    resolver,
  });

  return { register, handleSubmit };
};
