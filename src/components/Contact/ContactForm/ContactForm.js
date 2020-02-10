import React from 'react';

import styles from './ContactForm.module.css';
import Title from '../../Title/Title';

const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <Title title="Contact" subtitle="Us" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/rickywu0806@gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Smith"
              className={styles.formControl}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@gmail.com"
              className={styles.formControl}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Hello There"
              className={styles.formControl}
            />
          </div>
          <div>
            <input type="submit" value="Submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
