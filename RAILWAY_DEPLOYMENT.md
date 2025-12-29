# Railway Deployment Guide for IMAGINITIATE Sports

## Prerequisites
- Railway account (sign up at https://railway.app)
- GitHub repository: https://github.com/Krishnaait/imaginitiate-sports

## Deployment Steps

### 1. Create New Project on Railway
1. Go to https://railway.app/dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose `Krishnaait/imaginitiate-sports`

### 2. Configure Environment Variables
Add the following environment variables in Railway dashboard (Settings → Variables):

**Required Variables:**
```
NODE_ENV=production
DATABASE_URL=<your-railway-database-url>
JWT_SECRET=<generate-random-secret>
CRIC_API_KEY=<your-cricket-api-key>
```

**Optional Variables (if using Manus features):**
```
OAUTH_SERVER_URL=<if-using-oauth>
VITE_OAUTH_PORTAL_URL=<if-using-oauth>
OWNER_NAME=IMAGINITIATE VENTURES PRIVATE LIMITED
OWNER_OPEN_ID=<if-needed>
```

### 3. Add Database (PostgreSQL recommended)
1. In Railway dashboard, click "New" → "Database" → "Add PostgreSQL"
2. Railway will automatically set the `DATABASE_URL` variable
3. Update your database schema to use PostgreSQL instead of SQLite

### 4. Update Database Configuration

**Update `drizzle.config.ts`:**
```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql", // Change from sqlite to postgresql
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

**Update `server/db.ts`:**
```typescript
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);
```

**Install PostgreSQL driver:**
```bash
pnpm add pg
pnpm add -D @types/pg
```

### 5. Build Configuration
Railway will automatically detect your Node.js project and use these commands:
- **Build Command:** `pnpm install && pnpm build`
- **Start Command:** `pnpm start`

Make sure your `package.json` has:
```json
{
  "scripts": {
    "build": "tsc && vite build",
    "start": "NODE_ENV=production node dist/index.js"
  }
}
```

### 6. Deploy
1. Railway will automatically deploy when you push to the main branch
2. Monitor deployment logs in Railway dashboard
3. Once deployed, Railway will provide a public URL (e.g., `your-app.railway.app`)

### 7. Custom Domain (Optional)
1. Go to Settings → Domains in Railway dashboard
2. Click "Add Domain"
3. Add your custom domain: `imanitiatesports.com`
4. Update DNS records as instructed by Railway

## Important Notes

### Database Migration
Before first deployment, run migrations:
```bash
pnpm db:push
```

### Environment-Specific Considerations
- **SQLite to PostgreSQL:** You'll need to migrate from SQLite to PostgreSQL for production
- **File Storage:** If using local file storage, consider using S3 or Railway volumes
- **Sessions:** JWT tokens are already configured for stateless authentication

### Post-Deployment Checklist
- [ ] Verify all environment variables are set
- [ ] Run database migrations
- [ ] Test user registration and login
- [ ] Verify Cricket API integration is working
- [ ] Test all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Verify compliance disclaimers appear on all pages
- [ ] Test age and geo-restriction validations

## Troubleshooting

### Build Fails
- Check Railway logs for specific errors
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Database Connection Issues
- Verify `DATABASE_URL` is correctly set
- Ensure PostgreSQL database is running
- Check firewall/network settings

### API Issues
- Verify `CRIC_API_KEY` is valid
- Check API rate limits
- Review server logs for errors

## Support
For Railway-specific issues, visit: https://docs.railway.app
For project issues, check: https://github.com/Krishnaait/imaginitiate-sports/issues
