import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  floor = '1';
  room: number = 0;
  visibility: boolean = true;
  isBusy: boolean = true;
  personsOnRooms: any[] = [];
  personsOnSelectRoom: number;

  constructor() {
  }

  onSubmit() {
    this.personsOnSelectRoom = this.personsOnRooms[+this.floor  * 15 + this.room];
    (this.personsOnSelectRoom == 0) ? this.isBusy = false : this.isBusy = true;
    this.visibility = !this.visibility;
  }

  goBack(){
    this.visibility = !this.visibility;
  }

  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 15; j++) {
        this.personsOnRooms.unshift(Math.floor(Math.random() * 10));
      }
    }
  }
}
