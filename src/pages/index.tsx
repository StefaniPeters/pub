import { graphql, Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

import Image from '../components/image';
import Layout from '../components/layout';
import Seo from '../components/seo';

import './index.css';

interface PostNode {
  node: {
    excerpt: string;
    frontmatter: {
      date: string;
      title: string;
    };
    fields: {
      slug: string;
    };
  };
}

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
    allMarkdownRemark: {
      edges: PostNode[];
    };
  };
}

const ImageWrapper = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;

const Title = styled.h3`
  margin-bottom: 0.25rem;
`;

const StyledLink = styled(Link)`
  box-shadow: none;
`;

const IndexPage: React.FunctionComponent<IndexPageProps> = (props) => {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo
        title="All posts"
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />

      <ImageWrapper>
        <Image />
      </ImageWrapper>

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <div key={node.fields.slug}>
            <Title>
              <StyledLink to={node.fields.slug}>{title}</StyledLink>
            </Title>

            <small>{node.frontmatter.date}</small>

            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
