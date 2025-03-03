import {FC} from "react";

type RefreshButtonProps = {
    loading: boolean;
}

export const RefreshButton: FC<RefreshButtonProps> = ({loading}) => {
    return (
        <button onClick={() => console.log('click')} disabled={loading && true} className={`flex ${!loading &&'justify-center'} justify-center gap-2.5 w-52 bg-custom_red hover:bg-custom_red_hover active:bg-custom_red_active py-2 px-10 rounded`}>
            <p className="text-white font-inter_semibold text-lg">Обновить</p>
            {loading && <img className="animate-turn" src="/public/icons/refresh.svg" alt="refresh"/>}
        </button>
    );
}