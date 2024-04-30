import React from "react";

type Props = {
  name: string;
  email: string;
  message: string;
};

export default function Submission({ name, email, message }: Props) {
  return (
    <div>
      <img src="https://i.ibb.co/xgz5865/elysia-sub.png" alt="mail-banner" />
      <table
        style={{
          width: "600px",
          border: "2px solid #4E538E",
          color: "#4E538E",
          textAlign: "left",
          fontFamily: "Helvetica",
        }}
      >
        <thead style={{ width: "100%" }}>
          <tr>
            <th style={{ border: "1px solid #4E538E", padding: "5px" }}>
              Name
            </th>
            <th style={{ border: "1px solid #4E538E", padding: "5px" }}>
              Email
            </th>
            <th style={{ border: "1px solid #4E538E", padding: "5px" }}>
              Message
            </th>
          </tr>
        </thead>
        <tbody style={{ width: "100%" }}>
          <tr>
            <td
              colSpan={1}
              style={{
                border: "1px solid #4E538E",
                padding: "5px",
                fontWeight: "100",
              }}
            >
              {name}
            </td>
            <td
              colSpan={1}
              style={{
                border: "1px solid #4E538E",
                padding: "5px",
                fontWeight: "100",
              }}
            >
              {email}
            </td>
            <td
              colSpan={2}
              style={{
                border: "1px solid #4E538E",
                padding: "5px",
                fontWeight: "100",
              }}
            >
              {message}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
