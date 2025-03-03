import { useQuery } from '@tanstack/react-query';
import axios, {AxiosResponse} from 'axios';
import {baseUrl} from "../constants/base-url.ts";
import {Data} from "../types/api.ts";

export const getMatches = async (): Promise<Data> => {
    const res: AxiosResponse<Data> = await axios.get(`${baseUrl}/fronttemp/`);
    if (res.data?.ok !== true) {
        throw new Error('Ошибка при загрузке матчей');
    }
    return res.data;
};

export const useMatches = () => {
    return useQuery({
        queryKey: ['matches'],
        queryFn: getMatches,
    });
};