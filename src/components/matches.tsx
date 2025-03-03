import {FC, useState} from "react";
import {MatchStatus} from "./match-status.tsx";
import {Data} from "../types/api.ts";
import { nanoid } from 'nanoid'
import PopupArrow from "./popup-arrow.tsx";

export const Matches:FC<{ data: Data }> = ({data}) => {
    console.log('Matches', data);
    return (
        <div className="grid gap-3">
            {data?.data?.matches.map((item) => {
                return (
                    <div className="grid grid-cols-3 items-center h-[5.5rem] bg-item_color px-9" key={nanoid()}>
                        <div className="flex gap-3.5 items-center">
                            <img src="/public/icons/team_logo.svg" alt="team_logo"/>
                            <p className="text-white font-inter_semibold text-base">
                                {item.homeTeam.name}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <p className="text-white font-inter_semibold text-xl">
                                {item.homeScore} : {item.awayScore}
                            </p>
                            <MatchStatus status={item.status} />
                        </div>
                        <div className="flex gap-3.5 items-center justify-end">
                            <p className="text-white font-inter_semibold text-base">
                                {item.awayTeam.name}
                            </p>
                            <img src="/public/icons/team_logo.svg" alt="team_logo"/>
                            <PopupArrow />
                        </div>
                        {/*<div className="col-span-3 border border-2">conent</div>*/}
                    </div>
                )
            })}
        </div>
    )
}