import axios from "axios"
import {
    toast
} from "react-toastify";

const getFetch = async (validator, url ,headers={}, callBack) => {
    try {
        if (!validator) throw ["موارد خواسته شده را به درستی وارد کنید !"];
        let res = await axios.get(url, {
            headers
          });
        toast.success(res?.data?.message);
        console.log(res)
        callBack(res);
    } catch (ex) {
        console.log(ex.response)
        let errors = ex?.response?.data?.errors || ex || [];
        errors.length && errors.map(error => toast.error(error));
        callBack(ex);
    }
}

export default getFetch