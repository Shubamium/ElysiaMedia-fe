import React from "react";
import "./contact.scss";
import { HiMiniPaperAirplane } from "react-icons/hi2";
type Props = {};

export default function ContactPage({}: Props) {
  return (
    <main id="contact-page">
      <form action="#" className="contact-form">
        <div className="form-header">
          <h2>contact us</h2>
          <hr />
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            quibusdam sint, dolore recusandae sit quam eligendi reiciendis
            sapiente error excepturi nisi culpa corporis voluptate possimus.
          </p> */}
        </div>

        <div className="form-fields">
          <div className="fields">
            <label htmlFor="name">- NAME -</label>
            <input
              type="text"
              autoComplete="name"
              placeholder="Enter your name here . . ."
              id="name"
              required
            />
          </div>
          <div className="fields">
            <label htmlFor="email">- EMAIL -</label>
            <input
              type="email"
              placeholder="Enter your email here . . ."
              autoComplete="name"
              id="email"
            />
          </div>
          <div className="fields">
            <label htmlFor="message">- MESSAGE -</label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Write your messages here . . ."
            ></textarea>
          </div>
        </div>

        <div className="action">
          <button type="submit" className="btn btn-submit">
            <div className="decor"></div>
            <span className="panel">
              SEND <HiMiniPaperAirplane />
            </span>
          </button>
        </div>

        <img src="/decors/contact-l.png" className="decors decor-l"></img>
        <img src="/decors/contact-r.png" className="decors decor-r"></img>
      </form>
    </main>
  );
}
