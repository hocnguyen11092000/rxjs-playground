import { Component, OnInit } from '@angular/core';
import { Item, Items } from 'src/models/item';
import {
  interval,
  tap,
  take,
  takeWhile,
  takeUntil,
  of,
  BehaviorSubject,
  Subject,
  timer,
  concat,
  debounce,
  delay,
} from 'rxjs';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  constructor() {}
  itemsModel = new Items();
  items: number = 5;
  complete = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    let time = 1000;

    // Array.from(new Array(this.items)).forEach((a: any, index: number) => {
    //   setTimeout(() => {
    //     const item = new Item();
    //     this.itemsModel.addItem(item);
    //     if (index === this.itemsModel.items.length) {
    //     }
    //   }, index * time);
    // });

    // setTimeout(() => {
    //   const item = new Item();
    //   this.itemsModel.addItem(item);
    // }, index * time);

    let count = 5;

    let sub = true;
    timer(5000)
      .pipe(
        tap(() => {
          sub = false;
        })
      )
      .subscribe();

    let a = interval(1000).pipe(
      tap(() => {
        const item = new Item();
        this.itemsModel.addItem(item);
      }),
      take(count)
    );

    let b = interval(1000).pipe(
      tap((val) => {
        console.log(val);
      }),
      takeWhile((val) => val <= 5)
    );

    interval(1000)
      .pipe(
        takeUntil(timer(5000)),
        tap((val) => {
          console.log('take while ' + val);
        })
      )
      .subscribe();
    interval(1000)
      .pipe(
        delay(5000),
        tap((val) => {
          console.log('delay ' + val);
        }),
        take(5)
      )
      .subscribe();

    concat(a, b).subscribe();
  }
}
