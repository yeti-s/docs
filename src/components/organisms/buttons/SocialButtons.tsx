import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

import { GitHub, Instagram } from '@mui/icons-material';
import IconButton from '@src/components/atoms/buttons/IconButton';


type Icons = {
    [key: string]: React.ReactNode
};

type Social = {
    name: string,
    url: string
};

type Node = {
    siteMetadata: {
        social: Array<Social>
    }
};

type QueryProps = {
    allSite: {
        nodes: Array<Node>
    }
};

const icons: Icons = {
    'github': <GitHub/>,
    'instagram': <Instagram/>
};

const SocialButtons = () => {
    const queryProps: QueryProps = useStaticQuery(query);
    const socials = queryProps.allSite.nodes[0].siteMetadata.social
    return (
        <SocialButtonsWrapper>
            {
                socials.map(social => (
                    <Link key={social.name} to={social.url}>
                        <IconButton key={social.name} icon={icons[social.name]}/>
                    </Link>
                ))}
        </SocialButtonsWrapper>
    );
};

const query = graphql`{
    allSite {
        nodes {
            siteMetadata {
                social {
                    name
                    url
                }
            }
        }
    }
}`;


const SocialButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`;


export default SocialButtons;