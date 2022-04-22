import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Options } from 'selenium-webdriver';

@Component({
  selector: 'app-cmdb-list',
  templateUrl: './cmdb-list.component.html',
  styleUrls: ['./cmdb-list.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class CmdbListComponent implements OnInit {

  cmdbEntries: Array<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.refresh();        
  }
  
  refresh() {
      this.http.get('/apis/kpack.io/v1alpha2/builds/').subscribe(data => {
        this.cmdbEntries = data['items'];
      });  
  }

}
