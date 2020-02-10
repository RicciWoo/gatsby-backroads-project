import React from 'react';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link';

import styles from './Post.module.css';

const Post = ({ blog }) => {
  const { title, slug, published, image } = blog;

  return (
    <article className={styles.post}>
      <div className={styles.imgContainer}>
        <Img fluid={image.fluid} className={styles.img} alt="Single Post" />
        <AniLink fade className={styles.link} to={`/post/${slug}`}>
          Read More
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default Post;
