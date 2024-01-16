import React, { useState, useEffect } from "react";
import "./styles.css";
import Editor from "./Editor";

const LOCAL_STORAGE_KEY = "CKEDITOR_CS_CONFIG";

export default function App() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="App">
      <h1>ckEditor 5</h1>

      <Editor
        onChange={(data) => {
          setData(data);
        }}
        editorLoaded={editorLoaded}
      />

      {JSON.stringify(data)}
    </div>
  );
}
