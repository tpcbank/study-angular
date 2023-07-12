import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './test-request-get';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.scss'],
})
export class TestRequestGetComponent implements OnInit {
  bookList: Book[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  searchBookList(name: string) {
    this.http
      .get<Book[]>(`https://www.anapioficeandfire.com/api/books?name=${name}`)
      .subscribe((res) => {
        this.bookList = res;
      });
  }
  // ngOnInit(): void {
  //   this.http
  //     .post<Data[]>(
  //       'https://app12.theassistech.co.th/api/v1/getMonitorSetting',
  //       {}
  //     )
  //     .subscribe((res) => {
  //       console.log(res);
  //       this.responseList = res;
  //     });
  // }
}
