import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';

@Injectable({
    providedIn: 'root'
})
export class LocalstorageService {
    data;
    json;

    LOCAL_STORAGE = {
        KEY:    "angular.heroes",
        VALUE:  [
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
        ]
    }

    _availableStorage = localStorage.getItem(this.LOCAL_STORAGE.KEY);
    
    constructor(private heroService: HeroService) { }
    
    //check localStorage is available
    storageAvailable() {
        
        if( this.lsTest() === true ){
            this.save();
        }
    }

    lsTest(){
        try {
            if ( this._availableStorage == null && this._availableStorage == undefined ) {
                return true;
            }
            else {
                this.heroService.logMessage(`Xin chào!`);
            }
        } catch(e) {
            return false;
        }
    }

    save(){
        this.saveInLocal(this.LOCAL_STORAGE.KEY, JSON.stringify(this.LOCAL_STORAGE.VALUE));
    };
    
    saveInLocal(key, val): void {
        localStorage.setItem(key, val);
    }
    
    getFromLocal(key): void {
        this.data[key]= localStorage.getItem(key);    
    }
    
    insertEntity() {  
        this.json =  JSON.parse(localStorage.getItem(this.LOCAL_STORAGE.KEY));
        this.json.push({"id": "11", "ten": "HCM", "kyNang": "Giải phóng dân tộc", "mau": "8.041(+0.575 mỗi cấp)", "anh": "hcm"});
        localStorage.setItem(this.LOCAL_STORAGE.KEY, JSON.stringify(this.json));
    }
}
