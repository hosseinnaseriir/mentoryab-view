import axios from "axios"
import {
    toast
} from "react-toastify";

const getFetch =  (validator, url ,headers={}) => {
    return new Promise(async(resolve , reject)=> {
        try {
            if (!validator) throw ["موارد خواسته شده را به درستی وارد کنید !"];
        let res = await axios.get(url, {
            headers
        });
        toast.success(res?.data?.message);
        resolve(res);
    } catch (ex) {
        let errors = ex?.response?.data?.errors || ex || [];
        errors.length && errors.map(error => toast.error(error));
        reject(ex);
    }
})
}

export default getFetch