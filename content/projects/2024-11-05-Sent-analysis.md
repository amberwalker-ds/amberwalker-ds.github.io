<!-- title: Natural Language Processing: Sentiment Analysis of Earnings Call Transcripts -->
<!-- featured_image: https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/RCL_Sentiment.png-->
<!-- categories: NLP, stock_prediction -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/wordcloud.jpeg" 
    alt="Sentiment Analysis Visualization" width="1000" height="700">
</figure>
<body>
    <p>
        Ever wondered how CEOs and CFOs spin their words during tough times? For this project, I teamed up with two of my colleagues from grad school to dig into 
        the world of corporate earnings calls and uncover how these executives adjust their sentiment during economic crises. Spoiler alert: 
        CEOs tend to stay optimistic (sometimes overly so), while CFOs give us the cold, hard truth.
    </p>
        We scraped earnings call transcripts from Fool.com using a custom Python pipeline and paired them with historical stock prices 
        (thank you, yfinance). Then came the fun part—cleaning the raw text. Think removing HTML tags, lowercase conversion, filtering out stop words, 
        and even stemming (because “analyze” and “analyzing” don’t need to be treated like strangers). All this was powered by BeautifulSoup, NLTK, 
        and trusty Pandas.
    <p>    
        For the analysis, we leaned on the Loughran-McDonald Sentiment Dictionary, a super cool tool tailored for financial texts. With this, we 
        scored the transcripts for positivity, negativity, and a mix of other vibes. The big question? Whose sentiment—CEO or CFO—lines up better 
        with actual stock performance? Using regression analysis, we found that CFOs are generally more accurate predictors of what’s coming next. 
        Sorry, CEOs, your optimism doesn’t always pay off.
    </p>
    <p>
        By applying methods such as web scraping, sentiment analysis using the Loughran-McDonald Sentiment Analyzer, and regression analysis, 
        we explored how sentiment from these executives reflects real-world stock performance. We discovered that CFOs consistently provide more 
        accurate reflections of company performance compared to CEOs, particularly during economic downturns.
    </p>
    <p>
        Check out my GitHub repo for the full code and feel free to explore how we put it all together.
        <a href="https://github.com/amberwalker-ds/Sentiment-Analysis-of-Earnings-Calls" target="_blank">
            <img src="https://img.shields.io/badge/GitHub-View%20Project-blue?logo=github" alt="View on GitHub">
        </a>
    </p>
    <div class="comparison-container">
        <p>Check out the plots below showcasing the sentiment trends and their correlation with stock performance over time.</p>
        <figure>
            <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/RCL_Sentiment.png" 
            alt="sentiment analysis" width="1000" height="700">
            <figcaption>Royal Caribbean CEO and CFO Sentiment Score &
                Share Price Over Time with COVID Periods</figcaption>
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/DAL_SentimentScore_SharePrice.png" alt="sentiment analysis" width="1000" height="700">
            <figcaption>Delta Air Lines CEO and CFO Sentiment Score &
                Share Price Over Time with COVID Periods.</figcaption>
        </figure>
    </div>
</body>
</html>
