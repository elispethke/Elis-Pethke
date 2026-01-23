Project Title

Elis Pethke — Frontend & Mobile Engineer Portfolio

This repository contains the source code of my personal portfolio website, designed and developed to showcase my experience as a Frontend & Mobile Engineer with a strong focus on performance, user experience, modern UI, and clean architecture.

The project demonstrates real-world frontend practices, including component-based design, smooth animations, responsive layouts, and third-party integrations.

Why This Project Matters

This portfolio was built to reflect how I approach real products:

Clear UI structure and reusable components

Strong attention to UX and interaction details

Modern frontend stack used in production environments

Clean, readable, and maintainable code

It is not a template — all sections and components were designed and implemented intentionally.

Key Features

Futuristic hero section with smooth animations using Framer Motion

Responsive navigation with smooth internal scrolling (no page reloads)

About section highlighting professional background

Web and Mobile project cards showcasing different types of applications

Public contact form integrated with Formspree (no backend required)

Success feedback message without layout shift

Footer with external social links opening in a new tab

Fully responsive design for desktop and mobile

Tech Stack

This project was built using a modern frontend stack:

Vite – fast development and build tooling

React – component-based UI development

TypeScript – type safety and scalability

Tailwind CSS – utility-first styling

shadcn/ui – accessible and reusable UI components

Framer Motion – animations and micro-interactions

Formspree – public contact form integration

Getting Started (Local Development) Prerequisites

Node.js (recommended via nvm)

npm

Installation

Clone the repository

git clone https://github.com/elispethke/Elis-Pethke.git

Navigate to the project directory

cd Elis-Pethke

Install dependencies

npm install

Start the development server

npm run dev

The application will be available at: http://localhost:5173

Project Structure

The project follows a clean and scalable structure:

src/ ├─ components/ │ ├─ Hero.tsx │ ├─ Navbar.tsx │ ├─ About.tsx │ ├─ WebCard.tsx │ ├─ MobileCard.tsx │ ├─ Contact.tsx │ └─ Footer.tsx ├─ index.css ├─ main.tsx

Each file represents a focused, reusable UI component or page section.

Contact Form Implementation

The contact form is implemented using React Hook Form and fetch, integrated with Formspree:

Client-side validation

Clear success feedback to the user

No layout shift on submit

No custom backend required

This approach reflects how I handle public forms in real projects.

Deployment

The project can be deployed on any modern static hosting platform, such as:

Vercel

Netlify

Cloudflare Pages

To generate a production build:

npm run build

About Me

Elis Pethke Frontend & Mobile Engineer

I focus on building modern, performant, and user-centered interfaces, transforming complex ideas into intuitive digital experiences. I value clean code, collaboration, and continuous learning.

Contributing

This is a personal project, but feedback and suggestions are welcome. Feel free to open an issue to report bugs or propose improvements.

License

This project is licensed under the MIT License. You are free to study and adapt the code for learning purposes.

Why this README works well for recruiters

Keywords like React, TypeScript, Frontend Engineer, Performance, UX, UI, Framer Motion help SEO on GitHub

Clear explanation of what you built and why

Shows technical decisions, not just visuals

Reads like a real production project, not a tutorial