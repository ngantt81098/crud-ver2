import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
@Component({
  selector: 'app-reactive-favorite-color',
  templateUrl: './reactive-favorite-color.component.html',
  styleUrls: ['./reactive-favorite-color.component.css']
})
export class ReactiveFavoriteColorComponent implements OnInit {
  favoriteColor = '';
  danhSachKyNang = ['Bão đạn', 'Ám khí', 'Lời nguyền tử vong', 'Hôn gió', 'Mê hoặc']
  tuong = {ten: 'Vanheil', kyNang: this.danhSachKyNang[0], mau: '120ml'};
  
  heroForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      'ten' : new FormControl(this.tuong.ten, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]),
      'kyNang': new FormControl(this.tuong.kyNang, Validators.required),
      'mau': new FormControl(this.tuong.mau, Validators.required)
      });
  }
  forbiddenName = `bob`;
  get ten() { return this.heroForm.get('ten'); }

  get kyNang() { return this.heroForm.get('kyNang'); }

  get mau() { return this.heroForm.get('mau'); }

  get diagnostic() { return JSON.stringify(this.tuong)};
}
