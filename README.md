# 🚀 My Next.js Setup

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</div>

<div align="center">
  <p><em>A modern, full-stack Next.js application with authentication, database integration, and beautiful UI components.</em></p>
</div>

---

## ✨ Features

- 🔐 **Authentication** - Secure auth with Better Auth
- 🗄️ **Database** - Type-safe database operations with Drizzle ORM + Neon
- 🎨 **UI Components** - Beautiful components with shadcn/ui
- 🔄 **API Layer** - End-to-end type safety with tRPC
- 📊 **Data Management** - Powerful data fetching with TanStack Query
- 📋 **Tables** - Advanced table features with TanStack Table
- 🧭 **URL State** - Nuqs for URL-based state management
- 👤 **Avatars** - Dynamic avatars with DiceBear
- ⚡ **Performance** - Optimized for speed and SEO

## 🛠️ Tech Stack

<table align="center">
  <tr>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="50" height="50" alt="Next.js" />
      <br />
      <strong>Next.js 15</strong>
      <br />
      <sub>React Framework</sub>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/163827765?s=200&v=4" width="50" height="50" alt="Better Auth" />
      <br />
      <strong>Better Auth</strong>
      <br />
      <sub>Authentication</sub>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/108468352?v=4" width="50" height="50" alt="Drizzle ORM" />
      <br />
      <strong>Drizzle ORM</strong>
      <br />
      <sub>Type-safe ORM</sub>
    </td>
    <td align="center">
      <img src="https://trpc.io/img/logo.svg" width="50" height="50" alt="tRPC" />
      <br />
      <strong>tRPC</strong>
      <br />
      <sub>Type-safe API</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://neon.com/favicon/favicon.png" width="50" height="50" alt="Neon" />
      <br />
      <strong>Neon</strong>
      <br />
      <sub>PostgreSQL</sub>
    </td>
    <td align="center">
      <img src="https://ui.shadcn.com/apple-touch-icon.png" width="50" height="50" alt="shadcn/ui" />
      <br />
      <strong>shadcn/ui</strong>
      <br />
      <sub>UI Components</sub>
    </td>
    <td align="center">
      <img src="https://nuqs.47ng.com/icon.svg?d61af1768ac1a9be" width="50" height="50" alt="nuqs" />
      <br />
      <strong>nuqs</strong>
      <br />
      <sub>URL State</sub>
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg" width="50" height="50" alt="TanStack Query" />
      <br />
      <strong>TanStack Query</strong>
      <br />
      <sub>Data Fetching</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/72518640?v=4" width="50" height="50" alt="TanStack Table" />
      <br />
      <strong>TanStack Table</strong>
      <br />
      <sub>Data Tables</sub>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/7983162?s=280&v=4" width="50" height="50" alt="DiceBear" />
      <br />
      <strong>DiceBear</strong>
      <br />
      <sub>Avatar Generation</sub>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/30317862?s=280&v=4" width="50" height="50" alt="Tailwind CSS" />
      <br />
      <strong>Tailwind CSS</strong>
      <br />
      <sub>Styling</sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" height="50" alt="TypeScript" />
      <br />
      <strong>TypeScript</strong>
      <br />
      <sub>Type Safety</sub>
    </td>
  </tr>
</table>

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hanzzz-dev/my-setup-nextjs.git
   cd my-setup-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables:
   ```env
   # Database
   DATABASE_URL="your-neon-database-url"
   
   # Auth
   BETTER_AUTH_SECRET="your-secret-key"
   BETTER_AUTH_URL="http://localhost:3000"
   
   # Add other required environment variables
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   # or
   npm run db:migrate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application running.

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm type-check` | Run TypeScript checks |
| `pnpm db:push` | Push database schema |
| `pnpm db:migrate` | Run database migrations |
| `pnpm db:studio` | Open Drizzle Studio |

## 🎨 Key Features Breakdown

### 🔐 Authentication with Better Auth
- Multiple provider support (Google, GitHub, etc.)
- Session management
- Role-based access control
- Secure password handling

### 🗄️ Database with Drizzle ORM & Neon
- Type-safe database queries
- Schema migrations
- Connection pooling
- Serverless PostgreSQL

### 🎯 API Layer with tRPC
- End-to-end type safety
- Automatic API documentation
- Built-in validation with Zod
- Optimistic updates

### 🎨 UI with shadcn/ui
- Accessible components
- Dark/Light mode support
- Customizable design system
- Responsive layouts

### 📊 Data Management
- **TanStack Query**: Caching, background updates, optimistic updates
- **TanStack Table**: Sorting, filtering, pagination, column resizing
- **nuqs**: URL-synchronized state management

## 🌟 Why This Stack?

This setup provides:

- **🔒 Security** - Built-in authentication and authorization
- **🚀 Performance** - Optimized for Core Web Vitals  
- **🧪 Type Safety** - End-to-end TypeScript coverage
- **🎨 Great DX** - Excellent developer experience with hot reload and type checking
- **📈 Scalability** - Handles growth from startup to enterprise
- **🛠️ Maintainability** - Clean architecture and best practices

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Better Auth Docs](https://better-auth.com/docs)
- [Drizzle ORM Docs](https://orm.drizzle.team/docs/overview)
- [tRPC Documentation](https://trpc.io/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TanStack Query](https://tanstack.com/query/latest)
- [TanStack Table](https://tanstack.com/table/latest)

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by [hanzzz-dev](https://github.com/hanzzz-dev)**

⭐ Star this repo if you found it helpful!

</div>