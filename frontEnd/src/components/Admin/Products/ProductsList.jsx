import { useEffect } from "react";
import Table from "../../UI/Table";
export default function ProductsList({ products }) {
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
  ];
  const keysValues = [
    { value: "id", type: "text" },
    { value: "title", type: "text" },
    { value: "description", type: "text" },
    { value: "author", type: "text" },
    { value: "price", type: "price" },
    { value: "poster", type: "img" },
    { value: "create_at", type: "date" },
    { value: "update_at", type: "date" },
    { value: "discount", type: "text" },
    { value: "status", type: "text" },
  ];
  return <Table titels={thead} keys={keysValues} data={products} />;
}
