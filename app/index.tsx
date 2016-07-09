import * as React from "react";
import {render} from "react-dom";
import '../assets/css/base.css'
import {App} from './container/App.tsx'
render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("root")
)