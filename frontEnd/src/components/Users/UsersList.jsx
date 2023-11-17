import Table from "../UI/Table";
import { AiOutlineDelete, AiFillLock, AiFillUnlock } from "react-icons/ai";
import axios from "../../assets/axios/Axios";
import { useDispatch } from "react-redux";
import { usersInfo } from "../../store/usersSlice";
import { ToastContainer, toast } from "react-toastify";

export default function UsersList({ data, token }) {
  const thead = ["id", "name", "email", "role", "date", "phone"];
  const keysValues = [
    { value: "id", type: "text" },
    { value: "name", type: "text" },
    { value: "email", type: "text" },
    { value: "role", type: "text" },
    { value: "create_at", type: "date" },
    { value: "phone", type: "text" },
  ];
  const dispatch = useDispatch();
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
  const hanlderUser = (value) => {
    const html = value.role != "admin" && (
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
    return html;
  };
  console.log(data);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Table
        data={data}
        titels={thead}
        keys={keysValues}
        actions={hanlderUser}
      />
    </>
  );
}
