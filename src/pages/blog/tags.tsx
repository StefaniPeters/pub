import { graphql, Link } from 'gatsby';
import * as React from 'react';

import { Container, Layout, PageTitle, Seo } from '@components';
import styled from '@styled-components';
import { slugify } from '@utils';

interface Group {
  fieldValue: string;
  totalCount: number;
}

interface TagsPageProps {
  data: {
    allMarkdownRemark: {
      group: Group[];
    };
  };
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const List = styled.ul`
  width: 100%;
  margin: 0 auto 1em auto;
  max-width: ${({ theme }) => theme.sizes.maxWidthCentered};
`;

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.25em 0.25em 0;

  a {
    float: left;
    font-size: 0.8em;
    transition: 0.2s;
    background: ${({ theme }) => theme.colors.tertiary};
    padding: 0.5em;
    border-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 2px;
    text-transform: capitalize;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.base};
    border: 1px solid ${({ theme }) => theme.colors.secondary};

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.base};
    }
  }
`;

const TagsPage: React.FunctionComponent<TagsPageProps> = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <Seo title="Tags" />

    <Container>
      <PageTitle>Tags</PageTitle>

      <List>
        {group.map(({ fieldValue, totalCount }) => (
          <Tag key={fieldValue}>
            <Link to={`/blog/tag/${slugify(fieldValue)}/`}>
              {fieldValue} ({totalCount})
            </Link>
          </Tag>
        ))}
      </List>
    </Container>
  </Layout>
);

export default TagsPage;