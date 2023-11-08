import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersInfo } from "../store/usersSlice";
import axios from "../assets/axios/Axios";
import LodingPage from "../components/UI/LodingPage";
import Table from "../components/users/Table";
import Tabs from "../components/UI/Tabs";
import { PiUsersBold } from "react-icons/pi";
import { AiOutlineUserAdd } from "react-icons/ai";

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
    <>
      <Tabs
        data={[
          {
            tabs: (
              <>
                <PiUsersBold size={20} /> {"لیست کاربران"}
              </>
            ),
            body: (
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="border rounded-lg overflow-hidden">
                      <Table data={users} />
                    </div>
                  </div>
                </div>
              </div>
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
    </>
  ) : (
    <LodingPage />
  );
}
