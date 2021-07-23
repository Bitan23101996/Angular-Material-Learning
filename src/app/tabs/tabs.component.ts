import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
})
export class TabsComponent implements OnInit {
  contentList: any = [
    {
      id: 1,
      title: "Angular",
      desc: "Angular Content",
      color: "primary",
    },
    {
      id: 2,
      title: "React",
      desc: "React Content",
      color: "accent",
    },
    {
      id: 3,
      title: "Vue",
      desc: "Vue Content",
      color: "warn",
    },
  ];
  constructor() {}

  ngOnInit() {}

  logSelectedEvent(index: number) {
    console.log(index);
  }

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
