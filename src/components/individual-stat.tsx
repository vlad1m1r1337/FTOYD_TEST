import {FC} from "react";
import {nanoid} from "nanoid";
import { Team } from "../types/api.ts";
import {cn} from "../lib/utils.ts";

export const IndividualStat: FC<{ item: Team, className?: string }> = ({ item, className }) => {
    return (
        <div className={cn("w-full mt-11 mb-7", className)}>
            <div className="flex large_screen:flex-row flex-col items-center gap-2">
                {item.players.map((player) => {
                    return (
                        <div className="flex items-center w-full bg-inner_item_color justify-between py-3.5 px-6 rounded-sm" key={nanoid()}>
                            <div className="flex gap-2 items-center">
                                <img className="w-9 h-9" src="/public/icons/avatar_global.svg" alt="avatar global"/>
                                <p className="text-white_text font-inter_semibold text-base">{player.username}</p>
                            </div>
                            <p className="text-white_text">Убийств: {player.kills}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}