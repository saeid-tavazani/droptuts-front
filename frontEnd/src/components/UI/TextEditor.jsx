import { Editor } from "@tinymce/tinymce-react";
import tinymce from "tinymce/tinymce";
import "tinymce/models/dom/model";
import "tinymce/themes/silver";
import "tinymce/icons/default";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/plugins/advlist";
import "tinymce/plugins/anchor";
import "tinymce/plugins/autolink";
import "tinymce/plugins/autoresize";
import "tinymce/plugins/autosave";
import "tinymce/plugins/charmap";
import "tinymce/plugins/code";
import "tinymce/plugins/codesample";
import "tinymce/plugins/directionality";
import "tinymce/plugins/emoticons";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/help";
import "tinymce/plugins/help/js/i18n/keynav/fa.js";
import "tinymce/plugins/help/js/i18n/keynav/en.js";
import "tinymce/plugins/image";
import "tinymce/plugins/importcss";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/media";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/preview";
import "tinymce/plugins/quickbars";
import "tinymce/plugins/save";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/table";
import "tinymce/plugins/template";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/emoticons/js/emojis";

export default function TextEditor({ ...rest }) {
  return (
    <Editor
      init={{
        elementpath: false,
        promotion: false,
        language_url: "/langs/fa.js",
        language: "fa",
        typography_langs: ["en", "fa"],
        typography_default_lang: "fa",
        directionality: "rtl",
        skin: false,
        content_css: false,
        width: "100%",
        plugins: [
          "advlist",
          "anchor",
          "autolink",
          "help",
          "image",
          "link",
          "lists",
          "searchreplace",
          "table",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style: "body { font-size:14px }",
      }}
      {...rest}
    />
  );
}
