import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})
export class CultureComponent implements OnInit {
  culture: string = "Things get change in a more simplified and enjoyable shape when you start taking interest in them and we focus on building that interest of students through the “wifistudy” app in their respective goals.";
  clientName : string = 'Qualcomm';
  constructor() { }

  ngOnInit(): void {
  }

}
