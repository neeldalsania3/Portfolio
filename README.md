# Neel Dalsania - Portfolio Website

A modern, production-ready portfolio website built with React.js, TypeScript, and Tailwind CSS. Features a stunning dark-first design with glassmorphism effects, smooth animations, and a working contact form.

## 🚀 Features

- **Modern Tech Stack**: React.js (Vite), TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach, tested across all screen sizes
- **Dark/Light Theme**: Automatic theme detection with manual toggle
- **Smooth Animations**: Framer Motion for elegant transitions and scroll reveals
- **Working Contact Form**: Integrated with Web3Forms (no backend required)
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Performance**: Code splitting, lazy loading, optimized for Lighthouse scores
- **Accessibility**: WCAG AA compliant, keyboard navigation, screen reader support

## 📦 Tech Stack

- **Frontend**: React.js 19, TypeScript, Vite
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel (static site)

## 🛠️ Installation

### Prerequisites

- Node.js 16+ and npm

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Get your Web3Forms access key**
   - Visit [https://web3forms.com](https://web3forms.com)
   - Enter your email: `neeldalsania333@gmail.com`
   - Check your email for the access key
   - Copy the access key to `.env`:
     ```env
     VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
     ```

5. **Add your resume (optional)**
   - Place your `resume.pdf` file in the `public/` folder
   - The "Download Resume" button links to `/resume.pdf`

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🎨 Customization

### Editing Content

All content is centralized in `src/data/portfolio.ts`. Edit this file to update:

- Personal information (name, email, social links)
- About section text and stats
- Skills and technologies
- Work experience
- Projects
- Education

### Editing Styles

- **Theme colors**: Edit `tailwind.config.js` and `src/index.css`
- **Fonts**: Update Google Fonts links in `index.html`
- **Components**: Each section is a separate component in `src/components/`

### Adding Projects

Edit the `projects` array in `src/data/portfolio.ts`:

```typescript
{
  title: "Your Project",
  description: "Project description...",
  technologies: ["React", "Node.js"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  featured: true,
}
```

## 🔒 Securing Web3Forms

After deployment, restrict your Web3Forms access key to your domain:

1. Log in to [Web3Forms Dashboard](https://web3forms.com/dashboard)
2. Navigate to your access key settings
3. Add your domain (e.g., `neeldalsania.vercel.app`)
4. Enable domain restriction

This prevents unauthorized use of your access key.

## 🚀 Deployment to Vercel

### Method 1: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add environment variable**
   - During deployment, Vercel will prompt for environment variables
   - Or add it later in the Vercel dashboard:
     - Go to Project Settings → Environment Variables
     - Add `VITE_WEB3FORMS_ACCESS_KEY` with your access key
     - Redeploy the project

### Method 2: GitHub Integration

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable:
     - Name: `VITE_WEB3FORMS_ACCESS_KEY`
     - Value: Your Web3Forms access key
   - Click "Deploy"

3. **Automatic deployments**
   - Every push to `main` branch will trigger a new deployment

## 📝 Build Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173

# Production
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally

# Linting
npm run lint         # Check code quality
```

## 🧪 Testing the Contact Form

1. **Local testing**: The form works in development mode with the access key in `.env`
2. **Production testing**: After deployment, test the form on your live site
3. **Check spam folder**: Web3Forms emails might land in spam initially
4. **Verify**: Check that form submissions arrive at your email

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ♿ Accessibility

- Semantic HTML
- ARIA labels and descriptions
- Keyboard navigation support
- Focus visible states
- Screen reader tested
- WCAG AA color contrast

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Neel Dalsania**
- Email: neeldalsania333@gmail.com
- LinkedIn: [linkedin.com/in/neel-dalsania-a96051225](https://linkedin.com/in/neel-dalsania-a96051225)
- GitHub: [github.com/neeldalsania3](https://github.com/neeldalsania3)

## 🐛 Issues

If you encounter any issues or have suggestions, please file an issue on GitHub.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Web3Forms](https://web3forms.com/)
- [Lucide Icons](https://lucide.dev/)
