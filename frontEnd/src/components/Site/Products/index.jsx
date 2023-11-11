import styles from "../../../assets/style/style";
import axios from "../../../assets/axios/Axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { products as productsData } from "../../../store/productsSlice";
import Cart from "./Cart";
export default function index() {
  const products = useSelector((state) => state.products.value);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/products").then((response) => {
      if (response.data.success) {
        dispatch(productsData(response.data.data));
      }
    });
  }, []);

  return products ? (
    <section className="w-full mt-24">
      <article className={`${styles.container} grid grid-cols-4 gap-3 `}>
        {products.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </article>
    </section>
  ) : (
    ""
  );
}
