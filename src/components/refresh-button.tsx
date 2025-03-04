import {refreshMatches} from "../requests/get-matches.ts";

type RefreshButtonProps = {
    loading: boolean;
    setIsLoading: (value: boolean) => void;
    setData: (value: any) => void;
    setIsError: (value: boolean) => void;
}

export const RefreshButton = ({ loading, setIsLoading, setData, setIsError } : RefreshButtonProps) => {
    return (
        <button onClick={() => refreshMatches({setIsLoading, setData, setIsError})} disabled={loading} className={`flex ${!loading && 'justify-center'} h-11 justify-center gap-2.5 w-52 bg-custom_red hover:bg-custom_red_hover active:bg-custom_red_active py-2 px-10 rounded`}>
            <p className="text-white font-inter_semibold text-lg">Обновить</p>
            {loading && <img className="animate-rotate" src="/public/icons/refresh.svg" alt="refresh" />}
        </button>
    );
};