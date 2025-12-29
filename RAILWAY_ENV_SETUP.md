# Railway Environment Variables Setup

## Required Environment Variables for Railway

Go to your Railway project → Select your service → "Variables" tab → Add these variables:

### 1. Database Configuration
```
DATABASE_URL=mysql://root:bFKIBXXYAwBrVZDyMloCRcMvDluGAgIE@hopper.proxy.rlwy.net:10844/railway
```

### 2. JWT Secret (Generate a random string)
```
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-min-32-chars
```

### 3. Cricket API Key
```
CRIC_API_KEY=your-cricket-api-key-here
```
**Note:** Get your API key from https://www.cricketdata.org/

### 4. OAuth Configuration (Manus OAuth - Optional for Railway)
```
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
VITE_APP_ID=your-app-id
```
**Note:** These are Manus-specific. For Railway, you may want to implement your own auth or use a third-party provider.

### 5. Owner Information
```
OWNER_OPEN_ID=admin
OWNER_NAME=Administrator
```

### 6. Frontend Environment Variables
```
VITE_APP_TITLE=IMAGINITIATE
VITE_APP_LOGO=/logo.png
```

### 7. Built-in Services (Optional - Manus-specific)
```
BUILT_IN_FORGE_API_URL=https://forge.manus.im
BUILT_IN_FORGE_API_KEY=your-forge-api-key
VITE_FRONTEND_FORGE_API_KEY=your-frontend-forge-key
VITE_FRONTEND_FORGE_API_URL=https://forge.manus.im
```

### 8. Analytics (Optional)
```
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id
```

## Minimum Required Variables to Start

For a basic working deployment, you **MUST** have:

1. `DATABASE_URL` - Already provided ✓
2. `JWT_SECRET` - Generate a random 32+ character string
3. `CRIC_API_KEY` - Get from cricketdata.org

## After Adding Variables

1. Click "Deploy" or wait for automatic deployment
2. Railway will rebuild your application with the new environment variables
3. Check the deployment logs for any errors
4. Visit your Railway URL: https://imaginitiate-sports-production-0dad.up.railway.app/

## Database Migration

After deployment, you need to run database migrations:

1. Go to Railway → Your service → "Settings" → "Deploy"
2. Add a custom start command or run migrations manually
3. The app should auto-run migrations on startup via `pnpm db:push`

## Troubleshooting

- **Database connection errors**: Verify DATABASE_URL is correct
- **Authentication errors**: Check JWT_SECRET is set
- **Cricket API errors**: Verify CRIC_API_KEY is valid
- **Build errors**: Check Railway logs for specific error messages

## Important Notes

1. **Never commit `.env` files to GitHub** - All secrets should be in Railway's Variables
2. **JWT_SECRET** - Use a strong, random string (at least 32 characters)
3. **CRIC_API_KEY** - Required for fetching real match data
4. **OAuth** - The current OAuth setup is Manus-specific. For Railway, consider implementing:
   - NextAuth.js with Google/GitHub
   - Auth0
   - Supabase Auth
   - Or build custom JWT-based auth

## Next Steps

1. Add all required environment variables in Railway
2. Wait for deployment to complete
3. Test the application at your Railway URL
4. Run database migrations if needed
5. Seed initial contest data for testing
