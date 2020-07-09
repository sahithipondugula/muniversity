import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  intro: string = "Things get change in a more simplified and enjoyable shape when you start taking interest in them and we focus on building that interest of students through the “wifistudy” app in their respective goals.";
  clientName : string = 'Qualcomm';
  constructor() { }

  ngOnInit(): void {
  }

}
