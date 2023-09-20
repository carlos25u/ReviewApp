import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/enviroment';
import { Reviews } from '../Modelos/Reviews';
import { ReviewsConsultas } from '../Modelos/ReviewsConsultas';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private endpoint:String = environment.endPoint
  private url:String = this.endpoint+"Reviews"

  constructor( private http:HttpClient) {}

  getAllReviews():Observable<ReviewsConsultas[]>{
    return this.http.get<ReviewsConsultas[]>(`${this.url}`)
  }

  getReview(id: number): Observable<ReviewsConsultas[]>{
    return this.http.get<ReviewsConsultas[]>(`${this.url}/${id}`)
  }

  postReview(review:Reviews):Observable<Reviews>{
    return this.http.post<Reviews>(`${this.url}`, review)
  }

  putReview(reviewId:number, review:Reviews):Observable<Reviews>{
    return this.http.put<Reviews>(`${this.url}${reviewId}`, review)
  }

  DeleteEmpleados(reviewId:number):Observable<void>{
    return this.http.delete<void>(`${this.url}${reviewId}`)
  }

}
