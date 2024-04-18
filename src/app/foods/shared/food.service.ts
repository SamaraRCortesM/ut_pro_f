import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

 

  API_URL:string= '';

  constructor(private http:HttpClient) {
    this.API_URL = `${environment.API_URL}`
   }

   public getAll():Observable<Food[]>{
    return this.http.get<Food[]>(this.API_URL + 'foods/all');
   }

   public addFood(food:Food):Observable<Food>{
    return this.http.post<Food>(this.API_URL + 'foods/save', food);
   }

   public deleteFood(deleteFood:Food):Observable<unknown>{
    return this.http.delete(this.API_URL + 'foods/delete/' + deleteFood.id);
   }

   public getOneFood(id:number):Observable<Food>{
    return this.http.get<Food>(this.API_URL + 'foods/find/' + id);
   }
}
