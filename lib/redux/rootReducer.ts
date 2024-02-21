import { productSlice } from "./slices/productSlice/productSlice";
import { userSlice } from "./slices/userSlice/userSlice";

export const reducer = {
  product: productSlice.reducer,
  user: userSlice.reducer
};
