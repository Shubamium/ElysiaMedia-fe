import React from "react";
import "./talents.scss";
import TalentList from "./talentList/TalentList";
import { fetchData } from "@/db/db";
type Props = {};

export default async function TalentsPage({}: Props) {
  const generation = await fetchData<any[]>(`
		*[_type == 'generation']{
			title,
			order,
			slug
		}
	`);
  const talents = await fetchData<any[]>(`
		*[_type == 'talents']{
			name,
			tile,
			slug,
			'generation': generation->slug.current,
			pfp,

		}
	`);
  console.log(talents);
  return (
    <main id="talents">
      <TalentList genList={generation} talentList={talents} />
      <img src="/decors/side-decor.png" alt="" className="decor-side" />
    </main>
  );
}
