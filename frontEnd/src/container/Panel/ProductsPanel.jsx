import Button from "../../components/UI/Button";
import axios from "../../assets/axios/";
export default function ProductsPanel() {
  return (
    <div className="w-full rounded-xl p-5 bg-white shadow-sm border flex flex-col gap-7">
      <div className="flex items-center justify-between gap-2">
        <h1 className="whitespace-nowrap">محصولات شما</h1>
        <Button className="w-fit">افزودن محصول جدید</Button>
      </div>
    </div>
  );
}
