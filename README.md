# 🍋 Little Lemon Restaurant - Web Application

> **Meta Front-End Developer Professional Certificate — Capstone Project**  
> **Author:** Ayoub Kilwe  
> **Live Demo:** [https://ayoubkilwe.github.io/little-lemon](https://github.com/AyoubKilwe/little-lemon)

---

## 📖 Project Overview

**Little Lemon** is a family-owned Mediterranean restaurant based in Chicago, Illinois. This modern, fully responsive web application allows customers to browse authentic Mediterranean culinary offerings, place online delivery orders, and reserve dining tables seamlessly with real-time slot availability.

Built from the ground up using **React.js**, the project adheres to the highest industry standards of **semantic HTML5**, **accessibility (WCAG / WAI-ARIA)**, **responsive UI/UX design**, and robust **unit testing suites**.

---

## ✨ Key Features

* **Table Reservation System**:
  * Date, time slot, guest count, seating preference (Indoor, Patio, Booth), and occasion selection.
  * Real-time client-side form validation with accessible error hints and submit protection.
  * State management powered by `useReducer` and dynamic API slot calculation (`fetchAPI` & `submitAPI`).
  * Instant reservation confirmation receipts with unique confirmation reference codes.
* **Interactive Menu & Live Search**:
  * Filter dishes by category (*All, Starters, Mains, Desserts, Beverages*).
  * Real-time keyword search bar for instant dish discovery.
* **Online Delivery & Cart System**:
  * One-click *"Add to Order"* and *"Order a Delivery"* actions.
  * Non-blocking Toast notification system and real-time cart item counter.
* **My Bookings History**:
  * Local storage persistence to retain and review confirmed table reservations.
  * Ability to cancel or manage active reservations.
* **Responsive UI/UX & Brand Design**:
  * Tailored Little Lemon color palette (`#495E57` Dark Green, `#F4CE14` Lemon Yellow).
  * Styled with typography pairing of **Markazi Text** (Headings) and **Karla** (Body).
  * Fully responsive design optimized for mobile, tablet, and desktop viewports.
* **SEO & Open Graph Protocol**:
  * Complete metadata tags, Twitter cards, and Open Graph previews.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
|---|---|
| **Front-End Framework** | React.js (Hooks: `useState`, `useReducer`, `useEffect`) |
| **Styling** | Modern Vanilla CSS3, CSS Grid, Flexbox, CSS Custom Properties |
| **Typography** | Google Fonts (*Markazi Text*, *Karla*) |
| **Testing** | Jest, React Testing Library (`@testing-library/react`) |
| **Version Control** | Git & GitHub |

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have **Node.js** (v16 or higher) and **npm** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AyoubKilwe/little-lemon.git
   cd little-lemon
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   *or*
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🧪 Running Unit Tests

To run the automated Jest test suite for the form validation, navigation, and reducer state logic:

```bash
npm test
```

To run tests once without interactive watch mode:
```bash
npm test -- --watchAll=false
```

---

## 📁 Project Structure

```text
little-lemon/
├── public/
│   ├── favicon.ico
│   ├── index.html           # SEO, Open Graph & Google Fonts
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About.js         # Mario & Adrian story & visuals
│   │   ├── BookingForm.js   # Table reservation form & client-side validation
│   │   ├── BookingPage.js   # Booking view container
│   │   ├── ConfirmedBooking.js # Booking confirmation summary receipt
│   │   ├── Footer.js        # 4-column semantic footer
│   │   ├── Header.js        # Branding & site header
│   │   ├── Hero.js          # Hero banner & CTA
│   │   ├── MenuPage.js      # Filterable menu & search system
│   │   ├── MyReservations.js# LocalStorage booking manager
│   │   ├── Nav.js           # Responsive navigation bar & mobile toggle
│   │   ├── Specials.js      # Highlights & delivery cards
│   │   ├── Testimonials.js  # Ratings & reviews
│   │   └── Toast.js         # Non-blocking notification toasts
│   ├── api.js               # Simulated API methods (fetchAPI, submitAPI)
│   ├── App.css              # Custom styling & responsive media queries
│   ├── App.js               # Main application controller
│   ├── App.test.js          # App integration unit tests
│   ├── BookingForm.test.js  # Form validation & reducer unit tests
│   ├── index.css            # CSS design tokens & base typography
│   └── Main.js              # State management (useReducer) & page router
├── package.json             # Project scripts & dependencies
└── README.md
```

---

## 📄 License & Attribution

Developed by **Ayoub Kilwe** as part of the **Meta Front-End Developer Professional Certificate Capstone Project**. All Little Lemon brand assets and logos belong to Meta / Coursera.