import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './PostTemplate.module.css';
import Layout from '../../components/Layout/Layout';

const PostTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post;

  const options = {
    renderNode: {
      'embedded-asset-block': ({ data }) => (
        <img
          width="400"
          src={data.target.fields.file['en-US'].url}
          alt="Single Post"
        />
      ),
    },
  };

  return (
    <Layout>
      <section className={styles.post}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>Published at: {published}</h4>
          <article className={styles.text}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/posts" className="btnPrimary">
            All Posts
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`;

export default PostTemplate;
