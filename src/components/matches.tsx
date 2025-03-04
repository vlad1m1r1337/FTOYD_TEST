import { useState } from 'react';
import { FC } from "react";
import { Data } from "../types/api.ts";
import { nanoid } from 'nanoid';
import PopupArrow from "./popup-arrow.tsx";
import {TeamStat} from "./team-stat.tsx";
import {LogoTeam} from "./logo-team.tsx";
import {ScoreStatus} from "./ScoreStatus.tsx";
import {IndividualStat} from "./individual-stat.tsx";

export const Matches: FC<{ data: Data }> = ({ data }) => {
    const [popups, setPopups] = useState<boolean[]>(Array(data?.data?.matches.length).fill(false));

    const togglePopup = (index: number) => {
        setPopups(prevPopups => {
            const newPopups = [...prevPopups];
            newPopups[index] = !newPopups[index];
            return newPopups;
        });
    };

    return (
        <div className="grid gap-3">
            {data?.data?.matches.map((item, index) => {
                return (
                    <div className="grid grid-cols-6 items-center min-h-[5.5rem] bg-item_color px-9 py-4" key={nanoid()}>
                        <LogoTeam homeTeam={item.homeTeam} className="col-start-1" />
                        <ScoreStatus item={item} />
                        <LogoTeam homeTeam={item.awayTeam} className="flex col-end-7 gap-3.5 justify-end items-center">
                            <PopupArrow togglePopup={() => togglePopup(index)} popup={popups[index]} />
                        </LogoTeam>
                        {popups[index] && (
                            <>
                                <IndividualStat item={item.homeTeam} className="col-start-1 col-end-4 mb-7 pr-10"/>
                                <IndividualStat item={item.awayTeam} className="col-start-4 col-end-7 mb-7"/>
                                <TeamStat item={item.homeTeam} className="col-start-1 col-end-4 mr-10"/>
                                <TeamStat item={item.awayTeam} className="col-start-4 col-end-7"/>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
