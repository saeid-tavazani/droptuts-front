import TD from "../UI/TD";
export default function TableProducts({ data }) {
  const convertPersia = (date) => {
    const d = new Date(date);
    return new Intl.DateTimeFormat("fa-IR").format(d);
  };
  const thead = [
    "id",
    "title",
    "description",
    "author",
    "Price",
    "poster",
    "date",
    "update",
    "discount",
    "status",
    "ACTION",
  ];
  console.log("====================================");
  console.log(data);
  console.log("====================================");
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
          <tr key={item.id} className={item.active == 0 ? "opacity-75" : ""}>
            <TD className="font-bold">{item.id}</TD>
            <TD>{item.title.substring(0, 30).concat(" ...")}</TD>
            <TD>{item.description.substring(0, 35).concat(" ...")}</TD>
            <TD>{item.full_name}</TD>
            <TD>{item.Price}</TD>
            <TD>
              {item.poster != "NULL" ? (
                <img
                  className="w-10 h-10 rounded-full"
                  src={item.poster}
                  alt={item.title}
                />
              ) : (
                item.poster
              )}
            </TD>
            <TD>{convertPersia(item.create_at)}</TD>
            <TD>{item.update_at ? convertPersia(item.update_at) : ""}</TD>
            <TD>{item.discount}</TD>
            <TD
              className={
                (item.status == "update" && "text-yellow-500") ||
                (item.status == "end" && "text-red-500") ||
                (item.status == "performing" && "text-green-500")
              }
            >
              {item.status}
            </TD>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
