import axios from "../assets/axios/Axios";
import { useEffect } from "react";
import LodingPage from "../components/UI/LodingPage";
import { useSelector, useDispatch } from "react-redux";
import { products as productsData } from "../store/productsSlice";
import Tabs from "../components/UI/Tabs";
import ProductsList from "../components/Products/ProductsList";
import ProductsAdd from "../components/Products/ProductsAdd";
import { PiUsersBold } from "react-icons/pi";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function Products() {
  const token = useSelector((state) => state.token.value);
  const products = useSelector((state) => state.products.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/products/all", { headers: { authorization: token } })
      .then((response) => {
        if (response.data.success) {
          dispatch(productsData(response.data.data));
        }
      });
  }, []);

  return (
    <Tabs
      data={[
        {
          tabs: (
            <>
              <PiUsersBold size={20} /> {"لیست محصولات"}
            </>
          ),
          body: products ? (
            <ProductsList products={products} token={token} />
          ) : (
            <LodingPage />
          ),
        },
        {
          tabs: (
            <>
              <AiOutlineUserAdd size={20} /> {"اضافه کرن محصول"}
            </>
          ),
          body: <ProductsAdd id={user.id} token={token} />,
        },
      ]}
    />
  );

  // return products ? <ProductsList products={products} /> : <LodingPage />;
}
