import React, { useEffect, useRef } from "react";


function Editor({ onChange, editorLoaded, name, value }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
      // ClassicEditor: require("@ckeditor/ckeditor5-editor-classic/src/classiceditor")
    };
  }, []);
  
  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          config={{
            // plugins: [Essentials, Bold, Italic, Paragraph],
            // toolbar: ["bold", "italic"],
            // toolbar: [],
            // ckfinder: {
            //   // Upload the images to the server using the CKFinder QuickUpload command
            //   // You have to change this address to your server that has the ckfinder php connector
            //   uploadUrl: "" //Enter your upload url
            // }
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data })
            onChange(data);
          }}
          onReady={(event, editor) => {
            console.log("Ready.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onError={(event, editor) => {
            console.log("Error.", editor);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}

export default Editor;
