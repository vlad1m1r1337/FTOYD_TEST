import {Team} from "../types/api.ts";
import {FC} from "react";
import {cn} from "../lib/utils.ts";

type TeamStatProps = {
    item: Team;
    className?: string;
}

export const TeamStat: FC<TeamStatProps> = ({item, className}) => {
    return (
        <div className={cn("flex justify-around col-start-4 col-end-7 bg-inner_item_color py-3.5 rounded-sm", className)}>
            <div className="inline-flex">
                <span className="text-white_text opacity-40 mr-2">Points:</span>
                <p className="text-white_text font-inter_semibold text-base">{item.points}</p>
            </div>
            <div className="inline-flex">
                <span className="text-white_text opacity-40 mr-2">Место:</span>
                <p className="text-white_text font-inter_semibold text-base">{item.place}</p>
            </div>
            <div className="inline-flex">
                <span className="text-white_text opacity-40 mr-2">Всего убийств:</span>
                <p className="text-white_text font-inter_semibold text-base">{item.total_kills}</p>
            </div>
        </div>
    )
}