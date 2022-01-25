import React from "react";
import styled from "styled-components";
import theme from "./../../theme/index";

const Typography = ({ component, className, children }) => {
  switch (component) {
    case "h1":
      return (
        <h1>
          <StyledHeading className={className}>{children}</StyledHeading>
        </h1>
      );
      break;
    case "h2":
      return (
        <h2>
          <StyledHeading className={className}>{children}</StyledHeading>
        </h2>
      );
      break;
    case "h3":
      return (
        <h3>
          <StyledHeading className={className}>{children}</StyledHeading>
        </h3>
      );
      break;
    case "h4":
      return (
        <h4>
          <StyledHeading className={className}>{children}</StyledHeading>
        </h4>
      );
      break;
    case "h5":
      return (
        <h5>
          <StyledHeading className={className}>{children}</StyledHeading>
        </h5>
      );
      break;
    case "h6":
      return (
        <h5>
          <StyledHeading className={className}>{children}</StyledHeading>
        </h5>
      );
      break;
    default:
      return (
        <h1>
          <StyledHeading className={className}>{children}</StyledHeading>
        </h1>
      );
      break;
  }
};

const StyledHeading = styled.div`
  color: ${theme.colors.black};
  font-size: ${theme.typography.h1};
`;

export default Typography;
