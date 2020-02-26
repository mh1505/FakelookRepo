import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../../feed.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  constructor(private feedService: FeedService) { }

  @Input() postId: number;
  comments: any[] = [];

  ngOnInit() {
    this.feedService.getCommentsPost(this.postId).subscribe(list => {
      this.comments = list;
    });
  }
}
