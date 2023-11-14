import * as React from "react";
import { Stack } from "react-bootstrap";

export type FullScreenSectionProps = {
  isDarkBackground: boolean;
  backgroundColor: string;
  id: string;
  children: React.ReactNode;
  [key: string]: any;
};

export default function FullScreenSection(props: FullScreenSectionProps) {
  const { isDarkBackground, backgroundColor, id, children, ...otherProps } =
    props;
  const sectionStyle = {
    color: props.isDarkBackground ? "white" : "black",
    backgroundColor: props.backgroundColor,
  };

  return (
    <Stack
      id={id}
      color={isDarkBackground ? "white" : "black"}
      className="justify-content-center align-items-center"
      style={sectionStyle}
    >
      {children}
    </Stack>
  );
}
