
import { yupResolver } from '@hookform/resolvers/yup';

export const createResolver = (schema:any) => yupResolver(schema);