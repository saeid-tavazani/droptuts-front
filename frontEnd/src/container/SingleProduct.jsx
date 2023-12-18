import styles from "../assets/styles/style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../assets/axios";
import { setProducts } from "../store/products";
import { useSelector, useDispatch } from "react-redux";
import Toastify from "../components/UI/Toastify";
import { error } from "../assets/handlerToastify.js";

export default function SingleProduct() {
  const products = useSelector((state) => state.products.value);
  let { id } = useParams();
  const [activeProduct, setProduct] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (products) {
      setProduct(products.find.find((element) => element.id == id));
    } else {
      axios.get(`/product/${id}`).then((response) => {
        console.log("====================================");
        console.log(response);
        console.log("====================================");
        if (response.data.success) {
          dispatch(setProducts(response.data.data));
          console.log("====================================");
          console.log(response);
          console.log("====================================");
        } else {
          error("خطا در ارتباط با سرور");
        }
      });
    }
  }, []);
  return activeProduct ? (
    <div className={`${styles.container}`}>
      <Toastify />
      <img src={data.poster} alt="" />
    </div>
  ) : (
    ""
  );
}
