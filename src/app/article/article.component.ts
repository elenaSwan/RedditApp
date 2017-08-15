import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'red-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


	// @HostBinding ('attr.class') cssClass='row';
	@Input() article: Article;

  constructor() {

  	// this.article = new Article('Angular2','http://angular.io',10);
  }
  voteUp(): boolean{
  	this.article.votePlus()
  	return false;
  }
  voteDown ():boolean{
  	this.article.voteMinus();
  	return false;
  }

  ngOnInit() {
  }

}
