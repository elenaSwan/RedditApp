export class Article {
	title:string;
	link:string;
	votes:number;

	constructor(title:string, link:string, votes:number){
		this.title = title;
		this.link = link;
		this.votes = votes;
	}
	votePlus():void{
		this.votes +=1;
	}
	voteMinus():void {
		this.votes -=1;
	}
	domain(): string{ //Metod za da se ispecati imeto na domainot zadaden kako link bez http:// delot.
		try{
			const domainAndPath: string = this.link.split('//')[1];
			return domainAndPath.split('/')[0];
		}catch(err){
			return null;
		}
	}
}