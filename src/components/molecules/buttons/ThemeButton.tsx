import React, { useContext } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { GlobalDispatchContext, GlobalStateContext } from "@src/context/ContextProvier";
import ToggleButton from "@src/components/atoms/buttons/ToggleButton";


const ThemeButton = () => {
    const isDarkMode = useContext(GlobalStateContext).isDarkMode;
    const dispatch = useContext(GlobalDispatchContext);
    const toggleTheme = () => {
        if (dispatch) dispatch({ type: 'TOGGLE_THEME' })
    }

    return (
        <ToggleButton trueIcon={<DarkMode/>} falseIcon={<LightMode/>} state={isDarkMode} onClick={toggleTheme} />
    )
};

export default ThemeButton;