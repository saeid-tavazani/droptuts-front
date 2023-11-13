import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import Input from "../../UI/Input";
import { GrAddCircle } from "react-icons/gr";
import { LuDelete } from "react-icons/lu";
import Button from "../../UI/Button";
export default function AddHeader() {
  const [educations, setEducations] = useState([
    {
      headlines: "فصل 1",
      data: [
        { type: "file", tite: "java", time: "12:57", link: "https://132456" },
        {
          type: "video",
          tite: "javascript",
          time: "18:57",
          link: "https://132456",
        },
        { type: "file", tite: "html", time: "15:57", link: "https://132456" },
      ],
    },
  ]);
  const [update, setUpdate] = useState(0);

  const changeVlueEducationData = (e, index, index2, type) => {
    const newData = educations;
    newData[index].data[index2][type] = e.target.value;
    setEducations(newData);
  };

  const changeVlueEducationTitel = (e, index) => {
    const newData = educations;
    newData[index].headlines = e.target.value;
    setEducations(newData);
  };

  // useEffect(()=>{
  const adddata = (index) => {
    let newData = educations;
    newData[index].data.push({
      type: "video",
      tite: "مثال : html",
      time: "10:00",
      link: "https://",
    });
    setEducations(newData);
    setUpdate(update + 1);
  };
  // },[newData])

  const addHeaderEducation = (e) => {
    e.preventDefault();
    let newData = educations;
    newData.push({
      headlines: "فصل جدید",
      data: [
        {
          type: "video",
          tite: "مثال : html",
          time: "10:00",
          link: "https://",
        },
      ],
    });
    setEducations(newData);
    setUpdate(update + 1);
  };

  const removData = (index) => {
    let newData = educations;
    newData[index].data.pop();
    if (newData[index].data.length == 0) {
      delete newData[index];
    }
    setEducations(newData);
    setUpdate(update + 1);
  };

  return (
    <>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none  "
        data-hs-overlay="#hs-scroll-inside-body-modal"
      >
        افزودن دوره
      </button>

      <div
        id="hs-scroll-inside-body-modal"
        className="hs-overlay  left-0 right-0 bottom-0 backdrop-blur  hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none"
      >
        <div className=" w-full sm:max-w-lg sm:w-full sm:mx-auto h-[calc(100%-4rem)] hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full lg:mx-aut flex items-center">
          <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto  w-full">
            <div className="flex justify-between items-center py-3 px-4 border-b ">
              <h3 className="font-bold text-gray-800 ">Modal title</h3>
              <button
                type="button"
                className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                data-hs-overlay="#hs-scroll-inside-body-modal"
              >
                <span className="sr-only">Close</span>
                <AiOutlineClose size={20} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex flex-col gap-2">
              {educations.map((education, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="relative flex items-center">
                    <Input
                      type="text"
                      onChange={() => changeVlueEducationTitel(event, index)}
                      defaultValue={education.headlines}
                    />
                    <div className="flex gap-1 absolute left-2">
                      <GrAddCircle
                        onClick={() => adddata(index)}
                        className="cursor-pointer text-green-500"
                        size={25}
                      />
                      <LuDelete
                        onClick={() => removData(index)}
                        className="cursor-pointer text-red-500"
                        size={25}
                      />
                    </div>
                  </div>
                  {education.data.map((values, id) => (
                    <div key={"00".concat(id)} className="w-full flex gap-2">
                      <Input
                        onChange={() =>
                          changeVlueEducationData(event, index, id, "time")
                        }
                        className="w-20 text-center"
                        defaultValue={values.time}
                      />
                      <Input
                        onChange={() =>
                          changeVlueEducationData(event, index, id, "link")
                        }
                        defaultValue={values.link}
                      />
                      <Input
                        onChange={() =>
                          changeVlueEducationData(event, index, id, "tite")
                        }
                        defaultValue={values.tite}
                      />
                      <select
                        onChange={() =>
                          changeVlueEducationData(event, index, id, "type")
                        }
                        defaultValue={values.type}
                        className="p-3  pe-9 block  border-gray-950 w-32 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-50 "
                      >
                        <option value="file">file</option>
                        <option value="video">video</option>
                      </select>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t ">
              <Button onClick={addHeaderEducation}>افزودن فصل جدید</Button>
              <Button>ذخیره</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
