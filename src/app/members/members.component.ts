import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mm-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = "https://mahoumorning.carrd.co";
  }

}
