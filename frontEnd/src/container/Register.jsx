import { Link } from "react-router-dom";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

export default function Register() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ساخت حساب کاربری
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6 mb-3" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ایمیل
            </label>
            <div className="mt-2">
              <Input name="email" type="email" required />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              شماره تلفن
            </label>
            <div className="mt-2">
              <Input name="phon" type="tel" />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-4">
            <div className="col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                نام
              </label>
              <div className="mt-2">
                <Input name="name" type="text" required />
              </div>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                نام خانوادگی
              </label>
              <div className="mt-2">
                <Input name="name" type="text" required />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                رمز عبور
              </label>
            </div>
            <Input name="password" type="password" required />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                تکرار رمز ورود
              </label>
            </div>
            <Input name="password" type="password" required />
          </div>

          <Button type="submit">ورود</Button>
        </form>

        <Link
          to=""
          className="font-semibold text-sm text-indigo-600 hover:text-indigo-500"
        >
          ثبت نام
        </Link>
      </div>
    </div>
  );
}
