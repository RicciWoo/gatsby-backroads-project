import React, { Component } from 'react';

import styles from './TourItems.module.css';
import Title from '../Title/Title';
import TourItem from './TourItem/TourItem';

export default class TourItemsAll extends Component {
  state = {
    tours: [],
    sortedTours: [],
  };

  componentDidMount() {
    this.setState({
      tours: this.props.tours,
      sortedTours: this.props.tours,
    });
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="Our" subtitle="Tours" />
        <div className={styles.center}>
          {this.state.sortedTours.map(({ node }) => {
            return <TourItem key={node.id} tour={node} />;
          })}
        </div>
      </section>
    );
  }
}
