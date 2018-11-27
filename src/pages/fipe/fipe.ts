import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FipeServiceProvider } from './../../providers/fipe-service/fipe-service';


@Component({
  selector: 'page-fipe',
  templateUrl: 'fipe.html'
})
export class FipePage {
  marks: Object;
  vehicles: Object;
  Id: String;
  mark: Object;
  markId: String[];

  constructor(public navCtrl: NavController, private fipeServiceProvider: FipeServiceProvider) {

  }

  ionViewDidLoad() {
    this.SearchMark();
    
  }

  SearchMark() {
    this.fipeServiceProvider.Mark()
      .subscribe(
        marks => this.marks = marks);
  }

  SearchModel(): void {
    this.markId = this.mark.toString().split(' - ');

    this.fipeServiceProvider.Vehicle(this.markId[0])
      .subscribe(
        vehicles => this.vehicles = vehicles);
  }
}
