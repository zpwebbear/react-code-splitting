import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  gender: yup.string().required(),
});

export const resolver = yupResolver(schema);