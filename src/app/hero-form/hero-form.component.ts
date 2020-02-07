import { Component, OnInit } from '@angular/core';
import { TUONG } from '../danhSachTuong';
import { FormGroup, FormControl } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
    tuong : ApiModel.Tuong;
    danhSachKyNang = [
        'Bão đạn', 'Ám khí', 'Lời nguyền tử vong', 'Hôn gió', 'Mê hoặc', 
        'Cái nhìn hóa đá', 'Siêu Bom Địa Ngục', 'Chuyển Hóa Năng Lượng'
    ];
    tuong1 = {id: 11, ten: 'Ziggs', kyNang: this.danhSachKyNang[7], mau: '689 (+0.5 mỗi cấp) ', anh: 'Ziggs'};
    tuongForm: FormGroup;
    message;

    constructor( private heroService: HeroService ) 
    {}
        
    ngOnInit(): void {
        this.tuongForm = new FormGroup({
            'id' : new FormControl(this.tuong1.id),
            'ten' : new FormControl(this.tuong1.ten),
            'kyNang': new FormControl(this.tuong1.kyNang),
            'mau' : new FormControl(this.tuong1.mau),
            'anh' : new FormControl(this.tuong1.anh),
        }); 
    }
    
    get id() { return this.tuongForm.get('id'); }
    get ten() { return this.tuongForm.get('ten'); }
    get kyNang() { return this.tuongForm.get('kyNang'); }
    get mau() { return this.tuongForm.get('mau'); }
    get anh() { return this.tuongForm.get('anh'); }
    
    submitted = false;
    
    onSubmit() { this.submitted = true; }
    
    add(tuong) : void {  
        this.heroService.addTuong(tuong).subscribe(
            tuong => {
                this.tuong = tuong,
                this.heroService.logMessage(`Thêm tướng: ${this.tuong.ten}`)
            } 
        );
    }
}
        