🌐 Animated Portfolio Website
<div align="center"> <img width="100%" alt="Portfolio Banner" src="https://github.com/user-attachments/assets/5d138643-b234-44ff-b4d7-971bfb7d47e3" />
🚀 Live Demo

🔗 https://bambamgupta.vercel.app/

</div>
✨ Overview

This is a fully responsive and beautifully animated personal portfolio website built using React.js + Tailwind CSS.
It includes smooth animations, modern UI, clean code structure, and is easy to customize.
Perfect for showcasing your skills, projects, experience, and contact information.

🛠️ Tech Stack

⚛️ React.js

🎨 Tailwind CSS

📡 EmailJS (for contact form)

🚀 Vercel (Deployment)

🔀 React Router DOM

✨ React Icons, Typing Effect, Parallax Tilt

🔥 Features

📱 Fully Responsive design

✨ Smooth animations & transitions

🧩 Modular and clean component structure

🎯 Built with Tailwind utility classes

📨 Working Contact Form using EmailJS

⚡ Fast performance (Vite + React)

💼 Dedicated sections: Home, About, Skills, Projects, Contact

📁 Project Structure
<div align="center"> <img width="80%" src="https://github.com/user-attachments/assets/523c0ca2-5aa5-4b67-9811-af201ac6bdf0" /> </div>
📦 Installation & Setup

Clone the repository:

git clone https://github.com/your-username/portfolio.git
cd portfolio


Install dependencies:

npm install


Start development server:

npm run dev


Build for production:

npm run build


Preview production build:

npm run preview

⚙️ Environment Setup (EmailJS)

Create an account on EmailJS → Create a service → Create a template → Get Public Key.

Add your EmailJS credentials in the contact form:

emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY"
);

📚 Dependencies
"dependencies": {
  "@emailjs/browser": "^4.4.1",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-icons": "^5.4.0",
  "react-parallax-tilt": "^1.7.282",
  "react-router-dom": "^7.1.3",
  "react-toastify": "^11.0.3",
  "react-typing-effect": "^2.0.5"
}

🚀 Deployment

Easily deploy on Vercel:

npm run build


Then push to GitHub → Import GitHub repo into Vercel → It deploys automatically. 🎉

🤝 Contributing

Contributions are welcome!
Feel free to open issues or submit pull requests to improve the project.

⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub — it motivates me! ❤️

👨‍💻 Made with ❤️ by Bambam Gupta
