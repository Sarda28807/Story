<p align="center">
  <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1920&auto=format&fit=crop" alt="Dark Atmospheric Banner" width="100%" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
</p>

<h1 align="center">STORY LINE</h1>
<p align="center">
  <em>A Story Between Shadows & Love</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Architecture-Single_Page_Application-black?style=for-the-badge&logo=html5" alt="Architecture">
  <img src="https://img.shields.io/badge/Database-Firebase_Firestore-red?style=for-the-badge&logo=firebase" alt="Database">
  <img src="https://img.shields.io/badge/Styling-Custom_CSS3_3D-darkred?style=for-the-badge&logo=css3" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla_ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS">
</p>

<br>

<p align="center">
  <strong>An immersive, interactive psychological horror-romance built specifically for the modern web.</strong>
</p>

---

## ✦ The Narrative

Some stories are not just read; they are felt. **Nandini** is a psychological horror-romance narrative built as a beautifully interactive web experience. It tracks a chilling sequence of events across eight distinct days, blending the warmth of everyday life with a terrifying descent into a supernatural haunting.

Designed to replicate the physical sensation of reading a diary, the application immerses the reader into an atmospheric, dark-gothic interface where the line between reality and the supernatural blurs.

## ✦ Immersive Features

* **3D Page-Turning Interface**
  A custom-built HTML and CSS rendering engine that replicates the physical physics of turning pages in a diary. The application executes a seamless Single-Page Application (SPA) experience without requiring heavy modern frameworks.

* **Global Real-Time Readers' Corner**
  Powered by Firebase Firestore, this application features a persistent, globally synchronized commenting system. Readers can leave thoughts, discuss the plot, and suggest changes on every individual chapter page in real-time.

* **Atmospheric Particle Engine**
  The background utilizes a lightweight JavaScript particle generator that renders dynamic ambient particles and flickering candle halos, creating an interactive and persistent sense of depth.

* **Hidden Developer Control**
  Equipped with a covert management mode allowing administrators to authenticate and moderate the live database directly from the frontend interface without exposing backend administrative tools to the public.

## ✦ Technical Architecture

This project has been heavily refactored for maximum performance and code hygiene. The monolithic interface was deconstructed into a modular separation of concerns:

- **`index.html`**: The skeletal framework and 3D bounding boxes.
- **`storyData.js`**: The central narrative repository containing the injected HTML strings, ensuring the `index.html` file remains entirely clutter-free.
- **`styles.css`**: Houses all custom UI tokens, variables, typography, and complex 3D transform animations.
- **`script.js`**: Handles the state management, Firebase realtime listeners, DOM injection, and navigation logic.

## ✦ Getting Started & Deployment

This application is entirely static on the frontend and requires zero server-side compilation, making it incredibly lightweight and fast.

1. Clone or download the repository.
2. Connect the standard directory to a hosting provider such as **Netlify** or **Vercel**.
3. Deploy directly from the main directory.
4. Ensure the Firebase database rules are correctly configured to allow public read/write access for community engagement, or restricted via custom authentication rules.

---

<p align="center">
  <br>
  <em>"Every darkness ends. Every story finds its morning."</em>
</p>
