import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-event',
  templateUrl: './modal-event.component.html',
  styleUrls: ['./modal-event.component.scss']
})
export class ModalEventComponent {
  onOpen(event: any) {
    console.log(event);
  }
  }
