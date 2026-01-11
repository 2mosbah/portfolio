# Portfolio Project

A modern, interactive developer portfolio built with the latest web technologies. This project showcases a professional journey, technical skills, and creative projects using 3D elements and smooth animations.

## 🚀 Features

- **3D Hero Section**: Immersive 3D experience using React Three Fiber.
- **Smooth Animations**: powered by GSAP for a polished user feel.
- **Responsive Design**: Fully responsive layout built with Tailwind CSS v4.
- **Interactive Tech Stack**: Dynamic visualization of skills and technologies.
- **Project Showcase**: detailed view of projects with links and descriptions.
- **Contact Form**: Functional contact form integrated with EmailJS.
- **Dark Theme**: Sleek and modern dark-themed UI.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D & Graphics**:
  - [Three.js](https://threejs.org/)
  - [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
  - [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [GSAP](https://gsap.com/)
- **Utilities**:
  - [react-responsive](https://github.com/yocontra/react-responsive)
  - [@emailjs/browser](https://www.emailjs.com/)

## 📦 Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

## 💻 Usage

### Development Server

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

### Build via Production

Build the application for production:

```bash
npm run build
```

### Preview Production Build

Preview the built application locally:

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components (NavBar, Buttons, etc.)
├── sections/         # Main page sections (Hero, Contact, Experience, etc.)
├── constants/        # Configuration and static data
├── App.jsx           # Main application entry point
├── main.jsx          # React DOM entry point
└── index.css         # Global styles and Tailwind directives
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
