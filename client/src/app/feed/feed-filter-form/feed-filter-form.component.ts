import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dateTime } from '../Models/dateTime.model';
import { FeedService } from '../feed.service';
import { post } from '../Models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed-filter-form',
  templateUrl: './feed-filter-form.component.html',
  styleUrls: ['./feed-filter-form.component.css']
})
export class FeedFilterFormComponent implements OnInit {

  newDate: dateTime;
  // listPosts$: Observable<post[]>;
  // listPosts: post[] = [];
  constructor(private feedService: FeedService) { }

  filterFormGroup = new FormGroup({
    DateFrom: new FormControl(''),
    DateTo : new FormControl(''),
    Radius: new FormControl(''),
    Tag: new FormControl(''),
    TaggedUsers: new FormControl('')
  })

  ngOnInit() {
    this.createNewDateTime();
  }
  search(){
    debugger
    this.newDate.dateFrom = this.filterFormGroup.get('DateFrom').value;
    this.newDate.dateTo = this.filterFormGroup.get('DateTo').value;
    this.feedService.getAllPostsByDateTime(this.newDate);
  }
  createNewDateTime(){
    this.newDate = {
      dateFrom: null,
      dateTo: null
    }
  }
}
