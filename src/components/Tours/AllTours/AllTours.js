import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TourItemsAll from '../../TourItems/TourItemsAll';

const getTours = graphql`
  query {
    allTours: allContentfulTour {
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

const AllTours = () => {
  const { allTours } = useStaticQuery(getTours);
  const tours = allTours.edges;

  return <TourItemsAll tours={tours} />;
};

export default AllTours;
