import {useEffect} from "react";
import {getMatches} from "./requests/get-matches.ts";

function App() {
    useEffect(() => {
        const res = getMatches();
        console.log(res);
    }, []);
    const arr = [1,2,3,4,5];
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-yellow-500">Match Treker</h1>
                <div className="flex items-center">
                    <p className="text-yellow-500" >Ошибка: не удалось загрузить информацию</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                {arr.map((item) => {
                    return (
                        <div className="bg-gray-200">
                            {item}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default App
