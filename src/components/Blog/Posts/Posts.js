import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './Posts.module.css';
import Title from '../../Title/Title';
import Post from './Post/Post';

const getPosts = graphql`
  query {
    allPosts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          title
          slug
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

const Posts = () => {
  const { allPosts } = useStaticQuery(getPosts);
  const posts = allPosts.edges;

  return (
    <section className={styles.posts}>
      <Title title="Our" subtitle="Blog" />
      <div className={styles.center}>
        {posts.map(({ node }) => {
          return <Post key={node.id} blog={node} />;
        })}
      </div>
    </section>
  );
};

export default Posts;
