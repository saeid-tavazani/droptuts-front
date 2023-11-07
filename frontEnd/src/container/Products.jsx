import TableProducts from "../components/products/TableProducts";
import axios from "../assets/axios/Axios";
import { useEffect } from "react";
import LodingPage from "../components/UI/LodingPage";
import { useSelector, useDispatch } from "react-redux";
import { products as productsData } from "../store/productsSlice";

export default function Products() {
  const users = useSelector((state) => state.users.value);
  const token = useSelector((state) => state.token.value);
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/products", { headers: { authorization: token } })
      .then((response) => {
        console.log("====================================");
        console.log(response);
        console.log("====================================");
        if (response.data.success) {
          dispatch(productsData(response.data.data));
        }
      });
  }, []);

  return products ? <TableProducts data={products} /> : <LodingPage />;
}
