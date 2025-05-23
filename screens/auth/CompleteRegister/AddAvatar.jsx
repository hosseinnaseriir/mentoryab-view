import React, { useState } from "react";
import styled from "styled-components";
import { svgIcons } from "../../../assets/icons/svgIcons";
import theme from "./../../../theme/index";
import EditAvatar from "./../../../components/common/EditAvatar/index";
import { Typography } from "@mui/material";

const AddAvatar = ({ setAvatar, avatar, completeProfile = true }) => {
  const [showCropper, setShowCropper] = useState(true);

  return (
    <StyledAvatar
      className={`d-flex ${
        completeProfile && "flex-column"
      } justify-content-between align-items-center`}
    >
      <Typography className="my-5 py-5 fs-44" variant="h1">
        تکمیل ثبت نام
      </Typography>

      {showCropper && <EditAvatar avatar={avatar} setAvatar={setAvatar} />}
    </StyledAvatar>
  );
};

export default AddAvatar;

const StyledAvatar = styled.div`
  p {
    color: ${theme.colors.gray[1]};
  }
`;
