import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    danhSachTuongLienMinh;
    constructor(private heroService: HeroService) {
        this.heroService;
    }

    ngOnInit() {
        this.getTuongs();
    }

    getTuongs() : void {
        this.heroService.getTuongs().subscribe(tuongs => this.danhSachTuongLienMinh = tuongs);
        this.heroService.logMessage(`Xem danh sách tướng`);
    }
}
