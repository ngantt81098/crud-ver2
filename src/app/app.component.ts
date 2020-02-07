import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { LocalStorageComponent } from './local-storage.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends LocalStorageComponent{
    constructor (
        private heroService: HeroService,
    ) {
        super();
        this.heroService;
    };
}
    