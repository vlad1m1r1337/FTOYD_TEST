import {MatchStatus} from "./match-status.tsx";
import {FC} from "react";
import {Match} from "../types/api.ts";

export const ScoreStatus: FC<{ item: Match }> = ({ item }) => {
    return (
        <div className="flex col-start-3 col-end-5 justify-center content-center justify-self-center place-self-center items-center flex-col gap-1">
            <p className="text-white font-inter_semibold text-xl">
                {item.homeScore} : {item.awayScore}
            </p>
            <MatchStatus status={item.status} />
        </div>
    );
}