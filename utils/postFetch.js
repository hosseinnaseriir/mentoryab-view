import {
    toast
} from "react-toastify";
import axios from "axios";

const postFetch = async (validator, url, data ,headers={}, callBack) => {
    try {
        if (!validator) throw ["موارد خواسته شده را به درستی وارد کنید !"];
        let res = await axios.post(url,  data , {
            headers
          });
        toast.success(res?.data?.message);
        callBack(res);
    } catch (ex) {
        console.log(ex)
        let errors = ex?.response?.data?.errors || ex || [];
        errors.length && errors.map(error => toast.error(error));
        callBack(ex);
    }
}

export default postFetch