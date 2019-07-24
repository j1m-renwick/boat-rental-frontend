import {of} from "rxjs";
import {combineLatest} from "rxjs";
import {delay, map, concatMap, startWith, debounceTime} from 'rxjs/internal/operators';
import {fromEvent} from 'rxjs';
import {flatMap, tap, share} from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";
import {reject, resolve} from "q";

var singletonApiStream;

export function getSuggestionStream(rowId) {

    function createSuggestionStream(suggestionButtonStream) {

        return combineLatest([suggestionButtonStream, getApiStream()])
            .pipe(
                map(mergedData => {
                    let refreshData = mergedData[1];
                    // console.dir(refreshData);
                    // console.log("REFRESH DATA USED BEGINS WITH ID: " + refreshData[0].login);
                    return refreshData[Math.floor(Math.random() * refreshData.length)];
                })
            );

    }

    function getApiStream() {

        // only one refresh stream to be created at startup
        if(singletonApiStream === undefined) {

            let refreshButton = document.getElementById('refreshBtn');
            let refreshButtonStream = fromEvent(refreshButton, 'click')
                .pipe(
                    startWith('doing the thing!')
                    // tap(ev => console.log("CLICKED REFRESH"))
                );

            singletonApiStream = refreshButtonStream.pipe(
                // tap(ev => console.log("REFRESH STREAM")),
                debounceTime(500),
                map(() => {
                    var randomOffset = Math.floor(Math.random() * 500);
                    return 'https://api.github.com/users?since=' + randomOffset;
                }),
                flatMap(requestUrl =>
                    fromPromise(fetch(requestUrl).then(
                        res => resolve(res.json()),
                        err => reject(err)))),
                // THIS IS KEY!  without this, the stream will not be multicast to multiple close button subscribers
                // (and turn from a cold stream to a hot stream)
                // .. if you remove this, each close button will be associated with a separate API stream
                share()
            );

        }

        return singletonApiStream;
    }

    const suggestionButton = document.getElementById(rowId);
    var suggestionButtonStream = fromEvent(suggestionButton, 'click')
        .pipe(
            startWith("doing the thing!")
            // tap(ev => console.log("CLICKED SUGGESTION"))
        );

    return createSuggestionStream(suggestionButtonStream);
}

export var observable = of('foo', 'bar', 'cee')
    .pipe(concatMap(item => of(item).pipe(delay(1000))));