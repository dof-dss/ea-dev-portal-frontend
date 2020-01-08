import { Component, OnInit, Input } from '@angular/core';
import { ApiGatewayService, IDocumentModel } from '../../../../core/service/api-gateway.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  @Input() apiId: string;
  documentModel$: Observable<IDocumentModel>;

  constructor(private apiGatewayService: ApiGatewayService) { }

  ngOnInit() {
    this.documentModel$ = this.apiGatewayService.getDocumentation(this.apiId, 'beta');
  }

}
