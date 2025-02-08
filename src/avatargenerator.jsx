// import React from "react";
// import { BigHead } from "@bigheads/core";
// import useWindowSize from "./usewindowsize";

// const avatars = {
//   Mithi: {
//     skinTone: "light",
//     eyes: "happy",
//     eyebrows: "raised",
//     mouth: "smile",
//     hair: "short",
//     hairColor: "black",
//     faceMask: false,
//     maskColor: "blue",
//   },
//   Diana: {
//     skinTone: "brown",
//     eyes: "normal",
//     eyebrows: "leftLowered",
//     mouth: "serious",
//     hair: "bob",
//     hairColor: "blonde",
//     faceMask: false,
//     maskColor: "red",
//   },
//   Mikong: {
//     skinTone: "dark",
//     eyes: "squint",
//     eyebrows: "angry",
//     mouth: "openSmile",
//     hair: "buzz",
//     hairColor: "brown",
//     faceMask: false,
//     maskColor: "black",
//   },
// };

// const getRandomFeature = (options) => options[Math.floor(Math.random() * options.length)];

// const AvatarGenerator = () => {
//   const isBig = useWindowSize(1001, Infinity);
//   const isMedium = useWindowSize(700, 1000);
//   const isSmall = useWindowSize(0, 699);

//   let avatar = null;
//   let avatarName = "";

//   if (isBig) {
//     avatar = avatars.Mithi;
//     avatarName = "Mithi";
//   } else if (isMedium) {
//     avatar = avatars.Diana;
//     avatarName = "Diana";
//   } else if (isSmall) {
//     avatar = avatars.Mikong;
//     avatarName = "Mikong";
//   }

//   if (!avatar) return null;

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>Current Avatar: {avatarName}</h2>
//       <BigHead
//         {...avatar}
//         hat={getRandomFeature(["beanie", "turban", "none"])}
//         hatColor={getRandomFeature(["red", "blue", "green", "yellow"])}
//         accessory={getRandomFeature(["none", "sunglasses", "roundGlasses", "tinyGlasses"])}
//         clothing={getRandomFeature(["shirt", "dressShirt", "vneck"])}
//         clothingColor={getRandomFeature(["white", "red", "blue", "black"])}
//         graphic={getRandomFeature(["react", "vue", "gatsby", "none"])}
//       />
//     </div>
//   );
// };

// export default AvatarGenerator;


// src/hooks/useWindowSize.js
import { useEffect, useState, useDebugValue } from "react";

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });
    useDebugValue(`width: ${windowSize.width}px, height: ${windowSize.height}px`);

    useEffect(() => {
        const handleResize = () =>
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export function useWithinWindowWidth(minWidth, maxWidth) {
    const { width } = useWindowSize();
    const isWithin = width && width >= minWidth && width <= maxWidth;
    useDebugValue({ minWidth, maxWidth, isWithin }, formatDebugValueWithinWindow);
    return isWithin;
}

const formatDebugValueWithinWindow = ({ minWidth, maxWidth, isWithin }) => {
    if (maxWidth === Infinity) {
        return `(min-width: ${minWidth}px) => ${isWithin}`;
    }
    if (minWidth === 0) {
        return `(max-width: ${maxWidth}px) => ${isWithin}`;
    }
    return `(max-width: ${maxWidth}px) and (min-width: ${minWidth}px) => ${isWithin}`;
};
