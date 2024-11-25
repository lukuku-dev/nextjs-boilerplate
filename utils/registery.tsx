"use client";

import { useServerInsertedHTML } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import GlobalStyle from "styled/GlobalStyle";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();

    return <>{styles}</>;
  });

  // Calculating real VH and creating css variable
  useEffect(() => {
    function setRealViewportHeight() {
      const vh = window.innerHeight;
      document.documentElement.style.setProperty("--real-vh", `${vh}px`);
    }

    // Set the initial height
    setRealViewportHeight();

    // Update the height whenever the window is resized
    window.addEventListener("resize", setRealViewportHeight);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", setRealViewportHeight);
    };
  }, []); // The empty dependency array means this useEffect runs once after the component mounts and then runs

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <GlobalStyle />
      {children}
    </StyleSheetManager>
  );
}
