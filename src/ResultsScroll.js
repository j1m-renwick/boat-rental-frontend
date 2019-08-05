import React, {useState, useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ResultCard from "./ResultCard";
import {response} from "./dummyResponse";
import {reject, resolve} from "q";


export function ResultsScroll() {

    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [apiUrl, setApiUrl] = useState("http://localhost:8080/trips?limit=2");

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {

        console.log("Calling: " + apiUrl);

        fetch(apiUrl)
            .then(res => {
                return resolve(res.json());
            }, err => reject(err))
            .then(res => {
                if (res.next !== undefined) {
                    setApiUrl(res.next);
                } else {
                    setHasMore(false);
                }
                setItems(items.concat(res.resources));
            });
    };

    return (

        <div>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={hasMore}
                height={400}
                loader={<h3>LOADING...</h3>}
                endMessage={
                    <p style={{textAlign: "center"}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }>{items.map((i, index) => (
                <div key={index}>
                    <ResultCard index={index} data={i}/>
                    <br/>
                </div>
            ))}
            </InfiniteScroll>
        </div>

    )
}