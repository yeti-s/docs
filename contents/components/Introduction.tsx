import React from 'react';
import styled from '@emotion/styled';

const Introduction = ({thumnail, children}) => {
    return (
        <IntroductionContainer>
            <IntroductionWrapper>
                <ThumnailWrapper>
                    <Thunmail src={thumnail}/>
                </ThumnailWrapper>
                <InfoWrapper>
                    {children}
                </InfoWrapper>
            </IntroductionWrapper>
        </IntroductionContainer>
    )
}

const IntroductionContainer = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
`

const IntroductionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const ThumnailWrapper = styled.div`
    border-radius: 6px;
    width: 40%;
    height: auto;
    padding: 1rem;
    display: flex;
    align-items: center;
`

const Thunmail = styled.img`
    width: 100%;
`

const InfoWrapper = styled.div`
    border-radius: 6px;
    width: 55%;
    heightL auto;
    padding: 1rem;
`

export default Introduction;