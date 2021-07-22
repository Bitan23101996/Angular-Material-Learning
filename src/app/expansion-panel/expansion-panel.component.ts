import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-expansion-panel",
  templateUrl: "./expansion-panel.component.html",
  styleUrls: ["./expansion-panel.component.scss"],
})
export class ExpansionPanelComponent implements OnInit {
  step: number = 0;
  constructor() {}

  ngOnInit() {}

  courseList: any = [
    {
      id: 1,
      title: "Angular CRUD Tutorials",
      duration: 1.5,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi quae suscipit maiores modi asperiores eius cumque ipsam inventore iusto nulla tempore ab et, consequuntur a ipsa accusantium perspiciatis veniam alias ratione molestias corporis sunt ad! Pariatur perspiciatis laborum ipsum quas quaerat inventore, ducimus quis molestiae eligendi laudantium modi incidunt eius omnis sunt nostrum, quisquam quo! Dicta, tempore, molestias officiis expedita cumque facere quos tempora explicabo possimus quidem nostrum dignissimos obcaecati ea fugit. Laborum, explicabo vel? Excepturi quos praesentium, accusantium error sequi facere rem, laborum hic officiis ipsum ab perferendis deleniti atque dolorem, in magni ipsam ullam cumque enim. Consequuntur.",
    },
    {
      id: 2,
      title: "Angular Material Tutorials",
      duration: 2,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi quae suscipit maiores modi asperiores eius cumque ipsam inventore iusto nulla tempore ab et, consequuntur a ipsa accusantium perspiciatis veniam alias ratione molestias corporis sunt ad! Pariatur perspiciatis laborum ipsum quas quaerat inventore, ducimus quis molestiae eligendi laudantium modi incidunt eius omnis sunt nostrum, quisquam quo! Dicta, tempore, molestias officiis expedita cumque facere quos tempora explicabo possimus quidem nostrum dignissimos obcaecati ea fugit. Laborum, explicabo vel? Excepturi quos praesentium, accusantium error sequi facere rem, laborum hic officiis ipsum ab perferendis deleniti atque dolorem, in magni ipsam ullam cumque enim. Consequuntur.",
    },
    {
      id: 3,
      title: "React Hook Tutorials",
      duration: 5,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi quae suscipit maiores modi asperiores eius cumque ipsam inventore iusto nulla tempore ab et, consequuntur a ipsa accusantium perspiciatis veniam alias ratione molestias corporis sunt ad! Pariatur perspiciatis laborum ipsum quas quaerat inventore, ducimus quis molestiae eligendi laudantium modi incidunt eius omnis sunt nostrum, quisquam quo! Dicta, tempore, molestias officiis expedita cumque facere quos tempora explicabo possimus quidem nostrum dignissimos obcaecati ea fugit. Laborum, explicabo vel? Excepturi quos praesentium, accusantium error sequi facere rem, laborum hic officiis ipsum ab perferendis deleniti atque dolorem, in magni ipsam ullam cumque enim. Consequuntur.",
    }
  ];

  setStep(index: number) {
    console.log(index)
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
}
