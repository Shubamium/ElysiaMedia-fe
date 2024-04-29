"use client";
import { urlFor } from "@/db/db";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";

type Generation = {
  title: string;
  order: string;
  slug: {
    current: string;
  };
};
export type Talent = {
  name: string;
  tile: string;
  slug: {
    current: string;
  };
  bio: string;
  generation: string;
  info: {
    title: string;
    value: string;
  }[];
  contacts: {
    url: string;
    icon: any;
  }[];
  pfp: any;
  video: string;
  art: any;
};
type Props = {
  genList: Generation[];
  talentList: Talent[];
};

export default function TalentList({ genList, talentList }: Props) {
  const [genSelected, setGenSelected] = useState(false);
  const [selectedGen, setSelectedGen] = useState<Generation | null>(null);
  return (
    <section className="talent-list">
      <div className="confine">
        <div className="list-container">
          {/* <h2>talent</h2> */}
          {!genSelected ? (
            <div className="generation-list">
              {genList?.map((gen, index) => {
                return (
                  <div
                    className="generation"
                    onClick={() => {
                      setSelectedGen(gen);
                      setGenSelected(true);
                    }}
                    key={"gen-" + gen.slug.current}
                  >
                    <div className="decor"></div>
                    <div className="panel">
                      <h2 className="sub">{gen.order}</h2>
                      <p className="gen-name">{gen.title}</p>
                    </div>
                  </div>
                );
              })}
              {/* <div
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
              </div> */}
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
                <h2>{selectedGen?.title}</h2>
              </div>
              <div className="lists">
                {talentList?.map((talent, index) => {
                  return (
                    <Link
                      href={`/talent/${selectedGen?.slug.current ?? "NA"}/${
                        talent.slug.current
                      }`}
                      key={talent.slug.current}
                      className="talent"
                    >
                      <div className="decor"></div>
                      <div className="panel">
                        <div className="talent-detail">
                          <h2 className="sub">{talent.tile}</h2>
                          <p className="gen-name">{talent.name}</p>
                        </div>
                        <div className="pfp">
                          <img src={urlFor(talent.pfp).url()} alt="" />
                        </div>
                        {/* <div className="decor-edge" ></div> */}
                        <img
                          src="/decors/decor-edge.png"
                          alt=""
                          className="decor-edge"
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <article className="talent-info">
          <div className="info-container">
            <h2>our talents</h2>
            <hr />
            <p>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quidem vitae dignissimos quaerat! Neque eius laboriosam similique
              dolorem corrupti reiciendis qui deserunt porro, velit, at fuga
              adipisci magnam maiores itaque. */}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
