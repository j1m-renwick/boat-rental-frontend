import {merge, of} from "rxjs";
import {combineLatest} from "rxjs";
import {delay, map, concatMap, startWith, debounceTime} from 'rxjs/internal/operators';
import {fromEvent} from 'rxjs';
import {flatMap} from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";
import {reject, resolve} from "q";

var masterRefreshStream;

export function getCloseButtonStream(rowId) {

    function createSuggestionStream(closeClickStream) {

        var refreshStream = getRefreshButtonStream();

        return combineLatest([closeClickStream, refreshStream])
            .pipe(
                map(mergedData => {
                    let refreshData = mergedData[1];
                    console.dir(refreshData);
                    console.log("REFRESH DATA USED BEGINS WITH ID: " + refreshData[0].login);
                    return refreshData[Math.floor(Math.random() * refreshData.length)];
                })
            );

    }

    function getRefreshButtonStream() {

        if(masterRefreshStream === undefined) {

            console.log("INSTANTIATING>>>>");

            const refreshButton = document.getElementById('refreshBtn');
            const refreshStream = fromEvent(refreshButton, 'click').pipe(startWith('startup click'));

            var requestStream = refreshStream.pipe(
                map(() => {
                    var randomOffset = Math.floor(Math.random() * 500);
                    return 'https://api.github.com/users?since=' + randomOffset;
                }));

            masterRefreshStream = requestStream
                .pipe(debounceTime(500),
                    flatMap(requestUrl =>
                        fromPromise(fetch(requestUrl).then(
                            res => resolve(res.json()),
                            err => reject(err)))));

        }
        return masterRefreshStream;
    }

    const closeButton = document.getElementById(rowId);
    var clickStream = fromEvent(closeButton, 'click').pipe(startWith("startup click"));

    return createSuggestionStream(clickStream);
}

export var observable = of('foo', 'bar', 'cee')
    .pipe(concatMap(item => of(item).pipe(delay(1000))));