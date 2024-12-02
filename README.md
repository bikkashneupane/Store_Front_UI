# Vikiasmy's Watch Haven - Frontend

[Vikiasmy's Watch Haven](https://vikiasmy-watches.vercel.app) is the frontend of a full-stack e-commerce platform specializing in luxury watches. The user interface is designed for a seamless shopping experience, offering dynamic product listings, filters, and secure payments through Stripe.

[Docker Image](https://hub.docker.com/repository/docker/bikashneupane/vikiasmy/general) Pull the docker image from my official dockerhub, add .env files with required variables mentioned at the end of the project.

## Features:

- **Responsive Design:** Tailwind CSS for a modern, mobile-friendly UI.
- **Dynamic Product Listings:** Browse luxury watches with real-time updates.
- **Secure Payments:** Integrated Stripe for secure online transactions.
- **State Management:** Redux for managing application-wide state.
- **Cloud-Hosted Images:** Fast loading of product images hosted in the cloud.

## Tech Stack:

- **React:** Component-based architecture for building the user interface.
- **Redux:** State management for handling product data, cart, and filters.
- **Tailwind CSS:** Utility-first CSS framework for responsive design.
- **Stripe:** Payment gateway for secure checkout.

## Installation:

1. Clone the repository:

   ```bash
   git clone https://github.com/bikkashneupane/Store_Front_UI
   ```

2. Navigate to the project:

   ```bash
   cd Store_Front_UI
   ```

3. Install dependencies:

   ```bash
   yarn dev
   ```

   or

   ```bash
   npm install
   ```

4. Run the project
   ```bash
   yarn run dev
   ```
   or
   ```bash
   npm run dev
   ```

## [LinkedIn Post - Vikiasmy's Watch Haven](https://www.linkedin.com/posts/bikkashneupane_mern-react-node-activity-7233743990376820736-82qa?utm_source=share&utm_medium=member_desktop)

## Add .env file

- VITE_SERVER_API = http://localhost:8010

# VITE_SERVER_API = https://store-front-api.onrender.com

# VITE_SERVER_API = https://api-vikiasmy.bikashneupane.com

# STRIPE

- VITE_SERVER_API
- VITE_STRIPE_PK
