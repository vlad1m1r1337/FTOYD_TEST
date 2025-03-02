import axios from "axios";
import {baseUrl} from "../constants/base-url.ts";

export const getMatches = async () => {
    const res = await axios.get(`${baseUrl}/fronttemp/`);
    return res.data;
}