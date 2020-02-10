import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql } from 'gatsby';

import styles from './BlogTemplate.module.css';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/SEO/SEO';
import Title from '../../components/Title/Title';
import Post from '../../components/Blog/Posts/Post/Post';

const BlogTemplate = ({ data, pageContext }) => {
  const { numPages, currPage } = pageContext;

  const isFirst = currPage === 1;
  const isLast = currPage === numPages;

  const prevPage = currPage - 1 === 1 ? `/posts` : `/posts/${currPage - 1}`;
  const nextPage = `/posts/${currPage + 1}`;

  return (
    <Layout>
      <SEO title="Posts" />
      <section className={styles.blog}>
        <Title title="Latest" subtitle="Posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <Post key={node.id} blog={node} />;
          })}
        </div>
        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={prevPage} className={styles.link}>
              Prev
            </AniLink>
          )}

          {Array.from({ length: numPages }, (_, i) => {
            return (
              <AniLink
                fade
                key={i}
                to={`/posts/${i === 0 ? '' : i + 1}`}
                className={
                  i + 1 === currPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </AniLink>
            );
          })}
          {!isLast && (
            <AniLink fade to={nextPage} className={styles.link}>
              Next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default BlogTemplate;
