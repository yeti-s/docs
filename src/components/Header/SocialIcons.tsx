import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Icon from '@src/components/atoms/Icon';
import { GitHub } from '@mui/icons-material';


type Icons = {
    [key:string]: React.ReactNode
};

type Social = {
    name:string,
    url:string
}

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

/**
 * Add icons to here
 * https://mui.com/material-ui/material-icons/
**/
const icons:Icons = {
    'github': <GitHub/>
}

const SocialIcons = () => {
    const queryProps: QueryProps = useStaticQuery(query);
    const socials = queryProps.allSite.nodes[0].siteMetadata.social
    return (
        <StyledSocialIcons>
            {
                socials.map(social => (
                    <SocialLinks key={social.name} href={social.url}>
                        <Icon icon={icons[social.name]} size={22} />
                    </SocialLinks>
                ))}
        </StyledSocialIcons>
    );
};

const query = graphql`
  {
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
  }
`;


const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  opacity: 0.7;
`;

const SocialLinks = styled.a`
  display: inline-block;
  margin: 0 0.5rem;
`;

export default SocialIcons;