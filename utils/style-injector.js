import React from "react";

export const styleInjector = (className, children) => {
  const StyledChildren = () =>
    React.Children.map(children, child =>
      React.cloneElement(child, {
        className: `${child.props.className} ${className}`
      })
    );

  return <StyledChildren />;
};