import React from "react";
import { useWithinWindowWidth } from "../hooks/usewindowsize";
import { BigHead } from "@bigheads/core";

const MITHI = { name: "Mithi" };
const DIANA = { name: "Diana" };
const MIKONG = { name: "Mikong" };

function RandomHead({ person }) {
    return <BigHead {...person} />;
}

export function PersonByWindowSize() {
    const isBig = useWithinWindowWidth(1000, Infinity);
    const isMedium = useWithinWindowWidth(700, 999);
    const isSmall = useWithinWindowWidth(0, 699);

    let person = null;
    if (isBig) {
        person = <RandomHead person={MITHI} />;
    } else if (isMedium) {
        person = <RandomHead person={DIANA} />;
    } else if (isSmall) {
        person = <RandomHead person={MIKONG} />;
    }

    return <div>{person}</div>;
}