import React from "react";
import { joinClassNames } from "@/utils/join-class-names";

export const styleInjector = (className, children) => {
  const StyledChildren = () =>
    React.Children.map(children, child =>
      React.cloneElement(child, {
        className: joinClassNames(child.props.className, className)
      })
    );

  return <StyledChildren />;
};