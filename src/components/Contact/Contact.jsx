import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mdkalbol"); // Use your Formspree form ID

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Message</p>

        {state.succeeded ? (
          <p>Thanks for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting}>Send</button>
          </form>
        )}
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:rachhanarendra123@gmail.com">rachhanarendra123@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/rachha-narendra-05a307288/">linkedin.com/narendra</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/rachhanari">github.com/nari</a>
        </li>
      </ul>
    </footer>
  );
};
