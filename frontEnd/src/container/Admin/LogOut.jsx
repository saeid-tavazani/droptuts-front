import { useDispatch } from "react-redux";
import { userInfo } from "../../store/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jsonData from "../../assets/jsonData.json";
export default function LogOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    Cookies.remove(jsonData.cookieTokenName);
    dispatch(userInfo(null));
    navigate("/signin");
  }, []);
}
