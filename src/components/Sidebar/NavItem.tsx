import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GlobalStateContext, GlobalDispatchContext } from '@src/context/ContextProvier';
import ToggleButton from '@src/components/atoms/buttons/ToggleButton';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { createAtom } from '@src/context/atoms';
import { useRecoilState } from 'recoil';

export type Item = {
    id: string,
    title: string,
    order: Number,
    children: Array<Item>
};

type Props = {
    item: Item
}

const toURL = (id:string) => `/${id}`;

const NavItem = ({ item }: Props) => {
    const [opened, setOpened] = useRecoilState(createAtom(item.id, false));
    const hasChild = item.children.length > 0;

    const onClick = () => {
        setOpened(!opened);
    }

    return (
        <StyledNavItem>
            <NavItemLink to={toURL(item.id)}>
                {item.title}
            </NavItemLink>
            {
                hasChild ? 
                <>
                    <ToggleButton
                        icon1={<ExpandLess/>}
                        icon2={<ExpandMore/>}
                        state={opened}
                        onClick={onClick}
                    />
                    {opened ? 
                    <NavItemChild key={item.id}>
                        {item.children.map(child => 
                            <StyledNavItem key={child.id}>
                                <NavSubItemLink to={toURL(child.id)}>
                                    {child.title}
                                </NavSubItemLink>
                            </StyledNavItem>)
                        }
                    </NavItemChild> : <></>
                    }
                </>
                : <></> 
            }
        </StyledNavItem>
    );
};


const StyledNavItem = styled.li`
  position: relative;
  display: block;
  padding: 0;
  margin: 0.2rem 0;
  width: 100%;
  list-style: none;
`;

const NavItemLink = styled(Link)`
  display: block;
  padding: 0.5rem 1.8rem 0.5rem 1.2rem;
  width: 100%;
  font-weight: bold;
  text-decoration: none;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

const NavSubItemLink = styled(Link)`
  display: block;
  padding: 0.5rem 1.8rem 0.5rem 1.2rem;
  width: 100%;
  text-decoration: none;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

const NavItemChild = styled.ul`
  margin: 0.5rem 0 0.5rem 1.2rem;
  padding: 0;
  list-style: none;
  & > li {
    margin: 0;
  }
`;

export default React.memo(NavItem);