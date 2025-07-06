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

This section provides comprehensive deployment instructions for various platforms and methods.

### 🌐 Vercel Deployment (Recommended)

Vercel is the easiest way to deploy Next.js applications with automatic CI/CD.

#### Quick Deploy

1. **Connect Repository**
   ```bash
   # Push your code to GitHub (already done)
   git push origin graduation-project-admin-dashboard-dockerized
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import `graduation-project-admin-dashboard`
   - Select the `graduation-project-admin-dashboard-dockerized` branch

3. **Environment Variables**
   Add these environment variables in Vercel dashboard:
   ```env
   DATABASE_URL=your-production-database-url
   NEXTAUTH_SECRET=your-production-secret
   NEXTAUTH_URL=https://your-app.vercel.app
   AWS_ACCESS_KEY_ID=your-aws-key
   AWS_SECRET_ACCESS_KEY=your-aws-secret
   AWS_REGION=your-aws-region
   AWS_S3_BUCKET=your-s3-bucket
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
   # ... other environment variables
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your application

#### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

### 🐳 Docker Deployment

#### Using Pre-built Image

1. **Clone and Load Image**
   ```bash
   git clone https://github.com/asaber3030/graduation-project-admin-dashboard.git
   cd graduation-project-admin-dashboard
   git checkout graduation-project-admin-dashboard-dockerized
   
   # Load the pre-built image
   docker load -i admin-dashboard-image.tar.gz
   ```

2. **Create Environment File**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your production values
   ```

3. **Run the Container**
   ```bash
   # Find the loaded image name
   docker images
   
   # Run the container (replace <image-name> with actual name)
   docker run -d \
     --name techmed-admin \
     -p 3000:3000 \
     --env-file .env.local \
     <image-name>
   ```

#### Using Docker Compose

1. **Production Environment**
   ```bash
   # Update environment variables in .env.local
   docker-compose up -d
   ```

2. **Development Environment**
   ```bash
   docker-compose -f docker-compose.dev.yml up -d
   ```

#### Building Custom Image

1. **Build Image**
   ```bash
   docker build -t techmed-admin:latest .
   ```

2. **Run Container**
   ```bash
   docker run -d \
     --name techmed-admin \
     -p 3000:3000 \
     --env-file .env.local \
     techmed-admin:latest
   ```

### ☁️ AWS Deployment

#### Using AWS ECS (Elastic Container Service)

1. **Push Image to ECR**
   ```bash
   # Create ECR repository
   aws ecr create-repository --repository-name techmed-admin
   
   # Get login token
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
   
   # Tag and push image
   docker tag techmed-admin:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/techmed-admin:latest
   docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/techmed-admin:latest
   ```

2. **Create ECS Task Definition**
   ```json
   {
     "family": "techmed-admin",
     "networkMode": "awsvpc",
     "requiresCompatibilities": ["FARGATE"],
     "cpu": "256",
     "memory": "512",
     "executionRoleArn": "arn:aws:iam::account:role/ecsTaskExecutionRole",
     "containerDefinitions": [
       {
         "name": "techmed-admin",
         "image": "<account-id>.dkr.ecr.us-east-1.amazonaws.com/techmed-admin:latest",
         "portMappings": [
           {
             "containerPort": 3000,
             "protocol": "tcp"
           }
         ],
         "environment": [
           {"name": "NODE_ENV", "value": "production"}
         ]
       }
     ]
   }
   ```

3. **Create ECS Service**
   - Create ECS cluster
   - Create service using the task definition
   - Configure load balancer and security groups

#### Using AWS Amplify

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Connect your GitHub repository
   - Select the `graduation-project-admin-dashboard-dockerized` branch

2. **Build Settings**
   ```yaml
   version: 1
   applications:
     - frontend:
         phases:
           preBuild:
             commands:
               - npm ci
           build:
             commands:
               - npm run build
         artifacts:
           baseDirectory: .next
           files:
             - '**/*'
         cache:
           paths:
             - node_modules/**/*
   ```

3. **Environment Variables**
   - Add all required environment variables in Amplify console
   - Deploy the application

### 🖥️ VPS/Server Deployment

#### Using PM2 (Process Manager)

1. **Install Dependencies**
   ```bash
   # On your server
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   npm install -g pm2
   ```

2. **Deploy Application**
   ```bash
   # Clone repository
   git clone https://github.com/asaber3030/graduation-project-admin-dashboard.git
   cd graduation-project-admin-dashboard
   git checkout graduation-project-admin-dashboard-dockerized
   
   # Install dependencies
   npm install
   
   # Create environment file
   cp .env.example .env.local
   # Edit .env.local with production values
   
   # Build application
   npm run build
   
   # Start with PM2
   pm2 start npm --name "techmed-admin" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx (Optional)**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
   
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### 🔧 DigitalOcean Deployment

#### Using DigitalOcean App Platform

1. **Create New App**
   - Go to DigitalOcean App Platform
   - Create new app from GitHub repository
   - Select `graduation-project-admin-dashboard-dockerized` branch

2. **Configure Build Command**
   ```bash
   npm run build
   ```

3. **Configure Run Command**
   ```bash
   npm start
   ```

4. **Add Environment Variables**
   - Add all required environment variables
   - Deploy the application

#### Using DigitalOcean Droplet

1. **Create Droplet**
   ```bash
   # SSH into your droplet
   ssh root@your-droplet-ip
   
   # Install Docker
   curl -fsSL https://get.docker.com -o get-docker.sh
   sh get-docker.sh
   ```

2. **Deploy with Docker**
   ```bash
   # Clone repository
   git clone https://github.com/asaber3030/graduation-project-admin-dashboard.git
   cd graduation-project-admin-dashboard
   git checkout graduation-project-admin-dashboard-dockerized
   
   # Load pre-built image
   docker load -i admin-dashboard-image.tar.gz
   
   # Run container
   docker run -d \
     --name techmed-admin \
     -p 80:3000 \
     --env-file .env.local \
     --restart unless-stopped \
     <image-name>
   ```

### 🔐 Production Environment Setup

#### Database Setup

1. **PostgreSQL on Cloud**
   ```bash
   # AWS RDS, Google Cloud SQL, or DigitalOcean Managed Database
   # Get connection string and update DATABASE_URL
   ```

2. **Run Migrations**
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```

#### SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

#### Environment Variables Checklist

- [ ] `DATABASE_URL` - Production database connection
- [ ] `NEXTAUTH_SECRET` - Strong random secret
- [ ] `NEXTAUTH_URL` - Your production domain
- [ ] `AWS_ACCESS_KEY_ID` - AWS credentials
- [ ] `AWS_SECRET_ACCESS_KEY` - AWS credentials
- [ ] `AWS_REGION` - AWS region
- [ ] `AWS_S3_BUCKET` - S3 bucket name
- [ ] All Supabase, Firebase, Cloudinary credentials

### 🚀 CI/CD Pipeline

#### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ graduation-project-admin-dashboard-dockerized ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

### 📊 Monitoring & Maintenance

#### Health Checks

```bash
# Check application health
curl -f http://your-domain.com/api/health || exit 1

# Check database connection
npm run db:check
```

#### Logs

```bash
# PM2 logs
pm2 logs techmed-admin

# Docker logs
docker logs techmed-admin

# System logs
journalctl -u nginx -f
```

#### Backup Strategy

```bash
# Database backup
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d_%H%M%S).sql

# File backup (if using local storage)
tar -czf files_backup_$(date +%Y%m%d_%H%M%S).tar.gz public/uploads
```

### 🔍 Troubleshooting

#### Common Issues

1. **Build Failures**
   ```bash
   # Clear cache and rebuild
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. **Database Connection Issues**
   ```bash
   # Test database connection
   npx prisma db push --preview-feature
   ```

3. **Environment Variables**
   ```bash
   # Verify environment variables are loaded
   node -e "console.log(process.env.DATABASE_URL)"
   ```

4. **Port Conflicts**
   ```bash
   # Check what's running on port 3000
   lsof -i :3000
   ```

### 📚 Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Docker Best Practices](https://docs.docker.com/develop/best-practices/)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [Nginx Configuration](https://nginx.org/en/docs/)

---

**Choose the deployment method that best fits your requirements and infrastructure.**

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
