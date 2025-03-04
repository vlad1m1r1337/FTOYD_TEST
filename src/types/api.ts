type Player = {
    kills: number;
    username: string;
};

export type Team = {
    name: string;
    place: number;
    players: Player[];
    points: number;
    total_kills: number;
};

export type Match = {
    awayScore: number;
    awayTeam: Team;
    homeScore: number;
    homeTeam: Team;
    status: "Finished" | "Ongoing" | "Scheduled";
    time: string;
    title: string;
};

export type Data = {
    data: {
        matches: Match[];
    } | undefined;
    ok: boolean;
};