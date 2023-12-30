import styles from "../../assets/styles/style.js";
import CardProduct from "./CardProduct.jsx";
import { useEffect } from "react";
import axius from "../../assets/axios/index.jsx";
import { setProducts } from "../../store/products.jsx";
import { useSelector, useDispatch } from "react-redux";
import Toastify from "../UI/Toastify.jsx";
import { error } from "../../assets/handlerToastify.js";

export default function Index({ length }) {
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axius.get("/product").then((response) => {
      if (response.data.success) {
        dispatch(setProducts(response.data.data));
      } else {
        error("خطا در ارتباط با سرور");
      }
    });
  }, []);
  return (
    <>
      <Toastify />
      <div className={`${styles.container} grid grid-cols-12 gap-3`}>
        {products
          ? products.map((product) => (
              <CardProduct key={product.id} data={product} />
            ))
          : ""}
      </div>
    </>
  );
}
