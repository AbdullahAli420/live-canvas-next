import { configureStore } from "@reduxjs/toolkit";
import ToolStore from "./stores/ToolStore";
import CanvasStore from "./stores/CanvasStore";

export const store = configureStore({
  reducer: {
    ToolStore: ToolStore,
    CanvasStore: CanvasStore,
  },
});
