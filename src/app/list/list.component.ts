import { Component, OnInit } from '@angular/core';
import { TUONG } from '../danhSachTuong';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }
  danhSachTuongLienMinh;
  selectedTuong : ApiModel.Tuong;
  ngOnInit() {
    this.getEntities();
  }

  getEntities() {
    this.danhSachTuongLienMinh = JSON.parse(localStorage.getItem('angular.heroes'));
    return this.danhSachTuongLienMinh;
    // if(jsonValue) {
    //   return JSON.parse(jsonValue);
    // }
  }

  onSelect(tuong: ApiModel.Tuong): void {
    this.selectedTuong = tuong;
  }

  add(ten: string): void {
    ten = ten.trim();
    // this.heroService.themTuong(ten);
  }

}
