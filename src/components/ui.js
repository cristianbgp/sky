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

export { Card, Text, Title, Line };
