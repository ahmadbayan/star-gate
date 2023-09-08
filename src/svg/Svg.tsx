import React from "react";
import { cn } from "../lib/utils";

export default function Svg({ children, classes, fill }: any) {
  const enhancedChildren = React.cloneElement(children, {
    classes: cn(children.props.classes, classes),
    fill: cn(children.props.fill, fill),
  });

  return <>{enhancedChildren}</>;
}
