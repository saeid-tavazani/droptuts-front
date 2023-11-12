import { Editor } from "@tinymce/tinymce-react";
// TinyMCE so the global var exists
// eslint-disable-next-line no-unused-vars
import tinymce from "tinymce/tinymce";
// DOM model
import "tinymce/models/dom/model";
// Theme
import "tinymce/themes/silver";
// Toolbar icons
import "tinymce/icons/default";
// Editor styles
import "tinymce/skins/ui/oxide/skin.min.css";

// importing the plugin js.
// if you use a plugin that is not listed here the editor will fail to load
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

// importing plugin resources
import "tinymce/plugins/emoticons/js/emojis";

// Content styles, including inline UI like fake cursors
/* eslint import/no-webpack-loader-syntax: off */
import contentCss from "tinymce/skins/content/default/content.min.css";
import contentUiCss from "tinymce/skins/ui/oxide/content.min.css";
export default function TextEditor({ ...rest }) {
  // note that skin and content_css is disabled to avoid the normal
  // loading process and is instead loaded as a string via content_style
  return (
    <Editor
      init={{
        elementpath: false,
        promotion: false,
        language_url: "/langs/fa.js", // path from the root of your web application — / — to the language pack(s)
        language: "fa",
        typography_langs: ["en", "fa"],
        typography_default_lang: "fa",
        directionality: "rtl",
        skin: false,
        content_css: false,
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
