import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from 'recoil';
import styled from "@emotion/styled";
import { ChevronRight, ExpandMore } from '@mui/icons-material';
import { createAtom } from "@src/context/atoms";
import ToggleButton from "@src/components/atoms/buttons/ToggleButton";
import Grid from "@src/components/atoms/grids/Grid";

type Props = {
    id?: string
    subItems?: Array<React.ReactNode> | null,
    children?: React.ReactNode
};

const ListItem = ({id, subItems, children}: Props) => {
    const [subHeight, setSubHeight] = id && subItems ? useRecoilState(createAtom(id, 0)) : [0, ()=>{}];
    const ref = useRef<HTMLUListElement>(null);
    const opened = subHeight > 0;

    const toggleSubList = () => {
        if (subItems) {
            if (opened) setSubHeight(0);
            else if (ref.current) setSubHeight(ref.current.scrollHeight);
        }
    };

    return (
        <>
            <RowWrapper width={100} opened={opened}>
                <Grid width={15}>
                    {
                        subItems ? 
                        <ToggleButton onClick={toggleSubList} trueIcon={<ExpandMore/>} falseIcon={<ChevronRight/>} state={opened}/>
                        : <NoSubItemBorder width={57}/>
                    }
                </Grid>
                <ListContentCol>
                    {children}
                </ListContentCol>
                {
                    subItems ? <ChildrenSizeWrapper>{subItems.length}</ChildrenSizeWrapper> : <></>
                }
            </RowWrapper>
            {
                id && subItems ? 
                <SubListWrapper ref={ref} height={subHeight}>
                    {subItems.map((item, idx) => <ListItem key={`${id}_${idx}`}>{item}</ListItem>)}
                </SubListWrapper>
                : <></>
            }
        </>
    )
};

const RowWrapper = styled(Grid)<{opened:boolean}>`
    font-weight: ${p=>p.opened ? 'bold' : 'none'};
    color: ${p=>p.opened ? 'var(--text-color)' : 'var(--sub-text-color)'};
    padding: 0 1rem 0 1rem;
`

const SubListWrapper = styled.ul<{height:number}>`
    width: 100%;
    padding: 0;
    height: ${p=>p.height}px;
    overflow: hidden;
    transition: height 0.5s cubic-bezier(0.32, 0.9, 0.28, 0.93);
`;


const NoSubItemBorder = styled(Grid)`
    height: 100%;
    border-right: 2px solid var(--border-color);
`


const ListContentCol = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0.3rem 0.3rem 0.3rem 1rem;
    text-decoration: none;
    max-width: 75%;
`;

const ChildrenSizeWrapper = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.65rem;
`

export default React.memo(ListItem);