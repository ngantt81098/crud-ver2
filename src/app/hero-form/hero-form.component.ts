import { Component, OnInit } from '@angular/core';
import { TUONG } from '../danhSachTuong';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { LocalstorageService } from '../localstorage.service';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
    json;
    danhSachKyNang = [
        'Bão đạn', 'Ám khí', 'Lời nguyền tử vong', 'Hôn gió', 'Mê hoặc', 
        'Cái nhìn hóa đá', 'Siêu Bom Địa Ngục', 'Chuyển Hóa Năng Lượng'
    ];
    tuong = {id: 11, ten: 'Ziggs', kyNang: this.danhSachKyNang[7], mau: '689 (+0.5 mỗi cấp) ', anh: 'Ziggs'};
    tuongForm: FormGroup;
    message;

    constructor(
        private heroService: HeroService,
        private lsService: LocalstorageService
        ) 
    {
        this.lsService.storageAvailable();
    }
        
    ngOnInit(): void {
        this.tuongForm = new FormGroup({
            'id' : new FormControl(this.tuong.id),
            'ten' : new FormControl(this.tuong.ten),
            'kyNang': new FormControl(this.tuong.kyNang),
            'mau' : new FormControl(this.tuong.mau),
            'anh' : new FormControl(this.tuong.anh),
        }); 
    }
    
    danhSachTuong = TUONG;
    
    get id() { return this.tuongForm.get('id'); }
    get ten() { return this.tuongForm.get('ten'); }
    get kyNang() { return this.tuongForm.get('kyNang'); }
    get mau() { return this.tuongForm.get('mau'); }
    get anh() { return this.tuongForm.get('anh'); }
    
    submitted = false;
    
    onSubmit() { this.submitted = true; }
    
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.tuong)};
    
    add(tuong) : void {  
        this.heroService.addTuong(tuong).subscribe(value => console.log(value));
    }
    private resetForm() {
        this.tuongForm.reset();
    }
    private log(message: string){
    }
}
        