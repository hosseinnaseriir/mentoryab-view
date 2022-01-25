import React from 'react';
import styled from 'styled-components';
import { svgIcons } from '../../../assets/icons/svgIcons';
import Typography from "../../../components/common/Typography";
import theme from './../../../theme/index';

const AddAvatar = () => {
    return (
    <StyledAvatar className="d-flex justify-content-between align-items-center">
    <Typography className="my-5 py-5" component="h1">
      تکمیل ثبت نام
    </Typography>

    <div className='d-flex flex-column align-items-center justify-content-center'>
        <label htmlFor="avatar" className="d-flex justify-content-center align-items-center">
            <span>{svgIcons.avatar}</span>
            <input hidden id='avatar' type="file" className="form-control" />
        </label>
        <p className='pt-2'>عکس پروفایل</p>
    </div>
  </StyledAvatar> );
}
 
export default AddAvatar;

const StyledAvatar = styled.div`
label{
    height:13rem;
    width:13rem;
    border-radius:50%;
    border:5px dashed ${theme.colors.secondary}
}
p{
    color:${theme.colors.gray[1]}
}
`;