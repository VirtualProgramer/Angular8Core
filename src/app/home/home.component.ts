import { Component, OnInit } from '@angular/core';
import {ServicePhotoAPIService} from '../service-photo-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private servicePhotoAPIService: ServicePhotoAPIService,
  ) { }

  // imageToShow: any;
  // isImageLoading: boolean;
  // yourImageUrl = 'http://api.btstu.cn/sjbz/?lx=dongman';

  ngOnInit() {
  }

  // createImageFromBlob(image: Blob) {
  //    let reader = new FileReader();
  //    reader.addEventListener('load', () => {
  //       this.imageToShow = reader.result;
  //    }, false);
  //    if (image) {
  //       reader.readAsDataURL(image);
  //    }
  // }

  // getImageFromService() {
  //   this.isImageLoading  = true;
  //   this.servicePhotoAPIService.getImage(this.yourImageUrl).subscribe(data => {
  //     this.createImageFromBlob(data);
  //     this.isImageLoading = false;
  //   }, error => {
  //     this.isImageLoading = false;
  //     console.log(error);
  //   });
  // }
}
