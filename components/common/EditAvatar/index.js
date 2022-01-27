import { useCallback, useContext, useEffect, useState } from "react";
import Cropper from "react-easy-crop";
import styled from "styled-components";
import getCroppedImg from "./getCroppedImg";
import Button from "../Button";
import { Contexts } from "../../../contexts/app";
import { svgIcons } from './../../../assets/icons/svgIcons';
import { Box } from '@mui/material';
import theme from './../../../theme/index';

const EditAvatar = ({ imgSrc , setAvatar }) => {

    const { croppedImage, setCroppedImage, setImgeSorce } = useContext(Contexts);
    //react essy crop 
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1);
    const [aspect, setaspect] = useState(1);
    const [imageSrc, setImageSrc] = useState('');
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    // const [croppedImage, setCroppedImage] = useState(null);
    const [showCropper, setshowCropper] = useState(false);
    const [initialCroppedAreaPixels, setInitialCroppedAreaPixels] = useState(
        undefined
    )
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        const croppedAreaPixels = JSON.parse(
            window.localStorage.getItem('croppedAreaPixels')
        )
        setInitialCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const showCroppedImage = useCallback(async (e) => {
        e.preventDefault();
        try {
            const {url , file} = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation
            );

            setImgeSorce(imageSrc)
            console.log('donee', { file , url })
            setCroppedImage(url)
            setshowCropper(!showCropper);
            setAvatar(file)

        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels, imageSrc])



    function readFile(file) {
        return new Promise((resolve) => {
            const reader = new FileReader()
            reader.addEventListener('load', () => resolve(reader.result), false)
            reader.readAsDataURL(file)
        })
    }

    const onFileChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            let imageDataUrl = await readFile(file)
            setImageSrc(imageDataUrl);
        }
        setshowCropper(!showCropper)
    }

    return (
        <div>
            <StyledCropper
                className={` ${showCropper ? 'd-block' : 'd-none'}`}
                style={{ zIndex: 999 }}
            >
                <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={aspect}
                    onZoomChange={setZoom}
                    zoomWithScroll={true}
                    cropShape="round"
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    initialCroppedAreaPixels={initialCroppedAreaPixels}
                />

                <Button
                    backgroundColor="var(--white)"
                    color="var(--primary)"
                    border="none"
                    onClick={(e) => showCroppedImage(e)}
                >
                    بریدن
                </Button>
            </StyledCropper>


            <StyledCustomFile
                className={`${showCropper ? 'd-none' : 'd-block'}`}
            >
                   
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <>
                        <Box component='label' sx={{
                            height:'13rem',
                            width:'13rem',
                            borderRadius:'50%',
                            border:`5px dashed ${theme.colors.secondary}`,
                            borderStyle:croppedImage ? 'solid' : 'dashed'
                        }} htmlFor="avatar" className="d-flex justify-content-center align-items-center">
                            <input hidden onChange={onFileChange} accept="image/*" id='avatar' type="file" className="form-control" />
                        {
                            !croppedImage ?(
                                <>
                                <span>{svgIcons.avatar}</span>
                                </>
                                ):
                                (
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        margin: '0 auto',
                                        border: '1px solid var(--primary)'
                                    }}>
                                    <img
                                        src={croppedImage || imgSrc}
                                        style={{
                                            objectFit: 'cover',
                                            maxWidth: '100%',
                                            minWidth: '100%',
                                        }}
                                    />
                            </div>

                            )
                            }
                        </Box>
                        </>
                            {showCropper && (<EditAvatar/>)}
                            <p className='pt-2'>عکس پروفایل</p>
                   </div>
    
            </StyledCustomFile>

        </div>
    );
}

const StyledCropper = styled.div`
.reactEasyCrop_Container{
    z-index:2;
}
button{
    position: absolute;
    z-index:5;
    top:0;
    right:50%;
    transform:translateX(50%);
    margin:0 auto;
}
`
const StyledCustomFile = styled.div`
 width: 10rem;
 height: 10rem;
position: relative;
margin:0 auto;
margin-bottom:2rem;
.file-input{
    position:absolute;
    background-color:red;
    width:4rem;
    height:4rem;
    border-radius:50%;
    bottom:0;
    right:0;

    input{
        opacity:0;
        z-index:3;
        width:5rem;
    }
    svg{
        position: absolute;
        bottom:1rem;
        right:1rem;
        pointer-events:none;
    }
    
}
`

export default EditAvatar;