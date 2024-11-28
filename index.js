var quotes=[
    {
        text:"“Be yourself; everyone else is already taken.”",
        author:"--Oscar Wilde"
    },
        {
        text:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author:"--Marilyn Monroe"
    },
    {
        text:"“So many books, so little time.”",
        author:"--Frank Zappa"
    },

    {
        text:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:"--Albert Einstein"
    },

 
];



function RandomQoute(){
    var randomQute=Math.floor(Math.random()*quotes.length); 
  
    var quote=quotes[randomQute];
    document.getElementById('quotes').innerHTML=quote.text;
    document.getElementById('Autor').innerHTML=quote.author;

    
}