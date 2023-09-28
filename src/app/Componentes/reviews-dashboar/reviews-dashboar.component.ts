import { Component } from '@angular/core';
import { ReviewsConsultas } from 'src/app/Modelos/ReviewsConsultas';
import { ReviewsService } from 'src/app/Services/reviews.service';


@Component({
  selector: 'app-reviews-dashboar',
  templateUrl: './reviews-dashboar.component.html',
  styleUrls: ['./reviews-dashboar.component.css']
})
export class ReviewsDashboarComponent {

  list: ReviewsConsultas[] = []

  public constructor(
    private reviewService: ReviewsService
    ){}

  ngOnInit(): void {
    this.getReview()
  } 
  
  getReview(){
    this.reviewService.getAllReviews().subscribe(
      (data:ReviewsConsultas[]) =>{
        this.list = data
      },
      (error)=>{
        console.error(error) 
      }
    )
  }
}
