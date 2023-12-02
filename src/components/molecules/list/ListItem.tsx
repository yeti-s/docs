import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from 'recoil';
import styled from "@emotion/styled";
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { createAtom } from "@src/context/atoms";
import ToggleButton from "@src/components/atoms/buttons/ToggleButton";
import Grid from "@src/components/atoms/grids/Grid";

type Props = {
    id: string
    button?: React.ReactNode,
    subItems?: React.ReactNode,
    children?: React.ReactNode
};

const ListItem = ({id, button, subItems, children}: Props) => {
    const [opened, setOpened] = useRecoilState(createAtom(id, false));
    const [subHeight, setSubHeight] = useState(0);
    const ref = useRef<HTMLUListElement>(null);

    const toggleSubList = () => {
        if (opened) {
            setSubHeight(0);
            setOpened(false);
        }
        else if (ref.current) {
            setSubHeight(ref.current.scrollHeight);
            setOpened(true);
        }
    }

    return (
        <>
            <Grid width={100}>
                <ListContentCol width={85} align={true}>
                    {children}
                </ListContentCol>
                {
                    subItems ?
                    <Grid width={15} align={true}>
                        <ToggleButton onClick={toggleSubList} trueIcon={<ExpandLess/>} falseIcon={<ExpandMore/>} state={opened} />
                    </Grid>
                    : <></>
                }
            </Grid>
            {
                subItems ? 
                <SubList ref={ref} height={subHeight}>
                    {subItems}
                </SubList>
                : <></>
            }
        </>
    )
};

const SubList = styled.ul<{height:number}>`
    height: ${p=>p.height}px;
    overflow: hidden;
    transition: height 0.5s cubic-bezier(0.32, 0.9, 0.28, 0.93);
`;

// const ListRow = styled`
//     display: flex;
//     width: 100%;
// `;

const ListContentCol = styled(Grid)`
    padding: 0.6rem 1.2rem 0.6rem 1.8rem;
    font-weight: bold;
    text-decoration: none;
`;

export default ListItem;