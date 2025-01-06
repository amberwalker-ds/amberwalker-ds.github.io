<!-- title: Customer Segmentation with K-Means and Tableau -->
<!-- featured_image: https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/customer-segments.png-->
<!-- categories: data_analysis -->
<section id="customer-segmentation">
<figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/customer-segments.png" 
    alt="u-net deep learning model" width="1000" height="700">
</figure>
  <p>
    This was a really exciting project where I was able to blend my two backgrounds (marketing and data science) to extract insights from an e-commerce dataset. The workflow includes data extraction and transformation using <strong>Google BigQuery</strong> and <strong>DBT (Data Build Tool)</strong>, clustering analysis with <strong>Python</strong>, and interactive visualization with <strong>Tableau</strong>.
  </p>

  <h2>Data Extraction and Transformation with DBT and Google BigQuery</h2>
  <p>
    I sourced the dataset from the <strong>TheLook e-commerce dataset</strong> in Google BigQuery, which contains customer behavioral data, including purchase history, recency, frequency, and spending metrics. I used DBT to build a robust and reusable data transformation pipeline. 
    Using DBT, I created models to:
  </p>
  <ul>
    <li>Extract data directly from Google BigQuery tables.</li>
    <li>Clean and preprocess the data to ensure consistency and accuracy.</li>
    <li>Transform raw transactional data into aggregated <strong>RFM metrics</strong> (Recency, Frequency, Monetary).</li>
  </ul>
  <p>
    Screenshots of the DBT models and pipeline showcase how transformations were designed and executed to prepare the data for clustering analysis.
  </p>
  <figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/rfm-dbt-model.PNG" 
    alt="u-net deep learning model" width="1000" height="700">
</figure>
  <figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/tenure.PNG" 
    alt="u-net deep learning model" width="1000" height="700">
</figure>
  <figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/category-proportions.PNG" 
    alt="u-net deep learning model" width="1000" height="700">
</figure>
  <figure>
    <img src="https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/data-w-dates.PNG" 
    alt="u-net deep learning model" width="1000" height="700">
</figure>
  <h2>Clustering Analysis with Python</h2>
  <p>
    After extracting and transforming the data, I used Python for exploratory data analysis (EDA) and clustering. Specifically:
  </p>
  <ul>
    <li>
      Implemented clustering techniques, including <strong>Gaussian Mixture Model (GMM)</strong> and <strong>K-Means</strong>, to identify distinct customer segments.
    </li>
    <li>
      Segmented customers based on <strong>RFM metrics</strong>, focusing on their purchase behavior and engagement.
    </li>
    <li>
      Evaluated cluster quality using the <strong>Silhouette Score</strong>, which measures how well-defined the clusters are. K-Means outperformed GMM, achieving a higher Silhouette Score (0.44 vs. 0.33).
    </li>
    <li>
      Selected K-Means for final segmentation due to its better performance and more interpretable results.
    </li>
  </ul>

  <h2>Interactive Visualization with Tableau</h2>
  <p>
    To make the insights actionable, I visualized the clustered data in an interactive <strong>Tableau dashboard</strong>. The dashboard includes:
  </p>
  <ul>
    <li>A summary of the customer segments, labeled as <strong>Platinum</strong>, <strong>Gold</strong>, <strong>Silver</strong>, and <strong>Bronze</strong>.</li>
    <li>Visual comparisons of the clusters based on recency, frequency, and monetary values.</li>
    <li>Geographical insights into customer distribution and segment trends.</li>
    <li>Interactive filters to explore specific timeframes, locations, or customer attributes.</li>
  </ul>
  <p>Below you will find the <strong>interactive Tableau dashboard</strong>:
    </p>
    <div class='tableauPlaceholder' id='viz1736151538505' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Th&#47;ThelookCustomerSegmenetation&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='ThelookCustomerSegmenetation&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Th&#47;ThelookCustomerSegmenetation&#47;Dashboard1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1736151538505');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else { vizElement.style.width='100%';vizElement.style.height='1427px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
  <p>
    This visualization enables stakeholders to quickly identify high-value customers, dormant users, and actionable marketing opportunities.
  </p>

  <h2>Conclusion</h2>
  <p>
    By combining DBT for data transformation, Python for clustering analysis, and Tableau for visualization, this project delivers a comprehensive solution for customer segmentation. Next steps include a model to predict customer lifetime value, building a data pipeline and automating the workflow.
    Thanks for reading!
  </p>
</section>
