import { Link } from "react-router-dom";
import parse from "html-react-parser";
export default function CardProduct({ data }) {
  const textHandler = (text, length) => {
    // if (String(text).length >= length) {

    return String(text).substring(0, length).concat("...");
    // }
    // return text;
  };

  return (
    <div className="shadow-sm hover:shadow-md transition-all duration-300 rounded-md col-span-3 flex flex-col overflow-hidden">
      <div className="w-full h-40">
        <img className="w-full h-full" src={data.poster} alt={data.title} />
      </div>
      <div className="p-4">
        <Link to={`product/${data.id}`}>
          <h3 className="font-bold mb-2">{data.title}</h3>
        </Link>
        {/* {parse(data.description)} */}
        <p>{parse(data.description)}</p>
      </div>
    </div>
  );
}
