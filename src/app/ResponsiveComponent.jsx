"use client";

import React from "react";
import useScreenSize from "../app/components/hooks/useScreenSize.jsx";

const ResponsiveComponent = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;