# One Life Wellness - Frontend

Welcome to the One Life Wellness frontend application. This project serves as the user interface for our wellness platform, delivering engaging content about human health, life balance, and detailed anatomical knowledge.

## 🛠️ Technology Stack

### Core Technologies
- **Framework**: React.js
- **Bundler**: Vite
- **Routing**: React Router v6+
- **Styling**: CSS Modules / Global CSS
- **State Management**: Context API (optional for global state)

### SEO Features
- Meta tags and descriptions for better search engine visibility.
- Semantic HTML for accessibility and improved ranking.

## 🚀 Features

### Static Pages
- **Home**: A welcoming page with links to blogs, anatomy content, and featured information.
- **About Us**: Mission, values, and the team behind One Life Wellness.
- **Contact Us**: A contact form to reach out.
- **Policies**: Privacy policy and terms of service.

### Dynamic Pages
- **Blog**: Blog listing page and detailed blog post pages.
- **Anatomy**: Pages for male and female anatomy across different age groups.

### Additional Features
- **SEO Optimization**: Comprehensive meta tags for better search engine visibility.
- **Preloader Animation**: Improves user experience during page load.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile.

## 🛠️ Setup and Installation

### Prerequisites
- Node.js (v16 or above)
- npm or yarn

### Steps to Set Up
1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/one-life-wellness-frontend.git
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd one-life-wellness-frontend
    ```

3. **Install Dependencies**:

    ```bash
    npm install
    ```

4. **Run the Development Server**:

    ```bash
    npm run dev
    ```

5. **Open the Application**: Visit `http://localhost:5173` in your browser.

## 📦 Installed Packages
Here are the key packages used in this project:

- `react` – JavaScript library for building user interfaces
- `react-dom` – React package for DOM manipulation
- `react-router-dom` – Declarative routing for React
- `vite` – Next-generation, fast bundler and development server
- `react-helmet` – For managing changes to the document head (e.g., SEO optimizations)
- `classnames` – Utility for conditionally joining class names
- `axios` – Promise-based HTTP client for making requests
- `react-icons` – Library for popular icons in React

## 🖌️ Styling and Customization

### Theming
- Colors and fonts are managed in `styles/variables.css`.
- You can customize the global styles in `styles/globals.css`.

### Reusable Components
- Common components like `Header`, `Footer`, and `Preloader` can be found in the `components/` directory.

## 📈 SEO Best Practices
- Use descriptive meta titles and descriptions in the Helmet for each page.
- Ensure all images have alt attributes.
- Use structured data for better SERP visibility (optional).

## 🧪 Testing
To ensure a bug-free experience:

- **Unit Testing**: Use tools like Jest or React Testing Library.
- **E2E Testing**: Integrate Cypress for comprehensive testing.

## 🔧 Build for Production
To create a production build:

```bash
npm run build
# olw-frontend
