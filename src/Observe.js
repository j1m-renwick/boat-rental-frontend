// import {interval, of} from "rxjs";
// import {combineLatest} from "rxjs";
// import {delay, map, concatMap, startWith} from 'rxjs/internal/operators';
// import {fromEvent} from 'rxjs';
// import {flatMap, tap, share, throttle} from "rxjs/operators";
// import {fromPromise} from "rxjs/internal-compatibility";
// import {reject, resolve} from "q";
//
// var singletonApiStream;
//
// export function getSuggestionStream(rowId) {
//
//     function createSuggestionStream(suggestionButtonStream) {
//
//         return combineLatest([suggestionButtonStream, getApiStream()])
//             .pipe(
//                 map(mergedData => {
//                     let refreshData = mergedData[1];
//                     console.dir(refreshData);
//                     // console.log("REFRESH DATA USED BEGINS WITH ID: " + refreshData[0].login);
//                     return refreshData[Math.floor(Math.random() * refreshData.length)];
//                 })
//             );
//
//     }
//
//     function getApiStream() {
//
//         // only one refresh stream to be created at startup
//         if(singletonApiStream === undefined) {
//
//             let refreshButton = document.getElementById('refreshBtn');
//             let refreshButtonStream = fromEvent(refreshButton, 'click')
//                 .pipe(
//                     startWith('doing the thing!')
//                     // tap(ev => console.log("CLICKED REFRESH"))
//                 );
//
//             singletonApiStream = refreshButtonStream.pipe(
//                 throttle(val => interval(500)),
//                 tap(ev => console.log("REFRESH STREAM")),
//                 map(() => {
//                     var randomOffset = Math.floor(Math.random() * 500);
//                     return 'https://api.github.com/users?since=' + randomOffset;
//                 }),
//                 flatMap(requestUrl =>
//                     fromPromise(fetch(requestUrl).then(
//                         res => {
//                             if(res.status === 200) {
//                                 return resolve(res.json());
//                             } else {
//                                 // this scenario deals with error responses (e.g. 403s from the github API after too many calls in an hour)
//                                 return resolve(
//                                     [{
//                                         // awww yesh lovely hardcodinggggg
//                                         "login": "Encountered " + res.status + " error",
//                                         "avatar_url": "https://www.printsonwood.com/media/catalog/product/g/r/grumpy-cat-rainbow-square_PRINT-crop-1x1.jpg.thumbnail_7.jpg"
//                                     }])
//                             }
//                         },
//                         err => reject(err)))),
//                 // THIS IS KEY!  without this, the stream will not be multicast to multiple close button subscribers
//                 // (will be a cold stream instead a hot stream)
//                 // .. if you remove this, each close button will be associated with a separate API stream
//                 share()
//             );
//
//         }
//
//         return singletonApiStream;
//     }
//
//     const suggestionButton = document.getElementById(rowId);
//     var suggestionButtonStream = fromEvent(suggestionButton, 'click')
//         .pipe(
//             startWith("doing the thing!")
//             // tap(ev => console.log("CLICKED SUGGESTION"))
//         );
//
//     return createSuggestionStream(suggestionButtonStream);
// }
//
// export var observable = of('foo', 'bar', 'cee')
//     .pipe(concatMap(item => of(item).pipe(delay(1000))));