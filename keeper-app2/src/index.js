import { React } from "react";
import { createRoot} from "react-dom/client";
import App from "./components/App";
import { create } from "domain";

//ReactDOM.render(<App />, document.getElementById("root")); //deprecated

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 


root.render(
    <App />
)

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.
