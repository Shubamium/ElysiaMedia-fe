import React from "react";
import "./header.scss";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
  return (
    <header id="header">
      <h1 className="logo" hidden={true}>
        Elysia Media
      </h1>
      <div className="logo-container">
        <Link href={"/"}>
          <img src="/graphics/elysia-logo.png" alt="" className="logo" />
        </Link>
        <img src="/decors/header-style.png" alt="" className="decor head ni" />
        <img src="/decors/header-bg.png" alt="" className="decor bg ni" />
      </div>
      <nav id="navigation">
        <div className="links">
          <Link className="nav-link" href={"/"}>
            <span>◈ home</span>
          </Link>
          <Link className="nav-link" href={"/talents"}>
            <span>◈ talents</span>
          </Link>
          <Link className="nav-link" href={"/audition"}>
            <span>◈ audition</span>
          </Link>
          <Link className="nav-link" href={"/contact"}>
            <span>◈ contact</span>
          </Link>
        </div>
        <img
          src="/decors/header-diamond.png"
          alt=""
          className="decor-diamond ni"
        />
      </nav>
      <img src="/decors/header-side.png" alt="" className="header-side ni" />
    </header>
  );
}
