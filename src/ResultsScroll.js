import React, {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ResultCard from "./ResultCard";
import {reject, resolve} from "q";
import {combinedStream} from "./Streams";
import {UriBuilder} from 'uribuilder';


export function ResultsScroll() {

    const BASE_URL = "http://localhost:8080/trips";
    const LIMIT_PER_API_CALL_PARAM = 2;

    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [dateParam, setDateParam] = useState(null);
    const [harbourParam, setHarbourParam] = useState(null);
    const [tripTypeParam, setTripTypeParam] = useState(null);

    const [apiUrl, setApiUrl] = useState(() => {
        let builder = UriBuilder.parse(BASE_URL);
        builder.query.limit = LIMIT_PER_API_CALL_PARAM;
        return builder.toString();
    });

    useEffect(() => {

        let stream = combinedStream.subscribe(data => {
            setDateParam(data[0]);
            setHarbourParam(data[1]);
            setTripTypeParam(data[2]);
            setApiUrl(() => {
                let builder = UriBuilder.parse(BASE_URL);
                builder.query.limit = LIMIT_PER_API_CALL_PARAM;
                builder.query.date = data[0];
                builder.query.harbour = data[1];
                builder.query.type = data[2];
                return builder.toString();
            });
            setItems([]);
            setHasMore(true);
        });

        return () => stream.unsubscribe();

    }, []);


    useEffect(() => {
        fetchData();
    }, [dateParam, harbourParam, tripTypeParam]);


    function fetchData() {

        console.log("Calling: " + apiUrl);

        fetch(apiUrl)
            .then(res => {
                return resolve(res.json());
            }, err => reject(err))
            .then(res => {
                if(res.next !== undefined) {
                    setApiUrl(res.next);
                } else {
                    setHasMore(false);
                }
                setItems(res.resources !== undefined ? items.concat(res.resources) : []);
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