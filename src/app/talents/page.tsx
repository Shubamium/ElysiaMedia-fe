import React from "react";
import "./talents.scss";
import TalentList from "./talentList/TalentList";
type Props = {};

export default function TalentsPage({}: Props) {
  return (
    <main id="talents">
      <TalentList />

      <img src="/decors/side-decor.png" alt="" className="decor-side" />
    </main>
  );
}
