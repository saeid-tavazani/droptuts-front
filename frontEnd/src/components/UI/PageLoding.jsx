import ScaleLoader from "react-spinners/ScaleLoader";

export default function PageLoding({ color = "#4850e0" }) {
  return <ScaleLoader color={color} height={60} width={6} />;
}
