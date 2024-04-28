import React from "react";
import { FaTwitter } from "react-icons/fa";
import "./talent.scss";
type Props = {
  params: {
    id: string;
  };
};

export default function Talent({ params }: Props) {
  return (
    <main id="talent">
      <div className="talent-data">
        <div className="confine">
          <article className="data">
            <div className="talent-head">
              <h2>title of talents</h2>
              <p>talent name</p>
            </div>
            <div className="talent-info">
              <div className="text-data">
                <div className="bio">
                  <h2>Bio</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus dolores illo perferendis ut tempore repudiandae
                    aliquid nesciunt facilis, ullam sapiente odio quisquam
                    distinctio ipsum est quibusdam fugit accusantium at aperiam?
                  </p>
                </div>
                <div className="info-list">
                  <div className="info">
                    <h2>Info Title</h2>
                    <p>Info value</p>
                  </div>
                  <div className="info">
                    <h2>Info Title</h2>
                    <p>Info value</p>
                  </div>
                  <div className="info">
                    <h2>Info Title</h2>
                    <p>Info value</p>
                  </div>
                  <div className="info">
                    <h2>Info Title</h2>
                    <p>Info value</p>
                  </div>
                </div>
              </div>
              <div className="other-data">
                <div className="box">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Oowd2VzrREc?si=zUOLrrO5765IcQO2"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>

                <div className="contacts">
                  <a href="#" target="_blank" className="btn contact">
                    <FaTwitter />
                  </a>
                  <a href="#" target="_blank" className="btn contact">
                    <FaTwitter />
                  </a>
                  <a href="#" target="_blank" className="btn contact">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </article>
          <figure className="graphics">
            <img
              src="/graphics/necochan.png"
              alt=""
              className="talent-art ni"
            />
          </figure>
        </div>
      </div>
    </main>
  );
}
