import React from "react";
import "./heroSection.scss";
import { BsStars } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { GiButterfly } from "react-icons/gi";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section id="hero">
      <div className="hero-logo">
        <img src="/graphics/elysia-logo-big.png" alt="" />
      </div>
      <h2 className="title">
        uniting the globe with <span>virtual talents</span>
      </h2>
      <p className="description">
        Elysia Media is a US based virtual talent project focusing on
        creativity. We are a team of passionate VTuber enthusiasts who started
        Elysia Media to make our mark on a growing industry.
      </p>

      <div className="action">
        <Link href={"/#about"} className="btn btn-hero styled">
          <span className="btn-panel">
            learn more <GiButterfly />
          </span>
        </Link>
        <Link href={"/audition"} className="btn btn-hero outline">
          <span>
            <BsStars /> audition{" "}
          </span>{" "}
          <FaArrowRightLong />
        </Link>
      </div>
    </section>
  );
}
