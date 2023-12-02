import React from 'react';
import styled from '@emotion/styled';

import Grid from '@src/components/atoms/grids/Grid';
import LogoButton from '@src/components/atoms/buttons/LogoButton';
import SocialButtons from '@src/components/organisms/buttons/SocialButtons';
import WiderButton from '@src/components/molecules/buttons/WiderButton';
import ThemeButton from '@src/components/molecules/buttons/ThemeButton';
import MenuButton from '@src/components/molecules/buttons/MenuButton';

const Header = () => {

    return (
        <HeaderWrapper>
            <Grid align={true}>
                <MenuButton/>
                <LogoButton />
            </Grid>
            <Grid align={true}>
                <SocialButtons/>
                <WiderButton/>
                <ThemeButton/>
            </Grid>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;


export default Header;