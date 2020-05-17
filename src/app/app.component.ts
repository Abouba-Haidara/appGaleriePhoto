import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "appGaleriePhoto";

  motCle: string = "";
  images: { hits: null };
  pageSize: number = 5;
  currentPage: number = 1;
  totalPages: number;
  pages: Array<number> = [];
  mode = "LIST";
  currentImage = null;
  constructor(private http: HttpClient) {
    this.getImages();
  }

  getImages() {
    this.http
      .get<any>(
        "https://pixabay.com/api/?key=16496574-72805a6e6dc5b0e6d8d628369&q=Senegal"
      )
      .subscribe(
        (data) => {
          this.images = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  gotoPage(i: number) {
    this.currentPage = i;
    this.getImages();
  }
  detailImage(im) {
    this.mode = "DETAIL";
    this.currentImage = im;
  }
}
