import {combineLatest, Subject} from "rxjs";
import {startWith} from "rxjs/operators";

export var subjectMap = {
    "harbour": new Subject(),
    "tripType": new Subject(),
    "date": new Subject(),

};

let streamMap = {
    "harbour": subjectMap["harbour"].asObservable().pipe(startWith(null)),
    "tripType": subjectMap["tripType"].asObservable().pipe(startWith(null)),
    "date": subjectMap["date"].asObservable().pipe(startWith(null)),
};

export var combinedStream = combineLatest([streamMap["date"], streamMap["harbour"], streamMap["tripType"]]);
    // .pipe(
    //     map(mergedData => {
    //         console.dir(mergedData);
    //         return mergedData;
    //     }),
    //     share()
    // );

// trigger an api call each time one of the three streams fires
// export var apiStream = combinedStream.pipe(
//     flatMap(requestUrl =>
//                     fromPromise(fetch("http://demo4136230.mockable.io/helloWorld").then(
//                         res => resolve(res.json()),
//                         err => reject(err)))))
//     .subscribe(json => console.log(json));