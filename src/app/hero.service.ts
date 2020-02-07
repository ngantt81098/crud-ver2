import { Injectable, AfterContentInit } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs'; 
import { catchError, tap } from 'rxjs/operators';
import { LocalStorageComponent } from './local-storage.component';
@Injectable({
    providedIn: 'root'
})
export class HeroService extends LocalStorageComponent {
    json = JSON.parse(this._availableStorage);
    result;
    danhSachTuongLienMinh;
    consequence;
    tuong: ApiModel.Tuong;

    constructor(
        private messageService: MessageService,
    ) {
        super();
    }

    getTuongs() : Observable<ApiModel.Tuong[]> {
        this.danhSachTuongLienMinh = this.json;
        return of(this.danhSachTuongLienMinh);
    }

    getTuong(tuongId: number) : Observable<ApiModel.Tuong> {
        if (this._availableStorage !== null) {

            let total = this.json;
            
            for(let i=0; i<total.length; i++){
                
                if (total[i].id == tuongId) {        
                    this.result = total[i];
                    return of(this.result = total[i]);
                }
            }
        }
        else if (this._availableStorage === null) {
            this.logMessage(`Local Storage rỗng, nhấn Ctrl + f5 để chèn data nhé`);
        }
    }
            
    updateTuong(tuong: ApiModel.Tuong): Observable<any> {
        
        var total = this.json;
        
        for(let i=0; i<total.length; i++){
            if (total[i].id == tuong.id) {
                total[i] = tuong; 
                
            localStorage.setItem('angular.heroes', JSON.stringify(total));
            return of(tuong);
            }
        }    
    }
                
    addTuong(tuong: ApiModel.Tuong): Observable<ApiModel.Tuong> {
        this.json = this.json;
        this.json.push(tuong);
        of(localStorage.setItem('angular.heroes', JSON.stringify(this.json)));
        return of(tuong);
    }
        
    deleteTuong(tuong: ApiModel.Tuong) {
        var total = this.json;
        for(let i=0; i<total.length; i++){
            
            if (total[i].id == tuong.id) {
                total.splice(i, 1);
                return of(localStorage.setItem('angular.heroes', JSON.stringify(total)));
            }
        }
    }
        
    logMessage(message: string) {
        this.messageService.add(`Thông báo: ${message}`);
    }
        
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            
            // TODO: better job of transforming error for user consumption
            this.logMessage(`${operation} failed: ${error.message}`);
            
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
            