import TD from "./TD";
export default function Table({ data, titels, keys, actions = null }) {
  const convertPersia = (date) => {
    const d = new Date(date);
    return new Intl.DateTimeFormat("fa-IR").format(d);
  };

  const createView = (type, value) => {
    switch (type) {
      case "text":
        return String(value).length > 30
          ? String(value).substring(0, 30).concat("...")
          : String(value);
      case "img":
        return <img className="w-10 h-10 rounded-full" src={value} alt="img" />;
      case "price":
        return value == 0 ? "رایگان" : Number(value).toLocaleString();
      case "date":
        return value ? convertPersia(value) : "";
      default:
        return value;
    }
  };

  return (
    <table className="min-w-full divide-y divide-gray-200 ">
      <thead className="bg-white ">
        <tr>
          {titels.map((item, index) => (
            <th
              scope="col"
              key={index}
              className="p-3 text-gray-500 uppercase font-bold text-start whitespace-nowrap"
            >
              {item}
            </th>
          ))}
          {actions ? (
            <th
              scope="col"
              className="p-3 text-gray-500 uppercase font-bold text-start whitespace-nowrap"
            >
              actions
            </th>
          ) : (
            ""
          )}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 ">
        {data.map((item) => (
          <tr key={item.id}>
            {keys.map((keysValues, index) => (
              <TD key={index}>
                {createView(keysValues.type, item[keysValues.value])}
              </TD>
            ))}
            {actions ? <TD>{actions(item)}</TD> : ""}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
