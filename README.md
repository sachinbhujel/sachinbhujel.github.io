# NextJS Portfolio Template
A minimal, clean portfolio template built with Next.js. Perfect for developers who want a simple yet professional online presence without the complexity.

## Features
- 🚀 Fast and lightweight
- 📱 Fully responsive
- 🎨 Clean, minimal design
- 🌙 Dark/Light mode
- ⚡ Easy to customize

## Tech Stack
- Next.js 14
- Tailwind CSS
- JavaScript
- DaisyUI

## Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSachinbhujel%2FNextJS-Portfolio-Template)


## Customization
Edit `src/data/data.js` to add your information:
```
export const about = {
  name: "Your Name",
  role: "Your Role",
  about: "Your bio and description...",
  email: "your.email@example.com"
};

export const skills = [
  { name: "Html", icon: "/html.svg" },
  { name: "React", icon: "/react.svg" }
];

export const socials = {
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername"
};

export const projects = [
  {
    title: "Project Name",
    description: "Brief description of your project",
    tags: ["React", "CSS", "JavaScript"],
    link: "https://your-project.com"
  }
];

export const experience = [
    {
        title: "Your Title",
        description: "Your Descriptions",
        date: "Date",
    }
];

export const blogs = [
    {
        title: "Your Blog Title",
        date: "Date",
        link: "#",
    }
];
```
