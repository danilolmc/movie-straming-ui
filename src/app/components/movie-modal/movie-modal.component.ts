import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable } from 'rxjs';
import { ManageMovieVisibilityService } from 'src/app/services/manage-trailer-visibility.service';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.css'],
  animations : [
    trigger('showhideModal', [
      state('isHidden', style({
        opacity: 0,
        pointerEvents: 'none',
      })),
      state('isShown', style({
        opacity: 1,
        pointerEvents: 'all',
      })),

      transition('isHidden=>isShown', animate('.5s ease')),
      transition('isShown=>isHidden', animate('.5s ease'))
    ])
   ],
})
export class MovieModalComponent{

  @Input() modalIsVisible = false;

  modalData$ : Observable<any>;

  showModal = this.modalIsVisible;

  constructor(private modalService : ManageMovieVisibilityService) {

    this.modalData$ = this.modalService.getModalIsVisible();
   }


  hideModal(){
    this.modalService.seeVideo(false);
  }
}
