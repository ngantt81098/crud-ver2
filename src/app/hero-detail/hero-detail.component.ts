import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalstorageService } from '../localstorage.service';
@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    tuong : ApiModel.Tuong;
    constructor(
        private route: ActivatedRoute, 
        private heroService: HeroService,
        private lsService: LocalstorageService
        ) { 
            this.lsService;
        }
        
    danhSachKyNang = ['Bão đạn', 'Ám khí', 'Lời nguyền tử vong', 'Hôn gió', 'Mê hoặc', 'Cái nhìn hóa đá'];
    tuongForm: FormGroup;
    ngOnInit() {   
        return this.getTuong();
    }
    
    /**
    * return a observable
    */
    getTuong() : void{
        const tuongId = +this.route.snapshot.paramMap.get('id');
        this.heroService.getTuong(tuongId).subscribe(tuong => this.tuong = tuong);
        
        this.tuongForm = new FormGroup({
            'id' : new FormControl(this.tuong.id),
            'ten' : new FormControl(this.tuong.ten),
            'kyNang': new FormControl(this.tuong.kyNang),
            'mau' : new FormControl(this.tuong.mau),
            'anh' : new FormControl(this.tuong.anh)
        });
    }
    
    updateTuong(tuong) : void {
        const id = +this.route.snapshot.paramMap.get('id'); 
        this.heroService.updateTuong(tuong);
    }
    
    deleteTuong(tuong){
        this.heroService.deleteTuong(tuong);
    }
}
    