import { Component, OnInit, Input } from '@angular/core';
import { ApiGatewayService, IDocumentModel } from '../../../../core/service/api-gateway.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  @Input() apiId: string;
  documentModel: any;

  constructor(private apiGatewayService: ApiGatewayService) { }

  ngOnInit() {
    this.apiGatewayService.getDocumentation(this.apiId, 'beta').subscribe(result => {
      this.documentModel = result as IDocumentModel;
    });
  }

}
