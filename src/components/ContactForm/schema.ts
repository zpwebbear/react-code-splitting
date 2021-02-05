import { createResolver } from "modules/resolver";
import { stringRequired, yupShape } from "modules/yupSchemaDefinitions";

const schema = yupShape({
  firstName: stringRequired,
  gender: stringRequired,
})

export const resolver = createResolver(schema);