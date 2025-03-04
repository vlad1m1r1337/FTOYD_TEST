import { refreshMatches} from "./requests/get-matches.ts";
import {Header} from "./components/header.tsx";
import {Matches} from "./components/matches.tsx";
import {useEffect, useState} from 'react';
import {Data} from "./types/api.ts";

function App() {
    const [data, setData] = useState<Data | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        refreshMatches({setIsLoading, setData, setIsError});
    }, []);

    return (
        <div className="px-11 flex flex-col py-14">
            <Header isError={isError} isLoading={isLoading} setIsLoading={setIsLoading} setData={setData} setIsError={setIsError}/>
            {data && <Matches data={data}/>}
        </div>
    )
}

export default App
