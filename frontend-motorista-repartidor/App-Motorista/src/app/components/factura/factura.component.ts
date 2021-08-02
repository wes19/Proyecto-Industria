import { Component, OnInit } from '@angular/core';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  faUndoAlt = faUndoAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
