import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userInfo } from "./store/userSlice";
import { useEffect, useRef } from "react";
import Aside from "./components/App/Aside";
import Header from "./components/App/Header";
import { Editor } from "@tinymce/tinymce-react";
export default function App() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user == null) {
      navigate("/signin");
    }
  }, []);

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    user && (
      <>
        <Aside />

        <section className="lg:w-[calc(100%-256px)] flex flex-col w-full ">
          <Header />
          <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden  ">
            <div className="flex items-center py-4">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600"
                data-hs-overlay="#application-sidebar"
                aria-controls="application-sidebar"
                aria-label="Toggle navigation"
              >
                <span className="sr-only">Toggle Navigation</span>
                <svg
                  className="w-5 h-5"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>

              <ol
                className="ml-3 flex items-center whitespace-nowrap min-w-0"
                aria-label="Breadcrumb"
              >
                <li className="flex items-center text-sm text-gray-800 ">
                  Application Layout
                  <svg
                    className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 "
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </li>
                <li
                  className="text-sm font-semibold text-gray-800 truncate "
                  aria-current="page"
                >
                  Dashboard
                </li>
              </ol>
            </div>
          </div>
          {/* <Editor
            apiKey="your-api-key"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          /> */}
          {/* <button onClick={log}>Log editor content</button> */}
          <Outlet />
        </section>
      </>
    )
  );
}
