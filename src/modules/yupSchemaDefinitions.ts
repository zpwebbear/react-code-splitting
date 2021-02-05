import * as yup from "yup";

const yupShape = (shapeDefinition: any) => yup.object().shape(shapeDefinition);
const stringRequired = yup.string().required();

export { yupShape, stringRequired };
