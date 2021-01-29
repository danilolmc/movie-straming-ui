import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalData } from "../core/ModalInterface"

@Injectable({
  providedIn: 'root'
})

export class ManageMovieVisibilityService {

  modalIsVisible = new BehaviorSubject<ModalData>({ isModalVisible: false, videoLink: "" });

  getModalIsVisible() {
    return this.modalIsVisible.asObservable();
  }

  seeVideo(isModalVisible: boolean, videoLink: string = "") {

    const newModalData: ModalData = {
      isModalVisible,
      videoLink
    }

    return this.modalIsVisible.next(newModalData);
  }
}
