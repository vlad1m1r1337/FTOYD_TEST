import {RefreshButton} from "./refresh-button.tsx";
import {FC} from "react";
import React from 'react';

type HeaderProps = {
    isError: boolean;
    isLoading: boolean;
}

export const Header: FC<HeaderProps> = ({isError, isLoading}) => {
    return (
        <div className="flex justify-between items-center mb-5">
            <h1 className="font-tactic_sans text-white">Match Treker</h1>
            <div className="flex items-center">
                {isError && <p className="text-yellow-500">Ошибка: не удалось загрузить информацию</p>}
                <RefreshButton loading={isLoading}/>
            </div>
        </div>
    )
}