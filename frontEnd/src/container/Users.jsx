import Aside from "../components/App/Aside";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import jsonData from "../assets/jsonData.json";
import { usersInfo } from "../store/usersSlice";
import axios from "../assets/axios/Axios";
import LodingPage from "../components/UI/LodingPage";
import Table from "../components/UI/Table";

export default function Users() {
  const cookie = Cookies.get(jsonData.cookieTokenName);
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  //   dispatch(usersInfo(response.data.data));
  useEffect(() => {
    axios
      .get("/users", { headers: { authorization: cookie } })
      .then((response) => {
        if (response.data.success) {
          dispatch(usersInfo(response.data.data));
        }
      })
      .catch((err) => {
        console.log("=================err===================");
        console.log(err);
        console.log("====================================");
      });
  }, []);

  return users ? (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden">
            <Table data={users} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <LodingPage />
  );
}
