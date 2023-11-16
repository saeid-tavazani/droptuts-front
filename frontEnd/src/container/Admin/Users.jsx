import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersInfo } from "../../store/Admin/usersSlice";
import axios from "../../assets/axios/Axios";
import LodingPage from "../../components/UI/LodingPage";
import Tabs from "../../components/UI/Tabs";
import { PiUsersBold } from "react-icons/pi";
import { AiOutlineUserAdd } from "react-icons/ai";
import UsersAdd from "../../components/Admin/Users/UsersAdd";
import UsersList from "../../components/Admin/Users/UsersList";

export default function Users() {
  const users = useSelector((state) => state.users.value);
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/users", { headers: { authorization: token } })
      .then((response) => {
        if (response.data.success) {
          dispatch(usersInfo(response.data.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return users ? (
    <Tabs
      data={[
        {
          tabs: (
            <>
              <PiUsersBold size={20} /> {"لیست کاربران"}
            </>
          ),
          body: <UsersList token={token} data={users} />,
        },
        {
          tabs: (
            <>
              <AiOutlineUserAdd size={20} /> {"اضافه کرن کاربر"}
            </>
          ),
          body: <UsersAdd token={token} />,
        },
      ]}
    />
  ) : (
    <LodingPage />
  );
}
