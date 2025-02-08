
import React from "react";
import { DisplaySize } from "./components/displaysize";
import { PersonByWindowSize } from "./components/personbywindowsize";

function App() {
    return (
        <div>
            <DisplaySize />
            <PersonByWindowSize />
            <p>Resizing your window changes the avatar appearance dynamically.</p>
        </div>
    );
}

export default App;