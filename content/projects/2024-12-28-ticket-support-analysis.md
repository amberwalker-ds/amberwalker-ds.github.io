<!-- title: Interactive Ticket Insights and Trend Analysis Tableau Dashboard -->
<!-- featured_image: https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/trend-analysis.PNG-->
<!-- categories: data_analysis -->
<!-- <figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/trend-analysis.PNG" 
    alt="data analysis" width="1000" height="700">
</figure> -->
<body>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Ticket Insights and Trend Analysis Dashboard</title>
</head>
<body>
<div>
    <p>
        This was an exciting project where I utilized <strong>sentiment analysis</strong> and 
        <strong>interactive BI visualizations</strong> to optimize customer support operations. 
        As a project coordinator, one of the recurring challenges we faced was managing client 
        support tickets—primarily those reporting issues with their automation bots.
    </p>
    <p>
        Over time, as I processed these tickets, I started noticing patterns in the data. 
        Many of the issues were simple fixes that didn’t require our engineers to spend time investigating. 
        To address this, I conducted a basic data analysis using Monday.com and MS Excel to visualize 
        the proportion of tickets that could be resolved with proper FAQ documentation. Armed with these 
        insights, my team and I created detailed, client-facing documentation. The result? A 20% reduction 
        in ticket volume as clients were now equipped to solve these issues independently.
    </p>
    <p>
        This project inspired a personal follow-up analysis. Since I couldn’t use proprietary data, 
        I turned to publicly available datasets and applied more advanced techniques. I upgraded my 
        tools from Excel to <strong>Python</strong> and <strong>Tableau</strong>, performing a detailed 
        analysis on a dataset of over 50,000 anonymized support tickets. I used advanced 
        <strong>Natural Language Processing (NLP)</strong> techniques and built a 
        <strong>comprehensive Tableau dashboard</strong> to uncover actionable insights and trends.
    </p>
    <p>
        The dataset used for this project can be found 
        <a href="https://github.com/karolzak/support-tickets-classification#22-dataset" class="modern-link">
        here</a>.
    </p>
</div>
    <h2>Sentiment Analysis</h2>
    <p>
        I first built a <strong>sentiment analysis pipeline</strong> to evaluate the emotional tone of support tickets based on their textual descriptions. 
        Leveraging a pre-trained model from Hugging Face (<em>cardiffnlp/twitter-roberta-base-sentiment-latest</em>), sentiment scores (positive, neutral, negative) were calculated for 
        each ticket. I then calculated a custom sentiment score by normalizing the probabilities of positive and negative sentiments, enabling the identification of high-risk tickets with negative tones. 
    </p>
    <p>
        These sentiment scores were merged onto the metadata such as urgency and impact, to build a sort of <strong>sentiment-driven escalation framework</strong>. This framework 
        helps to make sure that tickets needing immediate attention are prioritized effectively.
    </p>
    <h2>Interactive Tableau Dashboard</h2>
    <p>Below you will find <strong>interactive Tableau dashboard</strong>, if you would like to explore the data yourself. More information about key components of the dashboard can be found below the dashboard.
    </p>
    <div class='tableauPlaceholder' id='viz1735368220011' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;In&#47;InteractiveTicketInsightsandTrendAnalysisDashboard&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='InteractiveTicketInsightsandTrendAnalysisDashboard&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;In&#47;InteractiveTicketInsightsandTrendAnalysisDashboard&#47;Dashboard1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1735368220011');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else { vizElement.style.width='100%';vizElement.style.height='1677px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
    <h3>1. Top 10 Business Departments with the Lowest Sentiment Scores</h3>
    <p>
        This bar chart highlights the business departments associated with the most negative sentiment. These insights help managers pinpoint areas where customers are 
        expressing dissatisfaction, allowing for quick action to address recurring issues and improve customer experience.
    </p>
    <h3>2. Top 10 Business Departments with the Highest Impact</h3>
    <p>
        A horizontal bar chart visualizes the business departments handling tickets with the highest average impact. This allows teams to focus resources on the areas 
        that matter most, ensuring high-impact issues are resolved fast and effectively.
    </p>
    <h3>3. Word Count per Category and Urgency</h3>
    <p>
        This visualization explores the average word count of ticket bodies across different categories and urgency levels. Higher word counts indicate more urgent tickets (as you can see in the dashboard by filtering by urgency). By understanding this pattern, support teams can better allocate resources to handle tickets that contain more words.
    </p>
    <h3>4. Percentage of Tickets by Urgency and Category</h3>
    <p>
        A pie chart provides a clear snapshot of the distribution of tickets across urgency levels and categories. This helps stakeholders understand the workload 
        distribution and prioritize tickets based on urgency. We can see that category 3, has the highest volume of tickets.
    </p>
    <h3>5. Average Impact per Category</h3>
    <p>
        A bar chart displays the average impact scores for each ticket category, providing insight into which categories frequently require escalations. This information 
        can be used to guide training, improve workflows, and reduce bottlenecks in high-impact areas.
    </p>
    <h3>6. Interactive Filters</h3>
    <p>
        The dashboard includes filters for <strong>category</strong>, <strong>business service</strong>, and <strong>urgency level</strong>, allowing you to dynamically 
        explore trends and drill down into specific subsets of data. These interactive elements allow stakeholders to uncover targeted insights without overwhelming them 
        with a bunch of technical information.
    </p>
    <h2>Tools and Techniques</h2>
    <p>
        <strong>Natural Language Processing:</strong> Preprocessing, sentiment scoring, and custom score calculations using Python (Hugging Face Transformers, Pandas, NumPy).<br>
        <strong>Visualization:</strong> Tableau for creating interactive and intuitive dashboards.<br>
        <strong>Data Insights:</strong> Combined textual and numerical data analysis for comprehensive trend evaluation.
    </p>
    <p>
    </p>
</body>
</html>
