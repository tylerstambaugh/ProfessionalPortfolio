import * as React from "react";
import { Stack } from "react-bootstrap";

export type FullScreenSectionProps = {
  isDarkBackground: boolean;
  backgroundColor: string;
  fullScreen: boolean;
  id: string;
  children: React.ReactNode;
  [key: string]: any;
};

export default function FullScreenSection(props: FullScreenSectionProps) {
  const { isDarkBackground, id, children } = props;
  const sectionStyle = {
    color: props.isDarkBackground ? "white" : "black",
    backgroundColor: props.backgroundColor,
  };

  return (
    <Stack
      id={id}
      color={isDarkBackground ? "white" : "black"}
      className={`justify-content-center align-items-center ${
        props.fullScreen ? "vh-100" : ""
      }`}
      style={sectionStyle}
    >
      {children}
    </Stack>
  );
}
