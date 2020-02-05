import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';
import { mergeMap, switchMap, retry, 
  map, catchError, filter, scan } from 'rxjs/operators'; 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  danhSachTuongLienMinh;
  ngOnInit() {
    this.getTuongs();
  }

  getTuongs() : void {
    this.heroService.getTuongs().subscribe(tuongs => this.danhSachTuongLienMinh = tuongs);
  }
}
