import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { HeroService } from '../hero.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    tuong : ApiModel.Tuong;
    id = +this.route.snapshot.paramMap.get('id');

    constructor(
        private route: ActivatedRoute, 
        private heroService: HeroService,
        private router: Router
        ) 
    {}
        
    danhSachKyNang = [
                'Bão đạn', 'Kháng phép', 'Đường kiềm tuyệt diệt',
                'Lửa hồ li', 'Hôn gió', 'Phi đao năm cánh', 'Nghiền nát', 'Băng tiễn',
                'Chú tâm tiễn', 'Chiến binh lanh lợi', 'đâm lao', 'Cân đẩu vân',
                'Phóng rìu', 'Điên cuồng', 'Ám khí', 'Lời nguyền tử vong', 'Mê hoặc', 'Cái nhìn hóa đá'
            ];
    tuongForm: FormGroup;
    ngOnInit() {   
        this.getTuong();
    }

    getTuong() : void {
        const tuongId = this.id;
        this.heroService.getTuong(tuongId).subscribe( tuong => {
            this.tuong = tuong,
            this.heroService.logMessage(`Xem tướng: ${this.tuong.ten}`)
            }
        );
        
        this.tuongForm = new FormGroup({
            'id' : new FormControl(this.tuong.id),
            'ten' : new FormControl(this.tuong.ten),
            'kyNang': new FormControl(this.tuong.kyNang),
            'mau' : new FormControl(this.tuong.mau),
            'anh' : new FormControl(this.tuong.anh)
        });
    }
    
    updateTuong (tuong: ApiModel.Tuong) : void {
        this.heroService.updateTuong(tuong).subscribe(
            tuong => 
            {
                this.tuong = tuong,
                this.heroService.logMessage(`Sửa tướng: ${this.tuong.ten}`)
            }
        );
    }

    deleteTuong (tuong: ApiModel.Tuong){
        this.heroService.deleteTuong(tuong).subscribe(
            tuong => 
            {
                this.heroService.logMessage(`Xóa tướng: ${this.tuong.ten}`),
                this.router.navigateByUrl('/tuongs');
            }
        );
    }

    confirmDelete (tuong: ApiModel.Tuong) {
        if (confirm(`Xóa tướng ${tuong.ten}?`)) {
            this.deleteTuong(tuong);
        }
    }

    confirmUpdate (tuong: ApiModel.Tuong) {
        if (confirm(`Cập nhật tướng ${tuong.ten}?`)) {
            this.updateTuong(tuong);
        }
    }
}
    