import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./audition.scss";
type Props = {};

export default function AuditionPage({}: Props) {
  return (
    <main id="audition-page">
      <section className="audition">
        <div className="confine">
          <article>
            <h2>
              Join our
              <span>auditions!</span>
            </h2>

            <p>Join Elysia in making our mark on VTubing!</p>

            <div className="action">
              <a href="#" target="_blank" className="btn btn-apply">
                apply now <FaArrowRightLong />
              </a>
            </div>
          </article>

          <div className="conditions">
            <div className="condiition">
              <div className="decor"></div>
              <div className="panel">
                <p>
                  All applicants must be<strong> 18 years old </strong> or
                  older.
                </p>
              </div>
            </div>
            <div className="condiition">
              <div className="decor"></div>
              <div className="panel">
                <p>
                  <strong> Any gender</strong> is welcome to apply.
                </p>
              </div>
            </div>
            <div className="condiition">
              <div className="decor"></div>
              <div className="panel">
                <p>
                  Must be able to stream a minimum of{" "}
                  <strong>4 days a week.</strong>
                </p>
              </div>
            </div>
            <div className="condiition">
              <div className="decor"></div>
              <div className="panel">
                <p>
                  Have <strong>passion</strong> for{" "}
                  <strong>virtual live-streaming </strong> activities!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
