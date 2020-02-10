import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TourItemsFeatured from '../../TourItems/TourItemsFeatured';

const getTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  const { featuredTours } = useStaticQuery(getTours);
  const tours = featuredTours.edges;

  return <TourItemsFeatured tours={tours} />;
};

export default FeaturedTours;
