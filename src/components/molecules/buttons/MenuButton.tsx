import React from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { Menu } from "@mui/icons-material";
import Grid from "@src/components/atoms/grids/Grid";
import IconButton from "@src/components/atoms/buttons/IconButton";
import { TOGGLE_NAV, createAtom } from "@src/context/atoms";

const MenuButton = () => {
    const [isNavOpened, setIsNavOpened] = useRecoilState(createAtom(TOGGLE_NAV, false));
    const toggleNav = () => {setIsNavOpened(!isNavOpened)};

    return (
        <MenuWrapper align={true}>
            <IconButton icon={<Menu/>} onClick={toggleNav}/>
        </MenuWrapper>
    )
};

const MenuWrapper = styled(Grid)`
    opacity: 1;
    padding-top: 4px;
    transition: all 0.25s var(--ease-in-out-quad);
    @media (min-width: 1024px) {
        opacity: 0;
    }
`;

export default MenuButton;