import { useMatches} from "./requests/get-matches.ts";
import {Header} from "./components/header.tsx";
import {Matches} from "./components/matches.tsx";

function App() {
    const { data, isLoading, isError } = useMatches();
    return (
        <div className="px-11 flex flex-col py-14">
            <Header isError={isError} isLoading={isLoading}/>
            {data && <Matches data={data}/>}
        </div>
    )
}

export default App
