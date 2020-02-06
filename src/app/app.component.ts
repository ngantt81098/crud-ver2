import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { LocalstorageService } from './localstorage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    constructor (
        private heroService: HeroService,
        private lsService: LocalstorageService
        ) {
            this.heroService;
            this.lsService.storageAvailable();
        };

}
    