let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'blueviolet', 'purple', 'pink']
            
            let quotes = [
                {QUOTE: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', AUTHOR: '-Nelson Mandela'},
                {QUOTE: "The way to get started is to quit talking and begin doing.", AUTHOR: '-Walt Disney'},
                {QUOTE: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", AUTHOR: '-Steve Jobs'}
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

