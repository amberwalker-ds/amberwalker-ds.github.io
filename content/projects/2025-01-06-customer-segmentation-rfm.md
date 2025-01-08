<!-- title: Customer Segmentation with K-Means and Tableau -->
<!-- featured_image: https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/customer-segments.PNG-->
<!-- categories: data_analysis -->
<section id="customer-segmentation">
<figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/customer-segments.PNG" 
    alt="customer-segment" width="1000" height="700">
</figure>
  <p>
    This was a really exciting project where I was able to blend my two academic backgrounds (Marketing and Data Science) to extract insights from an e-commerce clothing store dataset developed by the Google Looker team. The workflow includes data extraction and transformation using <strong>Google BigQuery</strong> and <strong>DBT (Data Build Tool)</strong>, clustering analysis with <strong>Python</strong>, and interactive visualization with <strong>Tableau</strong>.
  </p>

  <h3>Data Extraction and Transformation with DBT and Google BigQuery</h3>
  <p>
    I sourced the raw dataset from the <strong>TheLook e-commerce dataset</strong> in Google BigQuery, which contains customer behavioral data, including purchase history, order details, product categories and spending metrics. I used DBT to build a robust and reusable data transformation pipeline. 
    Using DBT, I created models to:
  </p>
  <ul>
    <li>Clean and preprocess the data to ensure consistency and accuracy.</li>
    <li>Transform raw transactional data into aggregated <strong>RFM metrics</strong> (Recency, Frequency, Monetary) as well as other features like web interactions and category proportions.</li>
  </ul>
  <p>
    Screenshots of the DBT models and pipeline showcase how transformations were designed and executed to prepare the data for clustering analysis.
  </p>
  <figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/rfm-dbt-model.PNG" 
    alt="u-net deep learning model" width="1000" height="700">
    <figcaption>This model aggregates the data to extract RFM metrics as well as returned and cancelled order ratio per person.</figcaption>
</figure>
  <figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/tenure.PNG" 
    alt="u-net deep learning model" width="1000" height="700">
    <figcaption>This model calculates each customer's tenure using the DATE_DIFF function (specifc for BigQuery).</figcaption>
</figure>
  <figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/category-proportions.PNG" 
    alt="u-net deep learning model" width="1000" height="700">
    <figcaption>This was a more complex query where I first took the sum of total sales per customer and clothing category,
     then divided total sales per category by the overall total sales per customer and pivoted the table to get the proportion of category per customer.</figcaption>
</figure>
  <figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/buying_customer.PNG" 
    alt="u-net deep learning model" width="1000" height="700">
        <figcaption>I then ran to a query to fetch only the customers that have bought and completed at least one order.</figcaption>
</figure>
  <figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/main_table.PNG" 
    alt="u-net deep learning model" width="1000" height="700">
        <figcaption>Finally I joined all of the data together (including demographics and web interactions) making sure to include only the customers who bought at least one completed item.</figcaption>
</figure>
  <h3>Clustering Analysis with Python</h3>
  <p>
    After extracting and transforming the data, I used Python for exploratory data analysis (EDA) and clustering. Specifically:
  </p>
  <ul>
    <li>
      Implemented and explored two different clustering techniques, <strong>Gaussian Mixture Model (GMM)</strong> and <strong>K-Means</strong>, to identify distinct 
      customer segments.
    </li>
    <li>
      Segmented customers based on <strong>RFM metrics</strong>, focusing on their purchase behavior and engagement.
    </li>
    <li>
      Evaluated cluster quality using the <strong>Silhouette Score</strong>, which measures how well-defined the clusters are. K-Means outperformed GMM, 
      achieving a higher Silhouette Score (0.44 vs. 0.33).
    </li>
    <li>
      Selected K-Means for final segmentation due to its better performance and more interpretable results.
    </li>
  </ul>
  Check out my GitHub repository to see the code in action:<a href="https://github.com/amberwalker-ds/customer_segmentation_project/tree/main" target="_blank">
            <img src="https://img.shields.io/badge/GitHub-View%20Project-blue?logo=github" alt="View on GitHub">
        </a>

  <p>To visualize how well the K-Means model clustered the data, I used Principal Component Analysis (PCA) to project high-dimensional data into three principal components for visualization:
    <figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/pca-kmeans-clusters.png" 
    alt="kmeans clusters" width="1000" height="700">
        <figcaption>You can make out four disctinct groups even though some data are overlapping.</figcaption>
</figure>
</p>
  <h3>Interactive Visualization with Tableau</h3>
  <p>
    To make the insights actionable, I visualized the clustered data in an interactive <strong>Tableau dashboard</strong>. The dashboard includes:
  </p>
  <ul>
    <li>A summary of the customer segments, labeled as <strong>Platinum</strong>, <strong>Gold</strong>, <strong>Silver</strong>, and <strong>Bronze</strong>.</li>
    <li>Visual comparisons of the clusters based on recency, frequency, and monetary values.</li>
    <li>Geographical insights into customer distribution and segment trends.</li>
    <li>Interactive filters to explore specific timeframes, locations, or customer attributes.</li>
  </ul>
  <section id="tier-summary">
  <p>Here is a quick <strong>Tier Summary</strong> to understand the cusotmer segements a little better.</p>
  <table border="1" cellspacing="0" cellpadding="10">
    <thead>
      <tr>
        <th>Cluster</th>
        <th>Classification</th>
        <th>Characteristics</th>
        <th>Strategy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td>Platinum</td>
        <td>High spenders, moderately active, low returns</td>
        <td>Retain loyalty with VIP benefits, exclusivity</td>
      </tr>
      <tr>
        <td>0</td>
        <td>Gold</td>
        <td>Mid-level spenders, frequent buyers, high returns</td>
        <td>Reduce returns, incentivize repeat purchases</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Silver</td>
        <td>Low spenders, infrequent buyers, recent activity</td>
        <td>Encourage repeat purchases with discounts/offers</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Bronze</td>
        <td>Dormant, low spenders, very inactive</td>
        <td>Reactivate with targeted campaigns or surveys</td>
      </tr>
    </tbody>
  </table>
</section>

  <p>Below you will find the <strong>interactive Tableau dashboard</strong>:
    </p>
    <div class='tableauPlaceholder' id='viz1736185575408' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;PR&#47;PRXCJ9YJ3&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='shared&#47;PRXCJ9YJ3' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;PR&#47;PRXCJ9YJ3&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1736185575408');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else { vizElement.style.width='100%';vizElement.style.height='1377px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
  <p>
    This visualization enables stakeholders to quickly identify high-value customers, dormant users, and actionable marketing opportunities.
  </p>

  <h3>Conclusion</h3>
  <p>
    By combining DBT for data transformation, Python for clustering analysis, and Tableau for visualization, this project delivers a comprehensive solution for customer segmentation. Next steps include a model to predict customer lifetime value, building a data pipeline and automating the workflow.
    Thanks for reading!
  </p>
</section>
