import { Component, OnInit } from '@angular/core';
import { RestrauntDataService } from '../restraunt-data.service';

@Component({
  selector: 'app-display-restraunts',
  templateUrl: './display-restraunts.component.html',
  styleUrls: ['./display-restraunts.component.css']
})
export class DisplayRestrauntsComponent implements OnInit {
  restrauntsList = [];
  dataAvailable = 0;
  viewIndex = 0;
  constructor(private restrauntDataService: RestrauntDataService) { }
  viewDetailsInModel(i) {
    this.viewIndex = i;
  }
  ngOnInit() {
    this.restrauntDataService.getList().subscribe(result => {
      this.restrauntsList = result.data;
      console.log(this.restrauntsList);
      if (result.data.length > 0) {
        this.dataAvailable = 1;
      } else {
        this.dataAvailable = 2;
      }
    }, error => {
      alert('Error while fetching data');
      this.dataAvailable = 2;
    }, () => {

    });

  }

}
