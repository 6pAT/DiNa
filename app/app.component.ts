import {Component} from '@angular/core';

declare var ol: any;

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
    var map = new ol.Map({
      view: new ol.View({
        center: [0, 0],
        zoom: 1
      }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: 'map'
    });
  }

  onSubmit() {
    this.personsOnSelectRoom = this.personsOnRooms[+this.floor * 15 + this.room];
    (this.personsOnSelectRoom == 0) ? this.isBusy = false : this.isBusy = true;
    this.visibility = !this.visibility;
  }

  goBack() {
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
