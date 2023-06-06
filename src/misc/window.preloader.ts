import { contextBridge } from "electron";
import titlebarContext from "./title.context";

contextBridge.exposeInMainWorld("electron_window", {
  titlebar: titlebarContext,
});
