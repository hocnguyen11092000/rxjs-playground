import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/models/item';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
})
export class FormItemComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }

  onSubmit(f: NgForm) {}
}
