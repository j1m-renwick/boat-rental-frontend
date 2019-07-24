import {merge, of} from "rxjs";
import {combineLatest} from "rxjs";
import {delay, map, concatMap, startWith, debounceTime} from 'rxjs/internal/operators';
import {fromEvent} from 'rxjs';
import {flatMap} from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";
import {reject, resolve} from "q";

export function getCloseButtonStream(rowId) {

    const closeButton = document.getElementById(rowId);
    var clickStream = fromEvent(closeButton, 'click').pipe(startWith("startup click"));

    return createSuggestionStream(clickStream);

    function createSuggestionStream(closeClickStream) {

        var refreshStream = getRefreshButtonStream();

        return combineLatest([closeClickStream, refreshStream])
            .pipe(
                map(mergedData => {
                    let refreshData = mergedData[1];
                    console.log("REFRESH DATA USED:");
                    console.dir(refreshData);
                    return refreshData[Math.floor(Math.random() * refreshData.length)];
                }),
                    startWith({})
            );

    }


    function getRefreshButtonStream() {


        const refreshButton = document.getElementById('refreshBtn');
        var clickStream = fromEvent(refreshButton, 'click').pipe(startWith('startup click'));

        var requestStream = clickStream.pipe(
            map(() => {
                var randomOffset = Math.floor(Math.random() * 500);
                return 'https://api.github.com/users?since=' + randomOffset;
            }));

        return requestStream
            .pipe(debounceTime(500),
                flatMap(requestUrl =>
                    fromPromise(fetch(requestUrl).then(
                        res => resolve(res.json()),
                        err => reject(err)))));

    }
}

// function createSuggestionStream(closeClickStream) {
//
//     var refreshStream = getRefreshButtonStream();
//
//     return closeClickStream.pipe(
//         combineLatest(startWith("startup click"), refreshStream, function(click, listUsers) {
//             return listUsers[Math.floor(Math.random() * listUsers.length)];
//         }),
//         merge(
//             refreshStream.pipe(map(function() {
//                     return null;
//                 })
//             )),
//         startWith(null)
//     );
//
// }
//
// function getRefreshButtonStream() {
//
//
//     const refreshButton = document.getElementById('refreshBtn');
//     var clickStream = fromEvent(refreshButton, 'click');
//
//     var requestStream = clickStream.pipe(startWith('startup click'),
//         map(() => {
//             var randomOffset = Math.floor(Math.random() * 500);
//             return 'https://api.github.com/users?since=' + randomOffset;
//         }));
//
//     return requestStream
//         .pipe(debounceTime(500),
//             flatMap(requestUrl =>
//                 fromPromise(fetch(requestUrl).then(
//                     res => resolve(res.json()),
//                     err => reject(err)))));
//
// }


export var observable = of('foo', 'bar', 'cee')
    .pipe(concatMap(item => of(item).pipe(delay(1000))));

// var observable = fromEvent(document, 'click')
//     .pipe(map(event => event.timeStamp));


// const refreshButton = document.getElementById('refreshBtn');
// const closeButton = document.getElementById('closeBtn');
//
// const refreshClickStream = fromEvent(refreshButton, 'click');
//
// const closeClickStream = fromEvent(closeButton, 'click');
//
// const requestStream = refreshClickStream.pipe(startWith('startup click'),
//     map(() => {
//         var randomOffset = Math.floor(Math.random() * 500);
//         return 'https://api.github.com/users?since=' + randomOffset;
//     }));


// export var responseStream = requestStream
//     .pipe(debounceTime(500),
//         flatMap(requestUrl =>
//             fromPromise(fetch(requestUrl).then(
//                 res => resolve(res.json()),
//                 err => reject(err)))));

// var closeStream = createSuggestionStream(closeClickStream);
//
//
// function createSuggestionStream(closeClickStream) {
//
//     return closeClickStream.pipe(
//         combineLatest(startWith("startup click"), responseStream, function(click, listUsers) {
//             return listUsers[Math.floor(Math.random() * listUsers.length)];
//         }),
//         merge(
//             refreshClickStream.map(function() {
//                 return null;
//             })
//         ),
//         startWith(null)
//     );
// }