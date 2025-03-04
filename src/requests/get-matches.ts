import axios, { AxiosResponse } from 'axios';
import { baseUrl } from '../constants/base-url.ts';
import { Data } from '../types/api.ts';

export const getMatches = async (): Promise<Data> => {
    const res: AxiosResponse<Data> = await axios.get(`${baseUrl}/fronttemp/`);
    if (res.data?.ok !== true) {
        throw new Error('Ошибка при загрузке матчей');
    }
    return res.data;
};

type RefreshMatchesProps = {
    setIsLoading: (value: boolean) => void;
    setData: (value: Data) => void;
    setIsError: (value: boolean) => void;
}

export const refreshMatches = async ({setIsLoading, setData, setIsError}: RefreshMatchesProps) => {
    setIsLoading(true);
    try {
        const res = await getMatches();
        setData(res);
    } catch {
        setIsError(true);
    } finally {
        setIsLoading(false);
    }
};