import React,{useState , useCallback} from 'react';
import styled from 'styled-components';
import { svgIcons } from '../../../assets/icons/svgIcons';
import Typography from "../../../components/common/Typography";
import theme from './../../../theme/index';
import Cropper from 'react-easy-crop'

const AddAvatar = () => {

    const [showCropper, setShowCropper] = useState(false);
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
  
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
      console.log(croppedArea, croppedAreaPixels)
    }, []);
    
    return (
    <StyledAvatar className="d-flex justify-content-between align-items-center">
    <Typography className="my-5 py-5" component="h1">
      تکمیل ثبت نام
    </Typography>

    <div className='d-flex flex-column align-items-center justify-content-center'>
        <label htmlFor="avatar" className="d-flex justify-content-center align-items-center">
            <span>{svgIcons.avatar}</span>
            <input hidden onChange={(e)=>console.log(e.file)} id='avatar' type="file" className="form-control" />
        </label>
        {
            showCropper && (

                <Cropper
                    image={'./vercel.svg'}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
                )
            }
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