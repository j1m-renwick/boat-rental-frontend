import {of} from "rxjs";
import {combineLatest} from "rxjs";
import {delay, map, concatMap, startWith, debounceTime} from 'rxjs/internal/operators';
import {fromEvent} from 'rxjs';
import {flatMap, tap, share} from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";
import {reject, resolve} from "q";

var masterRefreshStream;

export function getCloseButtonStream(rowId) {

    function createSuggestionStream(closeClickStream) {

        return combineLatest([closeClickStream, getRefreshButtonStream()])
            .pipe(
                map(mergedData => {
                    let refreshData = mergedData[1];
                    console.dir(mergedData[0]);
                    console.dir(refreshData);
                    console.log("REFRESH DATA USED BEGINS WITH ID: " + refreshData[0].login);
                    return refreshData[Math.floor(Math.random() * refreshData.length)];
                })
            );

    }

    function getRefreshButtonStream() {

        // only one refresh stream to be created at startup
        if(masterRefreshStream === undefined) {

            let refreshButton = document.getElementById('refreshBtn');
            let refreshStream = fromEvent(refreshButton, 'click')
                .pipe(
                    startWith('startup click')
                    // tap(ev => console.log("CLICKED REFRESH"))
                );

            masterRefreshStream = refreshStream.pipe(
                tap(ev => console.log("REFRESH STREAM")),
                map(() => {
                    var randomOffset = Math.floor(Math.random() * 500);
                    return 'https://api.github.com/users?since=' + randomOffset;
                }),
                debounceTime(500),
                flatMap(requestUrl =>
                    fromPromise(fetch(requestUrl).then(
                        res => resolve(res.json()),
                        err => reject(err)))),
                // THIS IS KEY!  without this, the stream will not be multicast to multiple click button subscribers
                share()
            );

        }
        return masterRefreshStream;
    }

    const closeButton = document.getElementById(rowId);
    var clickStream = fromEvent(closeButton, 'click')
        .pipe(
            startWith("startup click")
            // tap(ev => console.log("CLICKED SUGGESTION"))
        );

    return createSuggestionStream(clickStream);
}

export var observable = of('foo', 'bar', 'cee')
    .pipe(concatMap(item => of(item).pipe(delay(1000))));