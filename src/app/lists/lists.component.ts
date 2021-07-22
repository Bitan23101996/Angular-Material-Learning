import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.scss"],
})
export class ListsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  links: any = [
    { id: 1, name: "Dashboard" },
    { id: 2, name: "Thematic Area" },
    { id: 3, name: "Indicators" }
  ];

  notes: any = [
    { id: 1, name: "Angular", file: 15 },
    { id: 2, name: "React", file: 5 },
    { id: 3, name: "Vue", file: 25 }
  ];

  

  folders: any = [
    { id: 1, name: "Tutorials"},
    { id: 2, name: "Youtube Videos"},
    { id: 3, name: "PDF"}
  ];
}
