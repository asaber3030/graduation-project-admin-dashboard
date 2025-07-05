# TechMed - Hospital Management System Admin Dashboard

A comprehensive admin dashboard for hospital management built with Next.js, designed to streamline healthcare operations and provide efficient management tools for medical institutions.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Docker Setup](#docker-setup)
- [Database Schema](#database-schema)
- [API Routes](#api-routes)
- [Authentication](#authentication)
- [File Upload & Storage](#file-upload--storage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

TechMed is a modern hospital management system admin dashboard that provides healthcare institutions with powerful tools to manage their operations efficiently. The system includes comprehensive modules for patient management, doctor scheduling, inventory tracking, prescription management, and more.

## ✨ Features

### 🏥 Core Management Modules

- **Hospital Management**: Multi-hospital support with individual configurations
- **Doctor Management**: Doctor profiles, specializations, and scheduling
- **Patient Management**: Complete patient records and medical history
- **Employee Management**: Staff management with role-based permissions
- **Department Management**: Hospital department organization
- **Inventory Management**: Medical supply and equipment tracking
- **Medicine Management**: Pharmaceutical inventory and prescriptions
- **Appointment Scheduling**: Patient-doctor appointment system
- **Prescription Management**: Digital prescription creation and tracking

### 🔐 Security & Access Control

- **Role-Based Access Control (RBAC)**: Granular permissions system
- **Multi-level Authentication**: Secure login with JWT tokens
- **Permission Groups**: Customizable access levels for different roles
- **Admin Controls**: Super admin capabilities for system management

### 📊 Analytics & Reporting

- **Dashboard Analytics**: Real-time statistics and insights
- **Data Visualization**: Charts and graphs using Recharts
- **Export Capabilities**: Data export functionality
- **Audit Logs**: System activity tracking

### 🎨 User Experience

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Theme switching capability
- **Modern UI Components**: Built with Radix UI and shadcn/ui
- **Real-time Updates**: Live data synchronization
- **Multi-language Support**: Internationalization ready

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Modern UI components
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **React Query** - Server state management
- **Redux Toolkit** - Client state management

### Backend & Database
- **Next.js API Routes** - Backend API endpoints
- **Prisma** - Database ORM
- **PostgreSQL** - Primary database
- **NextAuth.js** - Authentication solution

### Cloud Services & Storage
- **AWS S3** - File storage
- **Supabase** - Additional backend services
- **Firebase** - Real-time features
- **Cloudinary** - Image optimization

### Development & Deployment
- **Docker** - Containerization
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vercel Analytics** - Performance monitoring

## 📁 Project Structure

```
src/
├── actions/           # Server actions
│   ├── app.ts
│   └── auth.ts
├── app/              # Next.js App Router
│   ├── api/          # API routes
│   ├── dashboard/    # Dashboard pages and components
│   │   ├── (helpers)/    # Helper components and utilities
│   │   └── (routes)/     # Dashboard route pages
│   ├── login/        # Authentication pages
│   └── globals.css   # Global styles
├── components/       # Reusable components
│   ├── common/       # Common components
│   └── ui/           # UI component library
├── hooks/            # Custom React hooks
├── lib/              # Utility libraries
├── providers/        # Context providers
├── schema/           # Validation schemas
├── services/         # External service integrations
├── store/            # Redux store configuration
└── types/            # TypeScript type definitions

prisma/
└── schema.prisma     # Database schema

public/
├── defaults/         # Default images and icons
└── logo.png         # Application logo
```

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **PostgreSQL** database
- **Docker** (optional, for containerized deployment)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd graduation-project-admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## ⚙️ Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/techmed"

# NextAuth.js
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# AWS S3
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
AWS_REGION="your-aws-region"
AWS_S3_BUCKET="your-s3-bucket-name"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY="your-firebase-api-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-firebase-auth-domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-firebase-project-id"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"
```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

## 🐳 Docker Setup

For detailed Docker setup instructions, see [DOCKER_README.md](./DOCKER_README.md).

### Pre-built Docker Image

A pre-built Docker image is available in the repository as `admin-dashboard-image.tar.gz`. To use it:

1. **Load the Docker image**
   ```bash
   docker load -i admin-dashboard-image.tar.gz
   ```

2. **Run the loaded image**
   ```bash
   docker run -p 3000:3000 --env-file .env.local <image-name>
   ```

### Quick Docker Start

1. **Development Environment**
   ```bash
   cp .env.example .env.local
   # Update environment variables
   docker-compose -f docker-compose.dev.yml up
   ```

2. **Production Environment**
   ```bash
   docker-compose up
   ```

## 🗄️ Database Schema

The application uses a comprehensive database schema with the following main entities:

- **Hospital**: Multi-tenant hospital management
- **Doctor**: Healthcare provider information
- **Patient**: Patient records and medical history
- **Employee**: Staff management with permissions
- **Department**: Hospital organizational structure
- **Appointment**: Scheduling system
- **Prescription**: Medication management
- **Inventory**: Supply chain management
- **Medicine**: Pharmaceutical tracking
- **Category**: Content categorization

For the complete schema, refer to `prisma/schema.prisma`.

## 🔌 API Routes

The application provides RESTful API endpoints for:

- `/api/current-user` - Current user information
- `/api/login` - Authentication endpoints
- Dashboard-specific APIs for each module

## 🔐 Authentication

The application uses NextAuth.js for authentication with:

- **JWT Token-based authentication**
- **Role-based access control**
- **Permission-based route protection**
- **Multi-level admin access**

## 📁 File Upload & Storage

File handling is implemented with multiple cloud providers:

- **AWS S3**: Primary file storage
- **Cloudinary**: Image optimization and transformation
- **Supabase**: Additional storage capabilities

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Docker Deployment

```bash
docker build -t techmed-admin .
docker run -p 3000:3000 techmed-admin
```

### Manual Deployment

1. Build the application: `npm run build`
2. Start the production server: `npm start`
3. Configure reverse proxy (nginx, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is part of a graduation project and is intended for educational purposes.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**TechMed Admin Dashboard** - Streamlining Healthcare Management 🏥
