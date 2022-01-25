import muiStyles from "@mui/system/styled";
import theme from './../../../theme/index';
import Select  from '@mui/material/Select';

export const StyledSelect = muiStyles(Select)({
    width: "100%",
    marginTop: `${theme.spacing[4]}`,
    border: `0.2rem solid ${theme.colors.gray[0]}`,
    borderRadius: `${theme.rounded[2]}`,
    // paddingRight: "4.8rem",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none!important",
    },
    "& .MuiInputBase-input":{
      paddingRight:`6.8rem!important`
    }
  });