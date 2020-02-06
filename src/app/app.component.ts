import { Component, Inject, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { timer, Observable } from 'rxjs';
import { of } from 'rxjs';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  httpdata;
  data;
  json;
  heroes = [
    {"id": "1", "ten": "Jarvan IV", "kyNang": "Bão đạn", "mau": "8.7 (+0.7 mỗi cấp)", "anh": "jarvan"},
    {"id": "2", "ten": "Annie", "kyNang": "Kháng phép", "mau": "8.7 (+0.7 mỗi cấp)", "anh": "annie"},
    {"id": "3", "ten": "Aatrox", "kyNang": "Đường kiếm tuyệt diệt", "mau": "5.25 (+0.25 mỗi cấp)", "anh": "Aatrox"},
    {"id": "4", "ten": "Ahri", "kyNang": "Lửa hồ li,  Hôn gió", "mau": "7.1 (+0.6 mỗi cấp)", "anh": "Ahri"},
    {"id": "5", "ten": "Akali", "kyNang": "Phi đao năm cánh", "mau": "635 (+85 mỗi cấp)", "anh": "Akali"},
    {"id": "6", "ten": "Alistar", "kyNang": "Nghiền nát", "mau": "679.36 (+106 mỗi cấp)", "anh": "Alistar"},
    {"id": "7", "ten": "Ashe", "kyNang": "Băng tiễn, Chú tâm tiễn", "mau": "624(+85 mỗi cấp)", "anh": "Ashe"},
    {"id": "8", "ten": "Fizz", "kyNang": "Chiến binh lanh lợi, đâm lao", "mau": "8.7 (+0.7 mỗi cấp)", "anh": "Fizz"},
    {"id": "9", "ten": "Ngộ Không", "kyNang": "Cân đẩu vân", "mau": "6.65 (+0.65 mỗi cấp)", "anh": "MonkeyKing"},
    {"id": "10", "ten": "Olaf", "kyNang": "Phóng rìu, Điên cuồng", "mau": "8.041(+0.575 mỗi cấp)", "anh": "Olaf"},
  ];

  constructor (
      private http: HttpClient, 
      @Inject(LOCAL_STORAGE) 
      private storage: WebStorageService,
      private heroService: HeroService
    ) {
    const arr = [1,2,3];
    this.heroService;
    
  };

  ngAfterContentInit() {
    console.log(`alo ha`);
    this.save();
  }

  /**
   * Database
   */
  save(){
    this.saveInLocal('angular.heroes', JSON.stringify(this.heroes));
  };

  /**
   * Import database
   * @param key 
   * @param val 
   */
  saveInLocal(key, val): void {
    localStorage.setItem(key, val);
  }

  /**
   * Get data form local Storage
   * @param key 
   */
  getFromLocal(key): void {
    this.data[key]= localStorage.getItem(key);    
    console.log(this.data[key]);  
  }
  
  /**
   * Create new hero
   * 1. Auto increament for id 
   * 2. Push the formData into the list
   */
  insertEntity() {  
    this.json =  JSON.parse(localStorage.getItem('angular.heroes'));
    this.json.push({"id": "11", "ten": "HCM", "kyNang": "Giải phóng dân tộc", "mau": "8.041(+0.575 mỗi cấp)", "anh": "hcm"});
    localStorage.setItem('angular.heroes', JSON.stringify(this.json));
  }
  }
