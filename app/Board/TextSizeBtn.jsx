import React from "react";
import { changeTool } from "../../lib/stores/ToolStore";
import { useDispatch, useSelector } from "react-redux";

const TextSizeBtn = ({ size, font, title, selected }) => {
  const dispatch = useDispatch();
  const sizeNow = useSelector((state) => state.ToolStore.properties.size);
  const tool = useSelector((state) => state.ToolStore.tool);
  const properties = useSelector((state) => state.ToolStore.properties);
  return (
    <option selected={selected}>
      <button
        className={`flex ${font} mx-1 ${sizeNow === size ? "underline" : ""}`}
        onClick={() =>
          dispatch(
            changeTool({
              tool: tool,
              properties: { ...properties, size: size },
            })
          )
        }
      >
        {title}
      </button>
    </option>
  );
};

export default TextSizeBtn;
