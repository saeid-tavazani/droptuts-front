import { useSelector } from "react-redux";

export default function ListComment() {
  return (
    <div className="w-full flex flex-col class-name">
      <div className="">
        <img
          className="w-10 h-10 rounded-full"
          src={
            "//www.gravatar.com/avatar/b4e3b194b90b5e7cedbea4331d650da0?d=mm"
          }
        />
      </div>
    </div>
  );
}
