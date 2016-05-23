import { Observable } from "rxjs"

// create an observable sequence of 5 integers, starting from 1
var source = Observable.range(1, 5);

// Prints out each item
var subscription = source.subscribe(
    x => console.log('onNext: %s', x),
    e => console.log('onError: %s', e),
    () => console.log('onCompleted'));
