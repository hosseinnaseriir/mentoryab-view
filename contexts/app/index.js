import React from 'react';
import {
    useState
} from 'react';


export const Contexts = React.createContext({
    croppedImage:'',
    setCroppedImage:'',
    setimgeSorce:()=>{}
});


export const ContextsProvider = ({children}) => {

    const [croppedImage, setCroppedImage] = useState();
    const [imgeSorce, setImgeSorce] = useState();

    return ( <Contexts.Provider value={
            {
                croppedImage,
                setCroppedImage,
                setImgeSorce
            }
        } >
            {children}
        </Contexts.Provider>
    )
}