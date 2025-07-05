# Docker Setup for Admin Dashboard

This guide explains how to run the admin dashboard application using Docker.

## Prerequisites

- Docker
- Docker Compose

## Files Created

- `Dockerfile` - Production Docker image
- `Dockerfile.dev` - Development Docker image with hot reload
- `docker-compose.yml` - Production environment
- `docker-compose.dev.yml` - Development environment
- `.dockerignore` - Files to exclude from Docker context
- `.env.example` - Environment variables template

## Quick Start

### Development Environment

1. **Copy environment file**:
   ```bash
   cp .env.example .env.local
   ```

2. **Update environment variables** in `.env.local` with your actual values.

3. **Start development environment**:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

4. **Access the application**:
   - Application: http://localhost:3001
   - Database: localhost:5433

### Production Environment

1. **Set up environment variables**:
   ```bash
   cp .env.example .env.production
   ```

2. **Update production environment variables** in `.env.production`.

3. **Start production environment**:
   ```bash
   docker-compose up --build -d
   ```

4. **Access the application**:
   - Application: http://localhost:3000
   - Database: localhost:5432

## Environment Variables

Update the following environment variables in your `.env` file:

### Required Variables
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Secret for NextAuth.js
- `NEXTAUTH_URL` - Your application URL

### Optional Variables (based on your services)
- AWS S3 credentials (if using S3)
- Supabase credentials (if using Supabase)
- Firebase configuration (if using Firebase)
- Cloudinary credentials (if using Cloudinary)

## Database Management

### Run Prisma Migrations
```bash
# Development
docker-compose -f docker-compose.dev.yml exec web-dev npx prisma migrate dev

# Production
docker-compose exec web npx prisma migrate deploy
```

### Access Database
```bash
# Development
docker-compose -f docker-compose.dev.yml exec postgres-dev psql -U postgres -d admin_dashboard_dev

# Production
docker-compose exec postgres psql -U postgres -d admin_dashboard
```

### Prisma Studio
```bash
# Development
docker-compose -f docker-compose.dev.yml exec web-dev npx prisma studio

# Production
docker-compose exec web npx prisma studio
```

## Useful Commands

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f web
```

### Stop Services
```bash
# Development
docker-compose -f docker-compose.dev.yml down

# Production
docker-compose down
```

### Rebuild Images
```bash
# Development
docker-compose -f docker-compose.dev.yml up --build

# Production
docker-compose up --build
```

### Clean Up
```bash
# Remove containers and volumes
docker-compose down -v

# Remove images
docker-compose down --rmi all
```

## Troubleshooting

### Port Conflicts
If ports 3000, 3001, 5432, or 5433 are already in use, update the port mappings in the docker-compose files.

### Database Connection Issues
1. Ensure the database container is healthy before the web container starts
2. Check the `DATABASE_URL` environment variable
3. Verify the database credentials

### Build Issues
1. Clear Docker cache: `docker system prune -a`
2. Rebuild without cache: `docker-compose build --no-cache`

### Permission Issues
If you encounter permission issues on Linux/macOS:
```bash
sudo chown -R $USER:$USER .
```

## Production Deployment

For production deployment:

1. Use a proper secret for `NEXTAUTH_SECRET`
2. Set up SSL/TLS termination (nginx proxy, cloudflare, etc.)
3. Use external managed database services
4. Configure proper backup strategies
5. Set up monitoring and logging
6. Use environment-specific docker-compose files

## Development Workflow

1. Make code changes (hot reload enabled in development)
2. Database schema changes:
   ```bash
   docker-compose -f docker-compose.dev.yml exec web-dev npx prisma migrate dev
   ```
3. Test changes
4. Commit and deploy to production
