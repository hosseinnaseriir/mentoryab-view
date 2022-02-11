import React from "react";
import styled from "styled-components";
import { svgIcons } from "../../../assets/icons/svgIcons";
import MenuItem from "@mui/material/MenuItem";
import theme from "../../../theme/index";
import { Autocomplete, Box, InputLabel, OutlinedInput, Stack } from "@mui/material";
import { StyledSelect } from './StyledSelect';
import { StyledCheckBox } from './StyledCheckBox';
import { StyledLabel } from './StyledLabel';


const TextField = ({
  component = "input",
  children,
  className,
  type = "text",
  value = "",
  setValue = () => {},
  placeholder = "",
  label = "",
  icon = false,
  endIcon = false,
  checked,
  autoComplete = "off",
  onChange = () => {},
  name = "sd",
  onBlur = () => {},
  validationMessage = "",
  options=[],
  styles={},
  inputId,
 
}) => {

  // create ID for input and label
  let id = inputId || ("" + (placeholder || label) + type).replace(/\s/g, "");

  const [showSelectLabel, setShowSelectLabel] = React.useState(false);

  switch (component) {
    case "text":
      return (
        <StyledFormControl>
          <StyledLabel
            className={
              className + " " + (validationMessage ? "input-danger" : "")
            }
            htmlFor={id}
          >
            {console.log(icon)}
            {icon && <span>{icon}</span>}
            <input
              name={name}
              autoComplete={autoComplete}
              placeholder={placeholder}
              id={id}
              type={type}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            {console.log(endIcon)}
            {endIcon && <span>{endIcon}</span>}
            {validationMessage}
          </StyledLabel>
        </StyledFormControl>
      );
      break;

    case "file":
      return (
        <StyledFormControl className="position-relative">
               <InputLabel
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: 'translateY(-50%)',
                  right: "6.8rem",
                  pointerEvents:'none'
                }}
      
          >
            {!showSelectLabel && placeholder}
          </InputLabel>
       
          <StyledLabel
            className={
              className + " " + (validationMessage ? "input-danger" : "")
            }
            htmlFor={id}
          > 
            {icon && <span>{icon}</span>}
            <input
            hidden={true}
              name={name}
              autoComplete={autoComplete}
              placeholder={placeholder}
              id={id}
              type={type || "file"}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            {endIcon && <span>{endIcon}</span>}
            {/* {validationMessage} */}
          </StyledLabel>
        </StyledFormControl>
      );
      break;

    case "checkbox":
      return (
        <StyledFormControl>
          <StyledCheckBox
            className={
              className + " " + (validationMessage ? "input-danger" : "")
            }
            htmlFor={id}
          >
            <div className="checkbox">
              <input
                name={name}
                placeholder={placeholder}
                id={id}
                type={type}
                value={value}
                checked={checked}
                onChange={onChange}
                onBlur={onBlur}
              />
              <span>{svgIcons.tick}</span>
            </div>
            <span className="label">{label}</span>
            {validationMessage}
          </StyledCheckBox>
        </StyledFormControl>
      );
      break;
      
    case "select":
      return (
        <Box position="relative">
          <InputLabel
            sx={{
              position: "absolute",
              top: "50%",
              right: "6.8rem",
 
            }}
            id={id}
          >
            {!showSelectLabel && !value && placeholder}
          </InputLabel>
          <StyledSelect
            IconComponent={() => {
              if (endIcon)
                return (
                  <>
                    <Box
                      sx={{
                        padding: "0.5rem 0 0 1.6rem",
                        position: "absolute",
                        left: 0,
                        pointerEvents: "none",
                      }}
                    >
                      {endIcon}
                    </Box>
                    {icon && (
                      <Box
                        sx={{
                          padding: "0.5rem 0 0 1.6rem",
                          position: "absolute",
                          right: "2.5rem",
                          pointerEvents: "none",
                        }}
                      >
                        {icon}
                      </Box>
                    )}
                  </>
                );
            }}
            labelId={id}
            id={id}
            value={value}
            onChange={(e) => {
              if (e.target.value) setShowSelectLabel(e.target.value);
              onChange(e);
            }}
          >
            <MenuItem disabled selected>
              {placeholder}
            </MenuItem>
            {options.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </StyledSelect>
        </Box>
      );
      break;

    case "autoComplete" : 
    return(
      <StyledFormControl>
          <StyledLabel  className={className + " " + (validationMessage ? "input-danger" : "")}
            htmlFor={id}>
                 {icon && <span>{icon}</span>}
                  <Autocomplete
                    sx={{
                      display: 'block',
                      width: '100%',
                      height:'100%',
                      '& div':{
                        height:'100%'
                      },
                      '& input': {
                      paddingRight:'1.9rem',
                      fontSize:theme.typography.h6,
                      width: '100%',
                      height:'100%',
                      outline:'none',
                      border:'none'
                      },
                    }}
                    id={id}
                    options={options}
                    onChange={e => e.target.value}
                    renderInput={(params) => (
                      <div ref={params.InputProps.ref}>
                          <input
                            onBlur={onBlur}
                            type={type}
                            value={value}
                            autoComplete='off'
                            name={name}
                            autoComplete={autoComplete}
                            placeholder={placeholder}
                            type="text"
                            {...params.inputProps} />
                      </div>
                    )}
                  />
                  {endIcon && <span>{endIcon}</span>}
                  {/* {validationMessage} */}
                </StyledLabel>
                
      </StyledFormControl>
                
                )
      break;

    default:
      return (
        <StyledFormControl>
          <StyledLabel
            className={
              className + " " + (validationMessage ? "input-danger" : "")
            }
            htmlFor={id}
          >
            {icon && <span>{icon}</span>}
            {children ? children :(
              <input
                name={name}
                autoComplete={autoComplete}
                placeholder={placeholder}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
            {endIcon && <span>{endIcon}</span>}
          </StyledLabel>
        </StyledFormControl>
      );
      break;
  }
};

const StyledFormControl = styled.div`
  .input-danger {
    border-color: ${theme.colors.danger};
    input::placeholder {
      color: ${theme.colors.danger};
    }
    path {
      fill: ${theme.colors.danger};
    }
  }
`;



export default TextField;
