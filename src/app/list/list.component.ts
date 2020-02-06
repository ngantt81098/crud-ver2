import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    
    constructor(private heroService: HeroService) {
        this.heroService;
    }
    
    ngOnInit() {
        this.getTuongs();
    }
    
    getTuongs() : void {
        this.heroService.getTuongs().subscribe(tuongs => this.heroService.danhSachTuongLienMinh = tuongs);
    }
}
