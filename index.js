let colors = ['red', 'crimson', 'tomato', 'mediumseagreen', 'goldenrod', 'salmon', 'slateblue', 'aqua', 'aquamarine', 'chartreuse', 'coral', 'orange', 'green', 'blue', 'dodgerblue', 'blueviolet', 'purple', 'black', 'gray', 'indigo', 'violet', 'pink']

// QUOTE AMOUNT: 40

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
    {QUOTE: "Don't judge each day by the harvest you reap but by the seeds that you plant.", AUTHOR: "-Robert Louis Stevenson"},
    {QUOTE: 'You will face many defeats in life, but never let yourself be defeated.', AUTHOR: "-Maya Angelou"},
    {QUOTE: "In the end, it's not the years in your life that count. It's the life in your years.", AUTHOR: "-Abraham Lincoln"},
    {QUOTE: "Never let the fear of striking out keep you from playing the game.", AUTHOR: "-Babe Ruth"},
    {QUOTE: "Life is either a daring adventure or nothing at all.", AUTHOR: "-Helen Keller"},
    {QUOTE: "Many of life's failures are people who did not realize how close they were to success when they gave up.", AUTHOR: "-Thomas A. Edison"},
    {QUOTE: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", AUTHOR: "-Dr. Seuss"},
    {QUOTE: "If life were predictable it would cease to be life and be without flavor.", AUTHOR: "-Eleanor Roosevelt"},
    {QUOTE: "Life is a succession of lessons which must be lived to be understood.", AUTHOR: "-Ralph Waldo Emerson"},
    {QUOTE: "Life is never fair, and perhaps it is a good thing for most of us that it is not.", AUTHOR: "-Oscar Wilde"},
    {QUOTE: "The only impossible journey is the one you never begin.", AUTHOR: "-Tony Robbins"},
    {QUOTE: "In this life we cannot do great things. We can only do small things with great love.", AUTHOR: "-Mother Teresa"},
    {QUOTE: "Only a life lived for others is a life worthwhile.", AUTHOR: "-Albert Einstein"},
    {QUOTE: "The purpose of our lives is to be happy.", AUTHOR: "-Dalai Lama"},
    {QUOTE: "You only live once, but if you do it right, once is enough.", AUTHOR: "-Mae West"},
    {QUOTE: "Live in the sunshine, swim the sea, drink the wild air.", AUTHOR: "-Ralph Waldo Emerson"},
    {QUOTE: "Go confidently in the direction of your dreams! Live the life you've imagined.", AUTHOR: "-Henry David Thoreau"},
    {QUOTE: "The greatest glory in living lies not in never falling, but in rising every time we fall.", AUTHOR: "-Nelson Mandela"},
    {QUOTE: "Life is really simple, but we insist on making it complicated.", AUTHOR: "-Confucius"},
    {QUOTE: "May you live all the days of your life.", AUTHOR: "-Jonathan Swift"},
    {QUOTE: "Life itself is the most wonderful fairy tale.", AUTHOR: "-Hans Christian Andersen"},
    {QUOTE: "Do not let making a living prevent you from making a life.", AUTHOR: "-John Wooden"},
    {QUOTE: "Life is ours to be spent, not to be saved.", AUTHOR: "-D. H. Lawrence"},
    {QUOTE: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", AUTHOR: "-Marilyn Monroe"},
    {QUOTE: "Life is a long lesson in humility.", AUTHOR: "-James M. Barrie"},
    {QUOTE: "In three words I can sum up everything I've learned about life: it goes on.", AUTHOR: "-Robert Frost"},
    {QUOTE: "Love the life you live. Live the life you love.", AUTHOR: "-Bob Marley"},
    {QUOTE: "Life is made of ever so many partings welded together.", AUTHOR: "-Charles Dickens"},
    {QUOTE: "Life is trying things to see if they work.", AUTHOR: "-Ray Bradbury"}
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
        $('#new-quote').css('background-color', x);
        $('.tweet-quote').css('background-color', x);
        $('#quote-left').css('color', x);
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + quote.QUOTE + ' ' + quote.AUTHOR)
        console.log('https://twitter.com/intent/tweet?text="' + quote.QUOTE + '" ' + quote.AUTHOR)
    });
};

