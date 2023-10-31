import { AiOutlineClose } from "react-icons/ai";
import Button from "../UI/Button";
export default function ModalEditUser() {
  return (
    <div
      id="hs-vertically-centered-modal"
      className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto backdrop-blur"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl   ">
          <div className="flex justify-between items-center py-3 px-4 border-b ">
            <h3 className="font-bold text-gray-800 ">ویرایش کاربر</h3>
            <button
              type="button"
              className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm  "
              data-hs-overlay="#hs-vertically-centered-modal"
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <p className="text-gray-800 ">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
          <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t ">
            <Button
              type="button"
              data-hs-overlay="#hs-vertically-centered-modal"
            >
              بستن
            </Button>
            <Button type="button">ذخیره</Button>
            <Button
              type="button"
              hover="bg-red-500 text-white focus:ring-red-500 hover:bg-red-6"
            >
              حذف
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
