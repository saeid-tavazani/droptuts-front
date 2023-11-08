import TableProducts from "../components/products/TableProducts";
import axios from "../assets/axios/Axios";
import { useEffect } from "react";
import LodingPage from "../components/UI/LodingPage";
import { useSelector, useDispatch } from "react-redux";
import { products as productsData } from "../store/productsSlice";
import Table from "../components/UI/Table";

export default function Products() {
  const thead = [
    "id",
    "title",
    "description",
    "author",
    "Price",
    "poster",
    "date",
    "update",
    "discount",
    "status",
  ];
  const keysValues = [
    { value: "id", type: "text" },
    { value: "title", type: "text" },
    { value: "description", type: "text" },
    { value: "author", type: "text" },
    { value: "price", type: "price" },
    { value: "poster", type: "img" },
    { value: "create_at", type: "date" },
    { value: "update_at", type: "date" },
    { value: "discount", type: "text" },
    { value: "status", type: "text" },
  ];
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

  return products ? (
    <Table titels={thead} keys={keysValues} data={products} />
  ) : (
    <LodingPage />
  );
  // return products ? <TableProducts data={products} /> : <LodingPage />;
}
