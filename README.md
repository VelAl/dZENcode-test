# 🧾 Inventory App

A simple inventory management application built with **Next.js 15**, **React 19**, and **Prisma ORM**. Created as a technical assessment project.

## 🚀 Tech Stack

- Next.js 15 (App Router + Turbopack)
- React 19
- TypeScript
- Prisma + PostgreSQL (via Docker)
- Bootstrap 5
- Radix UI Dialog
- Sonner (notifications)

## 🛠️ Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/VelAl/dZENcode-test.git
cd inventory-app
npm install
```

### 2. Run Locally

```bash
npm run dev
```

### 3. Prisma Setup

```bash
npx prisma migrate dev
npx prisma db seed
```

## 🐳 Docker

Create a `.env` file with your production environment variables:

```env
NODE_ENV_PROD=production
DATABASE_URL_PROD=postgresql://user:password@db:5432/dbname
POSTGRES_USER_PROD=user
POSTGRES_PASSWORD_PROD=password
POSTGRES_DB_PROD=dbname
```

Then run:

```bash
docker compose up
```

The app will be available at [http://localhost:3000](http://localhost:3000)
