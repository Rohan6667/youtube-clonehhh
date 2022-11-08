import React from "react";
import { createRoot } from "react-dom";
import App from "./App";

const root = document.querySelector("#root");
createRoot(root).render(<App />);