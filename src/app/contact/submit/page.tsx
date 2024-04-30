import React from "react";
import "./submit.scss";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
type Props = {
  searchParams: {
    result: string;
  };
};

export default function Submit({ searchParams }: Props) {
  const success = searchParams.result === "success";
  return (
    <main id="submit-page">
      <section id="submit-message">
        {success ? (
          <>
            <h2>Thank you for submitting!</h2>
            <p>Your message has been sent successfully.</p>
          </>
        ) : (
          <>
            <h2>Oops, Looks like something went wrong.</h2>
            <p>
              There was an error submitting your message. Please try again later
              !
            </p>
          </>
        )}
        <Link href={"/"} className="btn btn-back">
          {" "}
          <FaHome />
          Go back to home page
        </Link>
      </section>
    </main>
  );
}
