// import React from "react";
// // import AvatarGenerator from "./avatargenerator";

// const App = () => {
//   return (
//     <div>
//       <h1>Responsive Avatars</h1>
//       <BeanHead
//       accessory="roundGlasses"
//       body="chest"
//       circleColor="blue"
//       clothing="dressShirt"
//       clothingColor="white"
//       eyebrows="serious"
//       eyes="content"
//       faceMask={false}
//       faceMaskColor="blue"
//       facialHair="mediumBeard"
//       graphic="none"
//       hair="none"
//       hairColor="orange"
//       hat="none2"
//       hatColor="green"
//       lashes
//       lipColor="green"
//       mask
//       mouth="serious"
//       skinTone="light"
//     />
//       {/* <AvatarGenerator /> */}
//     </div>
//   );
// };

// export default App;


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