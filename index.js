let colors = ['red', 'crimson', 'tomato', 'mediumseagreen', 'goldenrod', 'salmon', 'slateblue', 'aqua', 'aquamarine', 'chartreuse', 'coral', 'orange', 'green', 'blue', 'dodgerblue', 'blueviolet', 'purple', 'black', 'gray', 'indigo', 'violet', 'pink']

// QUOTE AMOUNT: 97

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
    {QUOTE: "Life is trying things to see if they work.", AUTHOR: "-Ray Bradbury"},
    {QUOTE: "Life is made of ever so many partings welded together.", AUTHOR: "-Charles Dickens"},
    {QUOTE: "The secret of success is to do the common thing uncommonly well.", AUTHOR: "-John D. Rockefeller Jr."},
    {QUOTE: "I find that the harder I work, the more luck I seem to have.", AUTHOR: "-Thomas Jefferson"},
    {QUOTE: "Success is not final; failure is not fatal: It is the courage to continue that counts.", AUTHOR: "-Winston S. Churchill"},
    {QUOTE: "Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you.", AUTHOR: "-Zig Ziglar"},
    {QUOTE: "Success usually comes to those who are too busy to be looking for it.", AUTHOR: "-Henry David Thoreau"},
    {QUOTE: "I never dreamed about success, I worked for it.", AUTHOR: "-Estee Lauder"},
    {QUOTE: "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit.", AUTHOR: "-Conrad Hilton"},
    {QUOTE: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", AUTHOR: "-Colin Powell"},
    {QUOTE: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.", AUTHOR: "-Barack Obama"},
    {QUOTE: "The only limit to our realization of tomorrow will be our doubts of today.", AUTHOR: "-Franklin D. Roosevelt"},
    {QUOTE: "It is better to fail in originality than to succeed in imitation.", AUTHOR: "-Herman Melville"},
    {QUOTE: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.", AUTHOR: "-Jim Rohn"},
    {QUOTE: "The road to success and the road to failure are almost exactly the same.", AUTHOR: "-Colin R. Davis"},
    {QUOTE: "I failed my way to success.", AUTHOR: "-Thomas Edison"},
    {QUOTE: "If you really look closely, most overnight successes took a long time.", AUTHOR: "-Steve Jobs"},
    {QUOTE: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.", AUTHOR: "-David Brinkley"},
    {QUOTE: "Things work out best for those who make the best of how things work out.", AUTHOR: "-John Wooden"},
    {QUOTE: "Try not to become a man of success. Rather become a man of value.", AUTHOR: "-Albert Einstein"},
    {QUOTE: "Don't be afraid to give up the good to go for the great.", AUTHOR: "-John D. Rockefeller"},
    {QUOTE: "Always bear in mind that your own resolution to success is more important than any other one thing.", AUTHOR: "-Abraham Lincoln"},
    {QUOTE: "Success is walking from failure to failure with no loss of enthusiasm.", AUTHOR: "-Winston Churchill"},
    {QUOTE: "You know you are on the road to success if you would do your job and not be paid for it.", AUTHOR: "-Oprah Winfrey"},
    {QUOTE: "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.", AUTHOR: "-Thomas J. Watson"},
    {QUOTE: "If you genuinely want something, don't wait for it — teach yourself to be impatient.", AUTHOR: "-Gurbaksh Chahal"},
    {QUOTE: "The only place where success comes before work is in the dictionary.", AUTHOR: "-Vidal Sassoon"},
    {QUOTE: "If you are not willing to risk the usual, you will have to settle for the ordinary.", AUTHOR: "-Jim Rohn"},
    {QUOTE: "Before anything else, preparation is the key to success.", AUTHOR: "-Alexander Graham Bell"},
    {QUOTE: "People who succeed have momentum. The more they succeed, the more they want to succeed and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.", AUTHOR: "-Tony Robbins"},
    {QUOTE: "Believe you can and you're halfway there.", AUTHOR: "-Theodore Roosevelt"},
    {QUOTE: "The only person you are destined to become is the person you decide to be.", AUTHOR: "-Ralph Waldo Emerson"},
    {QUOTE: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", AUTHOR: "-Maya Angelou"},
    {QUOTE: "The question isn't who is going to let me; it's who is going to stop me.", AUTHOR: "-Ayn Rand"},
    {QUOTE: "Winning isn't everything, but wanting to win is.", AUTHOR: "-Vince Lombardi"},
    {QUOTE: "Whether you think you can or you think you can't, you're right.", AUTHOR: "-Henry Ford"},
    {QUOTE: "You miss 100% of the shots you don't take.", AUTHOR: "-Wayne Gretzky"},
    {QUOTE: "I alone cannot change the world, but I can cast a stone across the water to create many ripples.", AUTHOR: "-Mother Teresa"},
    {QUOTE: "You become what you believe.", AUTHOR: "-Oprah Winfrey"},
    {QUOTE: "The most difficult thing is the decision to act, the rest is merely tenacity.", AUTHOR: "-Amelia Earhart"},
    {QUOTE: "How wonderful it is that nobody need wait a single moment before starting to improve the world.", AUTHOR: "-Anne Frank"},
    {QUOTE: "An unexamined life is not worth living.", AUTHOR: "-Socrates"},
    {QUOTE: "Everything you've ever wanted is on the other side of fear.", AUTHOR: "-George Addair"},
    {QUOTE: "Dream big and dare to fail.", AUTHOR: "-Norman Vaughan"},
    {QUOTE: "You may be disappointed if you fail, but you are doomed if you don't try.", AUTHOR: "-Beverly Sills"},
    {QUOTE: "Life is 10% what happens to me and 90% of how I react to it.", AUTHOR: "-Charles Swindoll"},
    {QUOTE: "Nothing is impossible, the word itself says, ‘I'm possible!'", AUTHOR: "-Audrey Hepburn"},
    {QUOTE: "It does not matter how slowly you go as long as you do not stop.", AUTHOR: "-Confucius"},
    {QUOTE: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", AUTHOR: "-Henry Ford"},
    {QUOTE: "Too many of us are not living our dreams because we are living our fears.", AUTHOR: "-Les Brown"},
    {QUOTE: "I have learned over the years that when one's mind is made up, this diminishes fear.", AUTHOR: "-Rosa Parks"},
    {QUOTE: "I didn't fail the test. I just found 100 ways to do it wrong.", AUTHOR: "-Benjamin Franklin"},
    {QUOTE: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.", AUTHOR: "-Sheryl Sandberg"},
    {QUOTE: "I attribute my success to this: I never gave or took any excuse.", AUTHOR: "-Florence Nightingale"},
    {QUOTE: "I would rather die of passion than of boredom.", AUTHOR: "-Vincent van Gogh"},
    {QUOTE: "Dreaming, after all, is a form of planning.", AUTHOR: "-Gloria Steinem"},
    {QUOTE: "Whatever the mind of man can conceive and believe, it can achieve.", AUTHOR: "-Napoleon Hill"},
    {QUOTE: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.", AUTHOR: "-Aristotle"},
    {QUOTE: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.", AUTHOR: "-Mark Twain"}
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
        $('#copy-quote').css('background-color', x);
        $('#quote-left').css('color', x);
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + quote.QUOTE + ' ' + quote.AUTHOR)
        console.log('https://twitter.com/intent/tweet?text="' + quote.QUOTE + '" ' + quote.AUTHOR)
    });
};

function copyText() {
    let text = '"' + document.getElementById('text').innerHTML + '" ' + document.getElementById('author').innerHTML;
    navigator.clipboard.writeText(text);
}