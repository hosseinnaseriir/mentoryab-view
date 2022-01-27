import {
    toast
} from "react-toastify";
import axios from "axios";

const postFetch =  (validator, url, data ,headers={}) => {

    return new Promise(async(resolve , reject)=>{

        try {
            if (!validator) throw ["موارد خواسته شده را به درستی وارد کنید !"];
            let res = await axios.post(url,  data , {
                headers
            });
            toast.success(res?.data?.message);
            console.log(res)
            resolve(res);
        } catch (ex) {
            console.log(ex)
            let errors = ex?.response?.data?.errors || ex || [];
            errors.length && errors.map(error => toast.error(error));
            reject(ex);
        }
    })
}

export default postFetch