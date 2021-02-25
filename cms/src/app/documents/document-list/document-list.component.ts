import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../document.model'

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  constructor() { }

  @Output() selectedDocumentEvent = new EventEmitter<Document>()

  documents: Document[]=[
    new Document('1','CIT 260 - Object Oriented Programming', 'This is Document 1','www.document1.com', null,),
    new Document('2','WDD 430 - Web Full Stack Development', 'This is Document 2','www.document2.com', null,),
    new Document('3','CIT 425 - Data Warehousing', 'This is Document 5','www.document5.com', null,),
    new Document('4','CIT 460 - Enterprise Development', 'This is Document 3','www.document3.com', null,),
    new Document('5','CIT 495 Senior Practicum', 'This is Document 4','www.document4.com', null,),
  ]

  ngOnInit(): void {
  }

  onSelectedDocument(document: Document){
    this.selectedDocumentEvent.emit(document);
  }
}
