import * as React from 'react';
import { Link } from 'gatsby';

import { Anchor, SocialIcon } from '@components';
import styled, { css } from '@styled-components';

interface RowProps {
  flex?: number;
}

interface ListProps {
  direction?: 'column' | 'row';
}

const Wrapper = styled.div`
  background-color: #5f8ddc;
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 0.8em;
  padding-bottom: 1em;
`;

const Inner = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  @media screen and (min-width: 35em) {
    flex-direction: row;
  }
`;

const Row = styled.div<RowProps>`
  flex: ${({ flex = 1 }) => flex};
`;

const Heading = styled.h1`
  color: white;
  font-size: 1.1em;
`;

const List = styled.div.attrs({ role: 'list' })<ListProps>`
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  align-items: flex-start;
`;

const anchorStyles = css`
  color: hsla(0, 0%, 100%, 0.5);
  text-decoration: none;
  background-image: none;
  transition: 0.2s;

  &:hover {
    color: white;
    cursor: pointer;
  }

  &:visited {
    color: hsla(0, 0%, 100%, 0.5);
  }
`;

const StyledAnchor = styled(Anchor).attrs({ role: 'listitem' })`
  ${anchorStyles};
`;

const StyledLink = styled(Link)`
  ${anchorStyles}
`;

const BottomText = styled.div`
  text-align: center;
  padding-top: 4em;
`;

const Footer: React.FunctionComponent = () => (
  <Wrapper>
    <Inner>
      <Row>
        <Heading>Project Unicorn</Heading>

        <p>
          Project Unicorn is an online community that is focused on learning by
          building and shipping meaningful software.
        </p>
      </Row>

      <Row>
        <Heading>About</Heading>

        <List>
          <StyledLink to="/sitemap">Sitemap</StyledLink>
          <StyledLink to="/contact">Contact Us</StyledLink>
          <StyledLink to="/terms">Terms and Conditions</StyledLink>
          <StyledLink to="/privacy">Privacy Policy</StyledLink>
        </List>
      </Row>

      <Row>
        <Heading>Projects</Heading>

        <List>
          <StyledAnchor href="//www.mentrship.com/" content="Mentrship" />
          <StyledAnchor href="//github.com/projectunic0rn/pub" content="Pub" />
        </List>
      </Row>

      <Row>
        <Heading>Follow us</Heading>

        <List direction="row">
          <SocialIcon socialName="facebook" href="//facebook.com" />

          <SocialIcon
            socialName="instagram"
            href="//www.instagram.com/projectunicornonthegram"
          />

          <SocialIcon
            socialName="twitter"
            href="//twitter.com/ProjectUnicorn2"
          />

          <SocialIcon
            socialName="linkedin"
            href="//www.linkedin.com/company/proj-unicorn/about"
          />

          <SocialIcon
            socialName="reddit"
            href="//www.reddit.com/r/projectUnicorn"
          />

          <SocialIcon socialName="github" href="//github.com/projectunic0rn" />
        </List>
      </Row>
    </Inner>

    <BottomText>
      <StyledAnchor href="//github.com/projectunic0rn/pub" content="pub" /> is
      maintained by{' '}
      <StyledAnchor href="//github.com/rmjordas" content="@rmjordas" />
    </BottomText>
  </Wrapper>
);

export default Footer;