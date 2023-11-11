export default function ({ data }) {
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <div className="group col-span-1 flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl  ">
      <div className="h-52 flex flex-col justify-center items-center bg-rose-500 rounded-t-xl">
        <img
          className="w-full h-full object-cover"
          src={data.products}
          alt={data.title}
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-gray-800 ">{data.title}</h3>
        <p className="mt-3 text-gray-500">
          {String(data.description).substring(0, 75).concat("...")}
        </p>
      </div>
    </div>
  );
}
