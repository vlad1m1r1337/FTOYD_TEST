import { FC, ReactNode } from "react";
import { Team } from "../types/api.ts";
import {cn} from "../lib/utils.ts";

interface ScoreStatusProps {
    homeTeam: Team;
    children?: ReactNode;
    className?: string;
}

export const LogoTeam: FC<ScoreStatusProps> = ({ homeTeam, children, className }) => {
    return (
        <div className={cn("flex gap-3.5 items-center", className)}>
            <img src="/public/icons/team_logo.svg" alt="team_logo" />
            <p className="text-white font-inter_semibold text-base">
                {homeTeam.name}
            </p>
            {children}
        </div>
    );
};