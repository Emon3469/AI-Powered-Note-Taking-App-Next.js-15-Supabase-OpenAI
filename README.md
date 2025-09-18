# 📝 Note Taking App

A modern, AI-powered note-taking application built with Next.js 15, featuring real-time collaboration, intelligent search, and seamless cloud synchronization.

## ✨ Features

- **🔐 User Authentication** - Secure login/signup with Supabase Auth
- **📝 Rich Note Editor** - Create, edit, and organize your notes
- **🤖 AI Integration** - Ask questions about your notes using OpenAI
- **🔍 Smart Search** - Fuzzy search through your notes with Fuse.js
- **🎨 Modern UI** - Beautiful interface with Radix UI and Tailwind CSS
- **📱 Responsive Design** - Works seamlessly on desktop and mobile
- **☁️ Cloud Sync** - Real-time synchronization with PostgreSQL database
- **🌙 Dark Mode** - Toggle between light and dark themes

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Database:** PostgreSQL with [Prisma ORM](https://www.prisma.io/)
- **Authentication:** [Supabase Auth](https://supabase.com/auth)
- **AI Integration:** [OpenAI API](https://openai.com/api/)
- **Search:** [Fuse.js](https://fusejs.io/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ 
- npm or yarn
- PostgreSQL database (or Supabase account)
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd note-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Database Configuration
   DATABASE_URL="postgresql://username:password@localhost:5432/noteapp"
   
   # Supabase Configuration
   SUPABASE_URL="your-supabase-project-url"
   SUPABASE_ANON_KEY="your-supabase-anon-key"
   
   # OpenAI Configuration
   OPENAI_API_KEY="your-openai-api-key"
   
   # Next.js Configuration
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   
   # Node Environment
   NODE_ENV="development"
   ```

4. **Set up the database**
   ```bash
   npm run migrate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🐳 Docker Setup

### Using Docker Compose (Recommended for Development)

1. **Build and start all services**
   ```bash
   docker-compose up --build
   ```

2. **Run with local database**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - App: [http://localhost:3000](http://localhost:3000)
   - Database: `localhost:5432`
   - Prisma Studio (optional): [http://localhost:5555](http://localhost:5555)

### Using Docker Only

1. **Build the image**
   ```bash
   docker build -t note-app .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 --env-file .env.local note-app
   ```

### Docker Commands

```bash
# Build and start services
docker-compose up --build

# Start services in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Start with Prisma Studio
docker-compose --profile tools up
```

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run migrate      # Run Prisma migrations

# Docker
docker-compose up    # Start with Docker Compose
```

## 🌐 Deployment on Vercel

### Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings

3. **Configure Environment Variables**
   In your Vercel project settings, add:
   ```env
   DATABASE_URL=your-production-database-url
   SUPABASE_URL=your-supabase-url
   SUPABASE_ANON_KEY=your-supabase-anon-key
   OPENAI_API_KEY=your-openai-api-key
   NEXT_PUBLIC_BASE_URL=https://your-app.vercel.app
   NODE_ENV=production
   ```

4. **Deploy**
   - Vercel will automatically build and deploy
   - Your app will be available at `https://your-app.vercel.app`

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Database Setup for Production

1. **Use Supabase (Recommended)**
   - Create a new project at [Supabase](https://supabase.com/)
   - Copy the database URL and API keys
   - Update your Vercel environment variables

2. **Or use any PostgreSQL provider**
   - Railway, PlanetScale, Neon, etc.
   - Update the `DATABASE_URL` in Vercel

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `SUPABASE_URL` | Supabase project URL | ✅ |
| `SUPABASE_ANON_KEY` | Supabase anonymous key | ✅ |
| `OPENAI_API_KEY` | OpenAI API key for AI features | ✅ |
| `NEXT_PUBLIC_BASE_URL` | Base URL of your application | ✅ |
| `NODE_ENV` | Environment (development/production) | ✅ |

### Database Schema

The app uses Prisma with the following models:

- **User**: Stores user information and authentication
- **Note**: Stores note content with user relationships

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/your-username/note-app/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Supabase](https://supabase.com/) for backend services
- [OpenAI](https://openai.com/) for AI capabilities
- [Vercel](https://vercel.com/) for seamless deployment

---

**Happy Note Taking! 📝✨**
