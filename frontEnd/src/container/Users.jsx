import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersInfo } from "../store/usersSlice";
import axios from "../assets/axios/Axios";
import LodingPage from "../components/UI/LodingPage";
import Tabs from "../components/UI/Tabs";
import { PiUsersBold } from "react-icons/pi";
import { AiOutlineUserAdd } from "react-icons/ai";
import Table from "../components/UI/Table";
import { AiOutlineDelete, AiFillLock, AiFillUnlock } from "react-icons/ai";

export default function Users() {
  const users = useSelector((state) => state.users.value);
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

  const thead = ["id", "name", "email", "role", "picture", "date", "phone"];
  const keysValues = [
    { value: "id", type: "text" },
    { value: "full_name", type: "text" },
    { value: "email", type: "text" },
    { value: "role", type: "text" },
    { value: "picture", type: "img" },
    { value: "create_at", type: "date" },
    { value: "phone", type: "text" },
  ];

  const deleteUser = (id) => {
    axios
      .put(`/users/delete`, { id }, { headers: { authorization: token } })
      .then((response) => {
        if (response.data.success) {
          dispatch(usersInfo(response.data.data));
        } else {
          toast.error("مشکلی پیش امده", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };
  const changeStatus = (id, status) => {
    axios
      .put(`/users`, { id, status }, { headers: { authorization: token } })
      .then((response) => {
        console.log("====================================");
        console.log(response);
        console.log("====================================");
        if (response.data.success) {
          dispatch(usersInfo(response.data.data));
        } else {
          toast.error("مشکلی پیش امده", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };
  const hanlderUser = (value) =>
    value.role != "admin" && (
      <div className="flex items-center gap-2">
        <AiOutlineDelete
          cursor="pointer"
          onClick={() => deleteUser(value.id)}
          size={25}
        />
        {value.status ? (
          <AiFillUnlock
            cursor="pointer"
            onClick={() => changeStatus(value.id, value.status)}
            size={25}
          />
        ) : (
          <AiFillLock
            cursor="pointer"
            onClick={() => changeStatus(value.id, value.status)}
            size={25}
          />
        )}
      </div>
    );
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
          body: (
            <Table
              data={users}
              titels={thead}
              keys={keysValues}
              actions={hanlderUser}
            />
          ),
        },
        {
          tabs: (
            <>
              <AiOutlineUserAdd size={20} /> {"اضافه کرن کاربر"}
            </>
          ),
          body: (
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">sfsdf</div>
            </div>
          ),
        },
      ]}
    />
  ) : (
    <LodingPage />
  );
}
