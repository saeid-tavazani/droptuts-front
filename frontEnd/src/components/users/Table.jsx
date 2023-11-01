import TD from "../UI/TD";
import { AiOutlineDelete, AiFillLock, AiFillUnlock } from "react-icons/ai";
import axios from "../../assets/axios/Axios";
import { useSelector, useDispatch } from "react-redux";
import { usersInfo } from "../../store/usersSlice";
import { ToastContainer, toast } from "react-toastify";

export default function Table({ data }) {
  const thead = ["id", "name", "email", "role", "picture", "date", "ACTION"];
  const convertPersia = (date) => {
    const d = new Date(date);
    return new Intl.DateTimeFormat("fa-IR").format(d);
  };
  const token = useSelector((state) => state.token.value);

  const dispatch = useDispatch();

  const deleteUser = (id) => {
    axios
      .delete(`/users/${id}`, { headers: { authorization: token } })
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
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-white ">
          <tr>
            {thead.map((item, index) => (
              <th
                scope="col"
                key={index}
                className="p-3 text-gray-500 uppercase font-bold text-start whitespace-nowrap"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 ">
          {data.map((item) => (
            <tr key={item.id} className={item.status == 0 ? "opacity-75" : ""}>
              <TD className="font-bold">{item.id}</TD>
              <TD>{item.full_name}</TD>
              <TD>{item.email}</TD>
              <TD>{item.role}</TD>
              <TD>
                {item.picture != "NULL" ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={item.picture}
                    alt={item.full_name}
                  />
                ) : (
                  item.picture
                )}
              </TD>
              <TD>{convertPersia(item.create_at)}</TD>
              <TD className="flex items-center gap-1">
                {item.role != "admin" && (
                  <>
                    <AiOutlineDelete
                      cursor="pointer"
                      onClick={() => deleteUser(item.id)}
                      size={25}
                    />
                    {item.status ? (
                      <AiFillUnlock
                        cursor="pointer"
                        onClick={() => changeStatus(item.id, item.status)}
                        size={25}
                      />
                    ) : (
                      <AiFillLock
                        cursor="pointer"
                        onClick={() => changeStatus(item.id, item.status)}
                        size={25}
                      />
                    )}
                  </>
                )}
              </TD>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
