import { Component } from '@angular/core';
import {ArticleComponent} from './article/article.component';
import {Article} from './article/article.model';

@Component({
  selector: 'red-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

articles: Article [];

constructor(){
this.articles=[
	new Article('Angular2', 'http://angular.io', 3),
	new Article('Fullstack', 'http://angular.io', 5),
	new Article('Angular Home', 'http://angular.io', 1),
	];
}

sortedArticle():Article[] {
	return this.articles.sort((a:Article, b:Article)=> b.votes - a.votes);
}


 addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
 	// console.log(`Adding article title: ${title.value} and link: ${link.value}`);
 	console.log("Adding article title: " +title.value +"and link: " + link.value);
 	this.articles.push(new Article(title.value, link.value, 0));
 	title.value='';
 	link.value='';
 	return false;
 }
}
