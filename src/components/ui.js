/** @jsx jsx */
import { jsx } from "@emotion/core";

function Title({ styles, ...props }) {
  return (
    <p
      {...props}
      css={{
        fontSize: "1.2em",
        fontWeight: "bold",
        ...styles
      }}
    />
  );
}

function Line({ styles, ...props }) {
  return (
    <hr
      {...props}
      css={{ border: "solid 1px #efefef", background: "#efefef" }}
    />
  );
}

function Card({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        background: "white",
        borderRadius: ".5em",
        boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, .12)",
        boxSizing: "border-box",
        padding: "2rem",
        width: "100%",
        ...styles
      }}
    />
  );
}

function Text({ styles, ...props }) {
  return (
    <span
      {...props}
      css={{
        display: "block",
        fontWeight: "400",
        padding: "0 8px 8px 0",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#333"
      }}
    />
  );
}

function MapPin(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export { Card, Text, Title, Line, MapPin };
