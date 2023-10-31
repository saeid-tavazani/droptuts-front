import TD from "./TD";
// import moment from "moment-jalaali";
import Button from "./ButtonText";
import { BiSolidEdit } from "react-icons/bi";
export default function Table({ data }) {
  const thead = ["id", "name", "email", "role", "picture", "date", "ACTION"];
  const convertPersia = (date) => {
    const d = new Date(date);
    return new Intl.DateTimeFormat("fa-IR").format(d);
  };

  return (
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
            <TD>
              <Button
                type="button"
                data-hs-overlay="#hs-vertically-centered-modal"
              >
                {<BiSolidEdit size={25} />}
              </Button>
            </TD>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
