import {FC, useMemo} from "react";

export type MatchStatusProps = {
    status: 'Finished' | 'Scheduled' | 'Ongoing';
}

export const MatchStatus: FC<MatchStatusProps> = ({ status }) => {
    const background = useMemo(() => {
        switch (status) {
            case 'Ongoing':
                return 'bg-custom_green';
            case 'Finished':
                return 'bg-custom_red';
            case 'Scheduled':
                return 'bg-custom_orange';
            default:
                return 'bg-custom_green';
        }
    }, [status]);

    const text = useMemo(() => {
        switch (status) {
            case 'Ongoing':
                return 'Live';
            case 'Finished':
                return 'Finished';
            case 'Scheduled':
                return 'Match preparing';
            default:
                return 'Live';
        }
    }, [status])
    return (
        <div className={`${background} flex items-center justify-center max-w-fit h-7 py-1.5 px-2 h-8 rounded-sm select-none`}>
            <p className="font-inter_semibold text-white text-center items-center pointer-events-none">{text}</p>
        </div>
    );
}