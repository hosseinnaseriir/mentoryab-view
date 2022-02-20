import React from "react";
import theme from "../../theme/index";
import { useRouter } from "next/router";
import MuiButton from "@mui/material/Button";
import styled from "styled-components";

const Button = ({
  className,
  styles,
  onClick,
  type = "button",
  href = "#",
  disabled = true,
  children,
  endIcon,
  startIcon,
  parentClassName,
  variant,
  buttonProps,
}) => {
  const router = useRouter();
  const handleLink = (e) => {
    e.preventDefault();
    router.push(href);
  };

  switch (type) {
    case "submit" || "button":
      return (
        <StyledButton style={{ ...styles }} className={parentClassName}>
          <MuiButton
            {...buttonProps}
            disabled={!disabled}
            onClick={type !== "link" ? onClick : handleLink}
            className={className}
            endIcon={endIcon}
            startIcon={startIcon}
            type={type}
            variant={variant}
          >
            {children}
          </MuiButton>
        </StyledButton>
      );
      break;
    default:
      return (
        <StyledButton className={parentClassName}>
          <MuiButton
            disabled={!disabled}
            onClick={type !== "link" ? onClick : handleLink}
            className={className}
            endIcon={endIcon}
            startIcon={startIcon}
            type={type}
            variant={variant}
          >
            {children}
          </MuiButton>
        </StyledButton>
      );
      break;
  }
};

const StyledButton = styled.div`
  .MuiButton-contained {
    background-color: ${theme.colors.brand};
    color: ${theme.colors.white};
    border-radius: ${theme.rounded[2]};
    font-weight: bold;
    padding: ${theme.spacing[2]} ${theme.spacing[6]};
    max-height: 6rem;
    outline: none;
    border: 0.2rem solid ${theme.colors.brand};
    &:disabled {
      opacity: 0.5;
    }
  }

  .MuiButton-outlined {
    border-radius: ${theme.rounded[2]};
    font-weight: bold;
    padding: ${theme.spacing[2]} ${theme.spacing[6]};
    max-height: 5.2rem;
    outline: none;
    border: 0.2rem solid ${theme.colors.brand};
    &:disabled {
      opacity: 0.5;
    }
  }
`;

export default Button;
