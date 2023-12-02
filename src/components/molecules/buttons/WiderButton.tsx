import React from "react";
import { useRecoilState } from "recoil";
import { WidthNormal, WidthWide } from "@mui/icons-material";
import { TOGGLE_WIDE, createAtom } from "@src/context/atoms";
import ToggleButton from "@src/components/atoms/buttons/ToggleButton";

const WiderButton = () => {
    const [isWide, setIsWide] = useRecoilState(createAtom(TOGGLE_WIDE, false));
    const toggleWide = () => {
        setIsWide(!isWide);
    }

    return (
        <ToggleButton trueIcon={<WidthWide/>} falseIcon={<WidthNormal/>} state={isWide} onClick={toggleWide}/>
    )
};

export default WiderButton;