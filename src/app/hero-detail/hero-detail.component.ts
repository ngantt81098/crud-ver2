import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  tuong : ApiModel.Tuong;
  constructor(
    private route: ActivatedRoute, 
    private heroService: HeroService
  ) { }

  danhSachKyNang = ['Bão đạn', 'Ám khí', 'Lời nguyền tử vong', 'Hôn gió', 'Mê hoặc', 'Cái nhìn hóa đá'];
  tuongForm: FormGroup;
  ngOnInit() {   
    return this.getTuong();

  }

  /**
   * Get @param: id 
   * of hero for view detail information of a hero
   */
  getTuong(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.tuong = this.heroService.getTuong(id);
    this.tuongForm = new FormGroup({
      'id' : new FormControl(this.tuong.id),
      'ten' : new FormControl(this.tuong.ten),
      'kyNang': new FormControl(this.tuong.kyNang),
      'mau' : new FormControl(this.tuong.mau),
      'anh' : new FormControl(this.tuong.anh)
    });
    return this.tuong;
  }

  updateTuong(value){
    const id = +this.route.snapshot.paramMap.get('id');    
    return this.heroService.updateTuong(value);
  }

  deleteTuong(value){
    this.heroService.deleteTuong(value);
  }
}
