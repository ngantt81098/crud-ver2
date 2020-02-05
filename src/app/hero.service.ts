import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs'; 
import { Tuong } from './hero';
import { catchError, map, tap } from 'rxjs/operators';
// import { NotifierService } from 'angular-notifier';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  json;
  result;
  danhSachTuongLienMinh;
  consequence;
  constructor(
      private http: HttpClient,
      private messageService: MessageService,
      // private notifier: NotifierService
  ) {
    // this.notifier = notifier;
  }
  
  getTuongs() : Observable<ApiModel.Tuong[]> {
    this.danhSachTuongLienMinh = JSON.parse(localStorage.getItem('angular.heroes'));

    this.logMessage("Xem danh sách tướng thành công");

    return of(this.danhSachTuongLienMinh);
  }

  getTuong(tuongId: number) : Observable<ApiModel.Tuong> {
    
    //get tuongs from local storage
    var total = JSON.parse(localStorage.getItem('angular.heroes'));

    //tim id cua tuong trong danh sach tuong tra ve 
    for(let i=0; i<total.length; i++){
      
      if (total[i].id == tuongId) {        
        this.result = total[i];
        return of(this.result = total[i]);
      }
    }
  }

  updateTuong(tuong): Observable<any> {

    //get tuongs from local storage
    var total = JSON.parse(localStorage.getItem('angular.heroes'));

    // Get hero infor by id + update the info with input form
    for(let i=0; i<total.length; i++){
      if (total[i].id == tuong.id) {
        total[i] = tuong; 

        // update data into local storage by getting data from an input form
        localStorage.setItem('angular.heroes', JSON.stringify(total));
        return of(tuong).pipe(
          tap(_ => console.log(tuong)),
          catchError(tuong)
        );
      }
    }    
  }

  addTuong(tuong: ApiModel.Tuong): Observable<ApiModel.Tuong> {
    this.json = JSON.parse(localStorage.getItem('angular.heroes'));
    this.json.push(tuong);
    of(localStorage.setItem('angular.heroes', JSON.stringify(this.json)));
    return of(tuong);
  }

  deleteTuong(value) {
    //get tuongs from local storage
    var total = JSON.parse(localStorage.getItem('angular.heroes'));

    //tim id cua tuong trong danh sach tuong tra ve 
    for(let i=0; i<total.length; i++){
  
      if (total[i].id == value.id) {
        total.splice(i, 1);
        localStorage.setItem('angular.heroes', JSON.stringify(total));
      }
    }
  }

  public logMessage(message: string) {
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
  // public showNotification(type: string, message: string) {
  //   this.notifier.notify( type, message );
  // }
}
}
