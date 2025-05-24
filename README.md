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

### 1. Download the Project

```bash
git clone https://github.com/VelAl/dZENcode-test.git
cd inventory-app
npm install
```

### 2. Prerequisites
Make sure Docker is installed and running on your machine.

### 3. Set Environment Variables .env file
NODE_ENV_PROD=production

DATABASE_URL_PROD=postgres://postgres:secure_prod_password@db:5432/prod_db

POSTGRES_USER_PROD=postgres
POSTGRES_PASSWORD_PROD=secure_prod_password
POSTGRES_DB_PROD=prod_db


### 4. Run the App
Now simply run:

```bash
docker compose up --build
```

or

```bash
docker-compose up --build
```


The application will:
 - Automatically build the project
 - Spin up a PostgreSQL database
 - Run all Prisma migrations
 - Seed the database with initial data

✅ Access the App
  Once everything is up and running, the app will be available at:
  👉 http://localhost:3000

🛑 Stopping the App
  To stop the application and remove containers, networks, and volumes created by Docker Compose:

```bash
docker compose down -v
```

or

```bash
docker-compose down -v
```


