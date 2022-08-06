/* eslint-disable no-unused-vars */

class Media{
    constructor(title,yearOfRelease){
        this.title=title;
        this.yearOfRelease=yearOfRelease;
        this.ratings=[];
    };
    getTitle(){
        return this.title;
    }
    getYearOfRelease(){
        return this.yearOfRelease;
    };
    getAverageRating(){
        if(this.ratings.length===0){
            return 'this is not rated'
        }else{
            return this.ratings.reduce((total,current)=>total+current,0)/this.ratings.length;
        };
    };
    addRating(rating){
        if(1<=rating&&rating<=100){
            this.ratings.push(rating);
        }else{
            return `${rating} is not a valid rating, ratings must be 1-100`
        };
    };
};

class Album extends Media{
    constructor(title,yearOfRelease,artist,tracks){
        super(title,yearOfRelease);
        this.artist=artist;
        this.tracks=tracks;
    };
};

class Movie extends Media{
    constructor(title,yearOfRelease,director,runTime){
        super(title,yearOfRelease);
        this.director=director;
        this.runTime=runTime;
    };
};

class Book extends Media{
    constructor(title,yearOfRelease,author,pages){
        super(title,yearOfRelease);
        this.author=author;
        this.pages=pages;
    };
};