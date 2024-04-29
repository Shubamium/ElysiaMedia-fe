import React from "react";
import { FaTwitter } from "react-icons/fa";
import "./talent.scss";
import { fetchData, urlFor } from "@/db/db";
import { Talent } from "@/app/talents/talentList/TalentList";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
type Props = {
  params: {
    id: string[];
  };
};

export default async function TalentPage({ params }: Props) {
  const gen = params.id[0];
  const talentId = params.id[1];

  const talentData = await fetchData<Talent>(`
		*[_type == 'talents' && slug.current == '${talentId}'][0]{
				name,
				tile,
				bio,
				slug,
				'generation': generation->slug.current,
				info,
				contacts,
				video,
				art,
		}
	`);

  return (
    <main id="talent">
      <div className="talent-data">
        <div className="confine">
          <article className="data">
            <div className="talent-head">
              <h2>{talentData.tile}</h2>
              <p>{talentData.name}</p>
            </div>
            <div className="talent-info">
              <div className="text-data">
                <div className="bio">
                  <h2>Bio</h2>
                  <p>{talentData.bio}</p>
                </div>
                <div className="info-list">
                  {talentData.info?.map((info, index) => {
                    return (
                      <div className="info" key={"info-" + index}>
                        <h2>{info.title}</h2>
                        <p>{info.value}</p>
                      </div>
                    );
                  })}
                  {/* <div className="info">
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
                  </div> */}
                </div>
              </div>
              <div className="other-data">
                <div className="box">
                  {talentData.video !== "" ?? (
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${talentData.video}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                  )}
                </div>

                <div className="contacts">
                  {talentData.contacts?.map((contact, index) => {
                    return (
                      <a
                        href={contact.url}
                        target="_blank"
                        key={"talent-contact-" + index}
                        className="btn contact"
                      >
                        <img
                          src={urlFor(contact.icon).url()}
                          alt=""
                          className="icon"
                        />
                      </a>
                    );
                  })}
                  {/* <a href="#" target="_blank" className="btn contact">
                    <FaTwitter />
                  </a>
                  <a href="#" target="_blank" className="btn contact">
                    <FaTwitter />
                  </a> */}
                </div>
              </div>
            </div>
          </article>
          <figure className="graphics">
            <img
              src={urlFor(talentData.art).url()}
              alt=""
              className="talent-art ni"
            />
          </figure>
        </div>
      </div>
      <div className="talent-navigation">
        <div className="left">
          <Link href={"/talents"} className="btn btn-back">
            {" "}
            <FaArrowLeftLong /> talent list
          </Link>
          <img src="/decors/header-diamond.png" alt="" className="decor-back" />
        </div>
        <div className="right"></div>
      </div>
    </main>
  );
}
