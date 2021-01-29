import { Component, OnInit, Output, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ManageMovieVisibilityService } from 'src/app/services/manage-trailer-visibility.service';
import { of, Observable } from 'rxjs';
import { ModalData } from 'src/app/core/ModalInterface';

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
export class MovieModalComponent implements OnInit, OnChanges{

  @Input() modalIsVisible = false;

  modalData$ : Observable<ModalData>;

  showModal = this.modalIsVisible;

  constructor(private modalService : ManageMovieVisibilityService) {

    this.modalData$ = this.modalService.getModalIsVisible();
   }

  ngOnInit(): void {

    this.modalData$.subscribe(data =>  {
      console.log(data)
    })
  }

  ngOnChanges(){
  }

  hideModal(){

    this.modalService.seeVideo(false);
  }
}
