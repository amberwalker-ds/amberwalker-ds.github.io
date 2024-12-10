<!-- title: Used Car Price Prediction -->
<!-- featured_image: https://raw.githubusercontent.com/amberwalker-ds/amberwalker-ds.github.io/master/assets/images/cars.jpg-->
<!-- categories: price_prediction -->
<body>
    <p> This project is part of a larger initiative I’m working on for my contracted role as a data scientist. The goal? To build a machine learning model that predicts the market price of used cars and helps identify the best car listing deals in Latvia. 🚘
    </p>
    <p>
    For this milestone, I deployed my first AI-powered web service using Flask, Docker, and Google Cloud. From handling features like mileage and fuel type to finding the best car deals, this project gave me hands-on experience building, testing and deploying machine learning models in production! 🌟
    </p>
    <div class="container">
        <p>Enter the details of your car below to get an estimated market price. This tool uses a machine learning model trained on a comprehensive dataset of used cars.</p>   
        <form id="prediction-form">
            <div class="form-group">
                <label for="make">Make:</label>
                <input type="text" id="make" name="make" placeholder="e.g., Toyota" required>
            </div>
            <div class="form-group">
                <label for="model">Model:</label>
                <input type="text" id="model" name="model" placeholder="e.g., Corolla" required>
            </div>
            <div class="form-group">
                <label for="year">Year:</label>
                <input type="number" id="year" name="year" placeholder="e.g., 2020" required>
            </div>
            <div class="form-group">
                <label for="mileage">Mileage (in KM):</label>
                <input type="number" id="mileage" name="mileage" placeholder="e.g., 50000" required>
            </div>
            <div class="form-group">
                <label for="fuel_type">Fuel Type:</label>
                <select id="fuel_type" name="fuel_type" required>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
            </div>
            <div class="form-group">
                <label for="engine">Engine Size (in liters):</label>
                <input type="number" step="0.1" id="engine" name="engine" placeholder="e.g., 1.8" required>
            </div>
            <div class="form-group">
                <label for="gear_type">Gear Type:</label>
                <select id="gear_type" name="gear_type" required>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                </select>
            <button type="submit">Get Price</button>
        </form>       
        <div id="output" class="output" style="display: none;">
            <h3>Predicted Price:</h3>
            <p id="predicted-price">...</p>
        </div>
    </div>
    <script>
        const form = document.getElementById('prediction-form');
        const outputDiv = document.getElementById('output');
        const predictedPrice = document.getElementById('predicted-price');
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            // show loading spinne
            spinner.style.display = 'block';
            outputDiv.style.display = 'none';           
            const formData = new FormData(form);
            const data = {
                make: formData.get('make'),
                model: formData.get('model'),
                year: parseInt(formData.get('year')),
                mileage: parseInt(formData.get('mileage')),
                fuel_type: formData.get('fuel_type'),
                engine: parseFloat(formData.get('engine')),
                gear_type: formData.get('gear_type')
            };
            try {
            const response = await fetch('https://used-car-price-pred-app-488572750283.us-central1.run.app/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data) // Ensure `data` is formatted like the Postman example
            });
                if (response.ok) {
                    const result = await response.json();
                    predictedPrice.textContent = `$${result.predicted_price}`;
                    outputDiv.style.display = 'block';
                } else {
                    predictedPrice.textContent = 'Error predicting price. Please try again.';
                    outputDiv.style.display = 'block';
                }
            } catch (error) {
                predictedPrice.textContent = 'Error connecting to the server. Please try again.';
                outputDiv.style.display = 'block';
            } finally {
                spinner.style.display = 'none';
            }
        });
    </script>
</body>
</html>
