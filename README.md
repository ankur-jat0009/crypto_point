# CryptoPoint

**CryptoPoint** is a responsive cryptocurrency marketplace web app that allows users to explore, search, and track live cryptocurrency data. It displays detailed coin information, including historical price charts, market cap, and 24-hour statistics, with multi-currency support.

---

## Live Demo

Check out the live project here: [CryptoPoint Live](https://cryptopoint0009.netlify.app/)

---

## Tech Stack

- **Frontend:** React.js, React Router DOM, Context API  
- **Data Fetching:** Axios  
- **Data Visualization:** React Google Charts  
- **Styling:** CSS, Google Fonts  
- **API:** CoinGecko API  
- **Build & Deployment:** Vite, Netlify  

---

## Features

- **Responsive design:** Works seamlessly on desktop and mobile devices.  
- **Live cryptocurrency data:** Fetches real-time coin details from CoinGecko API.  
- **Search functionality:** Filter coins by name on the homepage.  
- **Currency switcher:** Supports INR, USD, EUR.  
- **Dynamic routing:** Navigate from homepage to detailed coin pages.  
- **Historical charts:** Visualize 10-day price trends using Google Charts.  

---

## Project Structure

```

src/
├── App.jsx
├── main.jsx
├── index.css
├── context/
│   └── Coincontext.jsx
├── Pages/
│   ├── Home/Home.jsx
│   └── Coin/Coin.jsx
├── components/
│   ├── Navbar/Navbaar.jsx
│   ├── Footer/Footer.jsx
│   └── Linechart/Linechart.jsx

````

---

## How to Run Locally

1. **Clone the repository:**
```bash
git clone https://github.com/ankur-jat0009/crypto_point.git
cd crypto_point
````

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. Open your browser and go to:

```
http://localhost:5173
```

---

##  Usage

* Browse the homepage to view the top cryptocurrencies.
* Use the search bar to filter coins by name.
* Click on a coin to see detailed information, including price, rank, market cap, 24-hour stats, and a 10-day price chart.
* Switch currency from the navbar to view prices in INR, USD, or EUR.

---

## Author

**Ankur Jat**

* GitHub: [ankur-jat0009](https://github.com/ankur-jat0009)
* Portfolio / Live Project: [CryptoPoint](https://cryptopoint0009.netlify.app/)

```
