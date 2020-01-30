import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tuong } from './hero';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { TUONG } from './danhSachTuong';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  json;
  result;
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /**
   * Get hero by id : READ
   */
  getTuong(tuongId: number) {
    
    //get tuongs from local storage
    var total = JSON.parse(localStorage.getItem('angular.heroes'));

    //tim id cua tuong trong danh sach tuong tra ve 
    for(let i=0; i<total.length; i++){
      
      if (total[i].id == tuongId) {
        return this.result = total[i];
      }
    }
  }

  /**
   * Update new hero : UPDATE
   * Get hero id + update form into local storage
   */
  updateTuong(value) {

    //get tuongs from local storage
    var total = JSON.parse(localStorage.getItem('angular.heroes'));

    // Get hero infor by id + update the info with input form
    for(let i=0; i<total.length; i++){
      if (total[i].id == value.id) {
        total[i] = value; 

        // update data into local storage by getting data from an input form
        localStorage.setItem('angular.heroes', JSON.stringify(total));
      }
    }    
  }

  /**
   * Add tuong CREATE
   * @param operation 
   * @param result 
   */
  addTuong(val) {
    this.json = JSON.parse(localStorage.getItem('angular.heroes'));
    this.json.push(val);
    localStorage.setItem('angular.heroes', JSON.stringify(this.json));
  }

  /**
   * Delete hero
   */
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
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
   
}

