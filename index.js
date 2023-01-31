let colors = ['red', 'crimson', 'tomato', 'mediumseagreen', 'goldenrod', 'salmon', 'slateblue', 'aqua', 'aquamarine', 'chartreuse', 'coral', 'orange', 'green', 'blue', 'dodgerblue', 'blueviolet', 'purple', 'black', 'gray', 'indigo', 'violet', 'pink']
            
let quotes = [
    {QUOTE: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', AUTHOR: '-Nelson Mandela'},
    {QUOTE: "The way to get started is to quit talking and begin doing.", AUTHOR: '-Walt Disney'},
    {QUOTE: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", AUTHOR: '-Steve Jobs'},
    {QUOTE: "If life were predictable it would cease to be life, and be without flavor.", AUTHOR: '-Eleanor Roosevelt'},
    {QUOTE: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", AUTHOR: "-Oprah Winfrey"},
    {QUOTE: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", AUTHOR: "-James Cameron"},
    {QUOTE: "Life is what happens when you're busy making other plans.", AUTHOR: "-John Lennon"},
    {QUOTE: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", AUTHOR: "-Mother Teresa"},
    {QUOTE: "When you reach the end of your rope, tie a knot in it and hang on.", AUTHOR: "-Franklin D. Roosevelt"},
    {QUOTE: "Always remember that you are absolutely unique. Just like everyone else.", AUTHOR: "-Margaret Mead"},
    {QUOTE: "Don't judge each day by the harvest you reap but by the seeds that you plant.", AUTHOR: "-Robert Louis Stevenson"}
];

function takeRNG(highestNumber, lowestNumber) {
    return Math.floor(Math.random() * (highestNumber - lowestNumber) + lowestNumber);
}

$(function () {
    console.log($('#title').text());
});

function newQuote() {
    let x = colors[takeRNG(colors.length, 0)];
    $(function () {
        $('#bg').css('background-color', x);
    })
    let quote = quotes[takeRNG(quotes.length, 0)];
    document.getElementById('text').innerHTML = quote.QUOTE;
    document.getElementById('author').innerHTML = quote.AUTHOR;
    $(function () {
        $('#text').css('color', x);
        $('#author').css('color', x);
        $('#new-quote').css('color', x);
        $('#tweet-quote').css('color', x);
    });
};

