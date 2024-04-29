import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "./aboutSection.scss";
type Props = {};

export default function AboutSection({}: Props) {
  return (
    <section id="about">
      <div className="title-part">
        <h2>
          ABOUT
          <span>ELYSIA MEDIA</span>
        </h2>
        <div className="contacts">
          <a href="#" target="_blank" className=" btn contact">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" className=" btn contact">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" className=" btn contact">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="banner-part">
        <img src="" alt="" />
      </div>
      <article className="info-part">
        <p>
          Elysia Media was started by VTuber enthusiasts with a passion for
          content creation! Our mission is to bring together fans from across
          the globe!
        </p>
        <p>
          Our talents are our top priority, so we believe that they should have
          the ability to let their creativity run free! We provide talents with
          tech support, social media management, assets for debut, etc.!
        </p>
        <div className="action">
          <Link href={"/contact"} className="btn btn-about">
            Send us a message <FaArrowRightLong />
          </Link>
        </div>
      </article>
      <img src="/decors/chara-art-decor.png" alt="" className="chara-art" />
    </section>
  );
}
