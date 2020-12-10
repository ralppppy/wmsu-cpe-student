import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill"; // ES6
import quillEmoji from "quill-emoji";

import EditorIcon from "../common/EditorIcon";

import "./styles.css";
import "quill-emoji/dist/quill-emoji.css";

function ThreadMessageEditor() {
  const [text, setText] = useState();

  useEffect(() => {
    let b = document.getElementsByClassName("ql-picker-options");
    let l = document.getElementsByClassName("ql-picker-label")[0];
    l.classList.add("dark:text-gray-300");
    for (let i = 0; i < b.length; i++) {
      b[i].classList.add("dark:bg-gray-card");
      b[i].classList.add("dark:text-gray-300");
      b[i].classList.add("bg-white");
      b[i].classList.add("mb-5");
    }
  }, []);

  ReactQuill.Quill.register(
    {
      "formats/emoji": quillEmoji.EmojiBlot,
      "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
      "modules/emoji-textarea": quillEmoji.TextAreaEmoji,
      "modules/emoji-shortname": quillEmoji.ShortNameEmoji,
    },
    true
  );

  var icons = ReactQuill.Quill.import("ui/icons");
  icons["bold"] = EditorIcon.bold;
  icons["italic"] = EditorIcon.italic;
  icons["underline"] = EditorIcon.underline;
  icons["link"] = EditorIcon.link;
  icons["align"]["center"] = EditorIcon.alignCenter;
  icons["align"][""] = EditorIcon.alignDefault;
  icons["align"]["right"] = EditorIcon.alignRight;
  icons["align"]["justify"] = EditorIcon.alignJustify;
  icons["list"]["ordered"] = EditorIcon.orderedList;
  icons["list"]["bullet"] = EditorIcon.bulletList;

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "italic", "underline"],
      ["link"],
      [{ align: [] }],

      [{ list: "ordered" }, { list: "bullet" }],
    ],
    "emoji-toolbar": true,
    "emoji-textarea": {
      buttonIcon: EditorIcon.emoji,
    },
    "emoji-shortname": true,
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "indent",
    "link",
    "align",
    "clean",
    "emoji",
    "blockquote",
  ];

  const handleChange = () => {};
  return (
    <ReactQuill
      value={text}
      modules={modules} // or modules
      formats={formats}
      onChange={handleChange}
    />
  );
}

export default ThreadMessageEditor;
