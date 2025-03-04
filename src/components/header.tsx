import {RefreshButton} from "./refresh-button.tsx";
import {FC} from "react";

type HeaderProps = {
    isError: boolean;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    setIsError: (value: boolean) => void;
    setData: (value: any) => void;
}

export const Header: FC<HeaderProps> = ({isError, isLoading, setIsLoading, setIsError, setData}) => {
    return (
        <div className="flex justify-between items-center mb-5 ">
            <h1 className="font-tactic_sans text-white">Match Treker</h1>
            <div className="flex items-center gap-3">
                {isError && <div className="flex items-center bg-item_color h-11">
                    <img className="pr-2.5" src="/public/icons/error.svg" alt="error"/>
                    <p className="text-white font-inter_semibold text-lg">Ошибка: не удалось загрузить информацию</p>
                </div>}
                <RefreshButton loading={isLoading} setData={setData} setIsLoading={setIsLoading} setIsError={setIsError}/>
            </div>
        </div>
    )
}