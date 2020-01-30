import { Component, OnInit } from '@angular/core';
import { Tuong } from '../hero';
import { TUONG } from '../danhSachTuong';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  constructor(
    private heroService: HeroService,
  ) { }
  json;
  danhSachKyNang = ['Bão đạn', 'Ám khí', 'Lời nguyền tử vong', 'Hôn gió', 'Mê hoặc', 'Cái nhìn hóa đá'];
  tuongForm: FormGroup;

  tuong = {id: 12, ten: 'Cassiopeia', kyNang: this.danhSachKyNang[6], mau: '6 (+0.5 mỗi cấp) ', anh: 'Cassiopeia'};

  ngOnInit(): void {
    this.tuongForm = new FormGroup({
      'id' : new FormControl(this.tuong.id),
      'ten' : new FormControl(this.tuong.ten),
      'kyNang': new FormControl(this.tuong.kyNang),
      'mau' : new FormControl(this.tuong.mau),
      'anh' : new FormControl(this.tuong.anh)
    }); 
  }

  danhSachTuong = TUONG;

  tuong1 = this.danhSachTuong[0];
  
  get ten() { return this.tuongForm.get('ten'); }

  get kyNang() { return this.tuongForm.get('kyNang'); }

  get mau() { return this.tuongForm.get('mau'); }

  get anh() { return this.tuongForm.get('anh'); }

  model = new Tuong(1, 'Valhein', this.danhSachKyNang[0], 'Veera');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model)};

  add(val) {  
    this.heroService.addTuong(val);
  }

}
