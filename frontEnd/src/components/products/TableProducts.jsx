import TD from "../UI/TD";
export default function TableProducts({ data }) {
  const convertPersia = (date) => {
    const d = new Date(date);
    return new Intl.DateTimeFormat("fa-IR").format(d);
  };
  const thead = [
    "id",
    "name",
    "email",
    "role",
    "picture",
    "date",
    "phone",
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
            <TD>{item.title}</TD>
            <TD>{item.description}</TD>
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
            <TD>{item.phone}</TD>
            <TD className="flex items-center gap-1">
              {/* {item.role != "admin" && (
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
              )} */}
            </TD>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
