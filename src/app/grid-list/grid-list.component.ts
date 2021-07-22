import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grid-list",
  templateUrl: "./grid-list.component.html",
  styleUrls: ["./grid-list.component.scss"],
})
export class GridListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  gridList: any = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
