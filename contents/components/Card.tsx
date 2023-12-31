import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Card = ({src, title, description, path}) => {
    return (
        <CardInterface to={path}>
                <CardImageWrapper>
                    <CardImage src={src}/>
                </CardImageWrapper>
                <CardContentWrapper>
                    <CardTitle>
                        {title}
                    </CardTitle>
                    <CardDesc> 
                        {description}
                    </CardDesc>
                </CardContentWrapper>
        </CardInterface>
    )
}

const CardInterface = styled(Link)`
    text-decoration: none;
    width: 20rem;
    height: 16rem;
    margin: 1rem;
    display: inline-block;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    background-color: var(--card-background);
    border-top: 1px solid var(--border-color);
    opacity: 0.9;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`

const CardImageWrapper = styled.div`
    width: 100%;
    height: 55%;
    border-bottom: 1px solid var(--border-color);
`

const CardImage = styled.img`
    width: 100%;
    height: 100%;
`

const CardTitle = styled.div`
    width: 100%;
    height: 38%;
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--text-color);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    overflow: hidden;
`

const CardDesc = styled.div`
    width: 100%;
    height: 62%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--sub-text-color);
`

const CardContentWrapper = styled.div`
    width: 100%;
    height: 45%;
    padding: 1rem;
`

export default Card;