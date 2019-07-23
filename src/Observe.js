import { of } from "rxjs";
import { delay, map, concatMap } from 'rxjs/internal/operators';
import { fromEvent } from 'rxjs';

var observable = of('foo','bar','cee')
    .pipe(concatMap( item => of(item).pipe ( delay( 1000 ) )));

// var observable = fromEvent(document, 'click')
//     .pipe(map(event => event.timeStamp));


export default observable;