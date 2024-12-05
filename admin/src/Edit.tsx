import { DMEData, DMEditor, DMEditorRefType } from "dmeditor";
import { useEffect, useRef } from "react";

export const Edit = () => {
  const editorRef = useRef<DMEditorRefType>(null);

  const initData = () => {
    const editor = editorRef.current;
    if (editor) {
      const data = [
        {
          data: {
            level: 2,
            settings: { general: { padding: 10 } },
            value: "TEST heading",
          },
          id: "lPqRNWSzhXcr1SG38Vtb9",
          type: "heading",
        },
      ];
      editor.setData(data as any);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <div>
      <DMEditor ref={editorRef} />
    </div>
  );
};
