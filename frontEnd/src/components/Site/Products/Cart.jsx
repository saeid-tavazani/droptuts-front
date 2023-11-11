export default function (data) {
  return (
    <div className="group col-span-1 flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl  ">
      <div className="h-52 flex flex-col justify-center items-center bg-rose-500 rounded-t-xl">
        <img src={data.products} />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-gray-800 ">{data.titles}</h3>
        <p className="mt-3 text-gray-500">{data.descriptions}</p>
      </div>
    </div>
  );
}
