"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
type Props = {};

export default function TalentList({}: Props) {
  const [genSelected, setGenSelected] = useState(false);
  return (
    <section className="talent-list">
      <div className="confine">
        <div className="list-container">
          {/* <h2>talent</h2> */}
          {!genSelected ? (
            <div className="generation-list">
              <div
                className="generation"
                onClick={() => {
                  setGenSelected(true);
                }}
              >
                <div className="decor"></div>
                <div className="panel">
                  <h2 className="sub">Generation 1</h2>
                  <p className="gen-name">RE:VERSE</p>
                </div>
              </div>
              <div
                className="generation"
                onClick={() => {
                  setGenSelected(true);
                }}
              >
                <div className="decor"></div>
                <div className="panel">
                  <h2 className="sub">Generation 1</h2>
                  <p className="gen-name">RE:VERSE</p>
                </div>
              </div>
              <div
                className="generation"
                onClick={() => {
                  setGenSelected(true);
                }}
              >
                <div className="decor"></div>
                <div className="panel">
                  <h2 className="sub">Generation 1</h2>
                  <p className="gen-name">RE:VERSE</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="talent-list">
              <div className="talent-list-header">
                <button
                  className="btn btn-back"
                  onClick={() => {
                    setGenSelected(false);
                  }}
                >
                  <IoArrowBackSharp /> generation
                </button>
                <h2>GENERATION NAME</h2>
              </div>
              <div className="lists">
                <Link href={"/talent/talent-one"} className="talent">
                  <div className="decor"></div>
                  <div className="panel">
                    <div className="talent-detail">
                      <h2 className="sub">Talent Title</h2>
                      <p className="gen-name">Talent Name</p>
                    </div>
                    <div className="pfp">
                      <img src="" alt="" />
                    </div>
                    {/* <div className="decor-edge" ></div> */}
                    <img
                      src="/decors/decor-edge.png"
                      alt=""
                      className="decor-edge"
                    />
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <article className="talent-info">
          <div className="info-container">
            <h2>our talents</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quidem vitae dignissimos quaerat! Neque eius laboriosam similique
              dolorem corrupti reiciendis qui deserunt porro, velit, at fuga
              adipisci magnam maiores itaque.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
