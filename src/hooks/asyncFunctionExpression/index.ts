import { resolveAfterSeconds } from "../resolveAfterSeconds";

export const asyncFunctionExpressionAssignedToVariable = () => {
  async () => {
    const arg1 = await resolveAfterSeconds(100);
    const arg2 = await resolveAfterSeconds(200);
    return arg1 + arg2;
  };
};
