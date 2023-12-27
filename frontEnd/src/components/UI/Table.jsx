export default function Table({ titles, data, keys }) {
  const convertPersia = (date) => {
    const d = new Date(date);
    return new Intl.DateTimeFormat("fa-IR").format(d);
  };
  const style = "p-1.5 text-gray-500 text-start whitespace-nowrap";
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
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-body h-14">
        <tr>
          {titles.map((item, index) => (
            <th key={index} className={style}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id} className={(index + 1) % 2 == 0 ? "bg-body" : ""}>
            <td className={style}>{index + 1}</td>
            {keys.map((keysValues, index2) => (
              <td key={index + "" + item.id + index2} className={style}>
                {createView(keysValues.type, item[keysValues.value])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
