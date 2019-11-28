import { Component, OnInit, Input } from '@angular/core';
import { ApiGatewayService, IDocumentModel } from '../../../../core/service/api-gateway.service';

@Component({
  selector: 'app-sdk',
  templateUrl: './sdk.component.html',
  styleUrls: ['./sdk.component.scss']
})
export class SdkComponent implements OnInit {
  @Input() apiId: string;
  blob: any;

  constructor(private apiGatewayService: ApiGatewayService) { }

  ngOnInit() { }

  getSdk() {
    const that = this;
    this.apiGatewayService.getSdk(this.apiId, 'beta', 'javascript').subscribe(result => {
      that.downloadFile('data:' + result.contentType + ';base64,' + result.body, `${that.apiId}_beta-javascript.zip`);
    });
  }

  downloadFile(dataUri: string, fileName: string) {

    const downloadLinkElement = document.createElement('a');
    downloadLinkElement.setAttribute('href', dataUri);
    downloadLinkElement.setAttribute('download', fileName);
    downloadLinkElement.style.display = 'none';

    document.body.appendChild(downloadLinkElement);
    downloadLinkElement.click();
    document.body.removeChild(downloadLinkElement);

  }

}
