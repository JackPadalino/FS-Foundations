/* eslint-disable no-unused-vars, no-prototype-builtins */

const createBook=(id,title,author,price)=>{
    const newBookPrototype = {
        getprice(){
            return this.price;
        },
        getInfo(){
            return `${this.title} by ${this.author}`
        },
        getPrice(){
            return this.price;
        },
        addRating(rating){
            this.rating.push(rating);
        },
        getRating(){
            let sum = 0;
            this.rating.forEach(element=>sum+=element.length);
            return sum/this.rating.length;
        }
    };
    const newBook = Object.create(newBookPrototype);
    newBook.id = id;
    newBook.title = title;
    newBook.author = author;
    newBook.price = price;
    newBook.rating = [];
    return newBook;
};