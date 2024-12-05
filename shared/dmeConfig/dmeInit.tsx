import { registerDefaultWidgets, setDMEditorConfig } from "dmeditor";
import { dmeConfig } from "./DMEConfig";

export const dmeInit = () => {
  registerDefaultWidgets();
  setDMEditorConfig(dmeConfig);
};
