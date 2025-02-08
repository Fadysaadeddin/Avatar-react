import React from "react";
import { useWindowSize } from "../hooks/usewindowsize";

export function DisplaySize() {
    const { width, height } = useWindowSize();
    return <p>Window Size: {width}px x {height}px</p>;
}