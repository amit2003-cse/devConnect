# 🚀 DevConnect - Full-Stack Developer Social Platform

DevConnect is a high-performance, full-stack social networking and portfolio platform designed specifically for developers. Built using **Next.js 14+ App Router**, **TypeScript**, and **Tailwind CSS**, it serves as a place where developers can build portfolios, share posts, interact with peers, and connect with recruiters.

---

## 🛠️ Tech Stack & Key Choices (Why this stack?)

* **Framework**: **Next.js 14+ (App Router)** - For hybrid Server/Client rendering, optimized layouts, and built-in API handling via Server Actions.
* **Language**: **TypeScript (Strict Mode)** - Catch bugs early in development with strict type-safety.
* **Styling**: **Tailwind CSS (v4)** - A utility-first CSS framework for rapid and responsive UI designs.
* **ORM & Database**: **Prisma ORM** + **PostgreSQL** - Type-safe database queries and a robust relational model.
* **Auth**: **NextAuth.js / Clerk** - Secure session handling and OAuth provider logins (GitHub/Google).
* **Storage**: **UploadThing / Cloudinary** - Highly optimized developer profile & post image storage.

---

## ✨ Features (Building Step-by-Step)

### 📂 Phase 1: Core Setup
* Hybrid rendering structure using React Server Components (RSC) and Client Components.
* Strict TypeScript configurations and standard folder setups.
* Glassmorphism-style responsive Navigation Bar.
* Configured local development scripts to host on custom ports (e.g. `3001`).

### 🔑 Phase 2: Secure Authentication
* Role-based access control (Developer & Recruiter types).
* Protected dashboard/feed routes using Next.js Middleware.

### 📝 Phase 3: Social & Interactions
* Post creation with markdown support and media uploads.
* Infinite scrolling feed powered by database pagination.
* Dynamic Developer Profile Setup Wizard.
* Developer portfolio page showing repos, skills, and past experiences.
* Like, Comment, and Bookmark capabilities.

### ⚡ Phase 4: Advanced Performance
* **Optimistic Updates**: Immediate UI feedback on likes/comments before the server returns a response.
* **Next.js Caching**: Dynamic cache invalidation using `revalidatePath` and `revalidateTag` for real-time responsiveness.
* Live global search and filters with custom search inputs.

---

## 📂 Folder Structure

A production-ready Next.js directory layout:
```text
devConnect/
├── actions/         # Server Actions (Mutations & DB ops)
├── app/             # App Router paths (layouts, pages, and API routes)
├── components/      # Reusable UI components (Navbar, Button, Cards)
├── lib/             # Third-party configurations & DB clients (Prisma, utils)
├── types/           # Global TypeScript type definitions
├── public/          # Static assets (images, icons, logos)
└── tsconfig.json    # Strict TypeScript configuration rules
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/amit2003-cse/devConnect.git
   cd devConnect
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   The application will start on [http://localhost:3001](http://localhost:3001).

---

## 📈 Learning Roadmap Progress
* [x] Next.js 14+ Initialization & Setup
* [x] Custom Port Config (3001)
* [x] Responsive Glassmorphic Navbar setup
* [ ] Database Schema & Prisma Integrations
* [ ] Authentication Setup
* [ ] Social Feed & Actions
* [ ] Profile Wizard
