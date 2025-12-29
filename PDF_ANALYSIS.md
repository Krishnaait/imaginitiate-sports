# Fantasy Cricket Platform - PDF Analysis

## Page 1: Project Setup, Core Configuration, and Base Styles

### Requirements Identified:
1. **Project Initialization**
   - Next.js project with TypeScript and Tailwind CSS
   - Note: Current project uses React 19 + Vite + tRPC (different stack)

2. **Dependencies**
   - Drizzle ORM and MySQL driver ✓ (Already installed)
   - drizzle-kit ✓ (Already installed)
   - NextAuth.js (Current project uses Manus OAuth instead)
   - react-hot-toast ✓ (Need to verify)
   - date-fns ✓ (Need to verify)

3. **Environment Variables**
   - .env.local file setup
   - Database credentials
   - Authentication secrets

### Status:
- ✓ Project initialized (different stack: Vite + React + tRPC)
- ✓ Database setup (Drizzle + MySQL/TiDB)
- ✓ Authentication (Manus OAuth instead of NextAuth)
- ⚠️ Need to verify toast and date utilities

---
## Page 2: Environment Variables & Base Styles

### Requirements Identified:
1. **Environment Variables (continued)**
   - DATABASE_URL ✓ (Already configured)
   - CRIC_API_KEY ✓ (Already configured)
   - NEXTAUTH_URL (Not needed - using Manus OAuth)
   - NEXTAUTH_SECRET (Not needed - using JWT_SECRET)
   - CRON_SECRET (Optional - not implemented)

2. **Base Styles**
   - Global CSS file with Tailwind imports
   - Dark theme base styles (bg-[#0a0f1a] text-gray-300)
   - Note: Current project uses light theme with emerald green primary

3. **Root Layout**
   - Next.js layout.tsx with metadata
   - Google Fonts (Inter)
   - Toaster component for notifications
   - Note: Current project uses Vite structure (main.tsx, App.tsx)

### Status:
- ✓ Environment variables configured (using Manus system)
- ✓ Global CSS exists (client/src/index.css with Tailwind 4)
- ⚠️ Theme difference: PDF uses dark theme, current uses light theme
- ✓ Toast notifications available (need to verify implementation)
- ⚠️ Different project structure (Vite vs Next.js)

---
## Page 3: Root Layout Completion

### Requirements Identified:
1. **Metadata**
   - Title: "DineDivine - Free To Play Fantasy Sports Platform"
   - Description for SEO
   - Favicon configuration

2. **Root Layout Structure**
   - HTML structure with Toaster component
   - Inter font from Google Fonts

### Status:
- ✓ Metadata configured (using IMAGINITIATE branding)
- ✓ Favicon exists (/logo.png)
- ⚠️ Different structure (Vite vs Next.js)

---

## Page 4-5: Part 2 - Database Schema, ORM, and Initialization API

### Requirements Identified:
1. **Drizzle ORM Configuration**
   - drizzle.config.ts file ✓ (Already exists)
   - Schema path: ./src/lib/db/schema.ts
   - Output directory: ./drizzle
   - MySQL2 driver ✓

2. **Database Schema Tables**
   - **users** table ✓ (Already exists with Manus OAuth fields)
     - id, name, email, password, createdAt
   
   - **userTeams** table ❌ (NOT IMPLEMENTED)
     - id, userId (FK), matchId, name
     - captainId, viceCaptainId
     - totalCreditsUsed (decimal)
     - createdAt
   
   - **teamPlayers** table ❌ (NOT IMPLEMENTED)
     - id, teamId (FK), playerId
   
   - **contests** table ❌ (NOT IMPLEMENTED)
     - id, matchId, name
     - entryFee, prizePool (decimals)
     - maxEntries, currentEntries
     - status (upcoming/live/completed)
     - createdAt
   
   - **contestEntries** table ❌ (NOT IMPLEMENTED)
     - id, contestId (FK), userId (FK), teamId (FK)
     - points (decimal), rankPosition
     - createdAt

3. **Database Connection**
   - src/lib/db.ts file ✓ (Exists as server/db.ts)
   - Drizzle connection with PlanetScale

4. **Database Initialization API**
   - API endpoint: /api/db-init/route.ts
   - Creates all tables using Drizzle schema
   - Note: Current project uses `pnpm db:push` instead

### Status:
- ✓ Drizzle ORM configured
- ✓ Database connection established
- ✓ Users table exists
- ❌ **MISSING: userTeams table (core feature)**
- ❌ **MISSING: teamPlayers table (core feature)**
- ❌ **MISSING: contests table (core feature)**
- ❌ **MISSING: contestEntries table (core feature)**
- ⚠️ Different migration approach (db:push vs API endpoint)

---
## Page 6-7: Database Initialization API & Migration

### Requirements Identified:
1. **Database Initialization API Endpoint**
   - Route: /api/db-init/route.ts
   - Creates all 5 tables using raw SQL
   - Includes ALTER TABLE statements for missing columns
   - Returns success/error JSON response

2. **Migration Command**
   - `pnpm drizzle-kit generate:mysql`
   - Generates SQL migration files

### Status:
- ✓ Migration system exists (using `pnpm db:push`)
- ❌ No /api/db-init endpoint (not needed with current approach)
- ⚠️ Different migration workflow

---

## Page 8-10: Part 3 - Authentication (NextAuth.js) and User API

### Requirements Identified:
1. **NextAuth.js API Route**
   - File: src/app/api/auth/[...nextauth]/route.ts
   - CredentialsProvider for email/password login
   - bcrypt for password hashing/comparison
   - JWT session strategy
   - Custom signin page: /login

2. **User Registration API**
   - Route: /api/register/route.ts
   - Validates required fields (name, email, password)
   - Checks for existing user
   - Hashes password with bcrypt
   - Inserts new user into database

3. **Login Page UI**
   - File: src/app/login/page.tsx
   - Email and password input fields
   - Form submission with NextAuth signIn
   - Toast notifications for success/error
   - Link to registration page
   - Dark theme styling (bg-gray-900, bg-gray-800)

4. **Registration Page UI**
   - File: src/app/register/page.tsx
   - Name, email, and password fields
   - Form submission to /api/register
   - Toast notifications
   - Link to login page

### Status:
- ✓ Authentication system exists (Manus OAuth instead of NextAuth)
- ✓ Login page exists (/login)
- ✓ Registration page exists (/register)
- ⚠️ Different auth approach: Manus OAuth vs credentials-based
- ⚠️ No password field needed (OAuth handles authentication)
- ⚠️ Theme difference: PDF uses dark theme, current uses light

---
## Part 6: Team Creation Flow (UI and API)

### Requirements Identified:
1. **Team Creation API**
   - Route: /api/teams (POST)
   - Requires authentication
   - Validates team data (11 players, captain, vice-captain)
   - Inserts into userTeams and teamPlayers tables
   - Returns teamId

2. **Team Creation Page**
   - File: /app/dashboard/matches/[id]/create-team/page.tsx
   - Fetches squad data from Cricket API
   - Multi-step UI: Select Players → Select Captain → Preview
   - Player selection with role/team composition validation
   - Credit system (100 credits budget)
   - Captain (2x points) and Vice-Captain (1.5x points) selection

### Status:
- ❌ **MISSING: /api/teams endpoint**
- ❌ **MISSING: Team creation page with player selection UI**
- ❌ **MISSING: Credit calculation system**
- ❌ **MISSING: Role-based validation (WK, BAT, AR, BOWL)**
- ✓ Create Team page exists but is placeholder only

---

## Part 7: Contest System (API, Pages, and Seeding)

### Requirements Identified:
1. **Contest List API**
   - Route: /api/contests (GET)
   - Fetches all contests
   - Optional matchId filter

2. **Contest Seeding API**
   - Route: /api/contests/seed (POST)
   - Creates sample contests for a match
   - Contest types: Mega Contest, Head to Head, Winner Takes All

3. **Join Contest API**
   - Route: /api/contests/join (POST)
   - Requires authentication
   - Validates contest availability (not full)
   - Creates contestEntry
   - Increments currentEntries counter

4. **Match Contests Page**
   - File: /app/dashboard/matches/[id]/contests/page.tsx
   - Displays available contests for a match
   - Shows entry fee, prize pool, spots filled
   - Join button for each contest

### Status:
- ❌ **MISSING: All contest API endpoints**
- ❌ **MISSING: Contest seeding functionality**
- ❌ **MISSING: Join contest functionality**
- ❌ **MISSING: Match contests page**
- ❌ **MISSING: Contest database tables**

---

## Part 8: Live Score System and Automated Contest Sync

### Requirements Identified:
1. **Live Score Page**
   - File: /app/dashboard/live-scores/[id]/page.tsx
   - Auto-refreshes every 30 seconds
   - Toggle for auto-refresh
   - Displays live match scores

2. **Contest Sync API**
   - Route: /api/contests/sync (GET)
   - Updates contest status based on match status
   - Auto-creates contests for new upcoming matches
   - Calculates points for completed matches

3. **Cron Job API**
   - Route: /api/cron/sync-contests (GET)
   - Protected with CRON_SECRET
   - Triggers contest sync every 5 minutes
   - Updates contest statuses and rankings

4. **Point Calculation System**
   - Complex scoring rules (runs, wickets, catches, etc.)
   - Fetches detailed scorecard data
   - Applies scoring to each player in user teams
   - Updates contestEntries with points and rankings

### Status:
- ❌ **MISSING: Live score page with auto-refresh**
- ❌ **MISSING: Contest sync API**
- ❌ **MISSING: Cron job endpoint**
- ❌ **MISSING: Point calculation system**
- ❌ **MISSING: Leaderboard functionality**

---

## Part 9: Informational Pages and Final Touches

### Requirements Identified:
1. **Informational Pages**
   - /about (About Us)
   - /how-to-play (How to Play guide)
   - /faq (Frequently Asked Questions)
   - /contact (Contact Us)
   - /terms (Terms of Service)
   - /privacy (Privacy Policy)
   - /fair-play (Fair Play Policy)
   - /responsible-gaming (Responsible Gaming)

2. **Final Polish**
   - Favicon setup
   - Image optimization (WebP format)
   - Responsive design testing
   - Dark theme consistency

### Status:
- ✓ About page exists
- ✓ How It Works page exists
- ✓ FAQ page exists
- ✓ Contact page exists
- ✓ Terms page exists
- ✓ Privacy page exists
- ✓ Responsible Gaming page exists
- ⚠️ Fair Play Policy page missing
- ✓ Favicon exists
- ⚠️ Theme: PDF uses dark, current uses light

---

## Part 10: Deployment and Final Verification

### Requirements Identified:
1. **Build and Deploy**
   - Production build: `pnpm build`
   - Deploy to Railway or Vercel
   - MySQL database setup
   - Environment variables configuration

2. **End-to-End Testing**
   - User registration and login
   - Database initialization (/api/db-init)
   - Match display
   - Team creation
   - Contest seeding
   - Join contest
   - Live scores
   - Contest sync (cron job)
   - Leaderboard

### Status:
- ✓ GitHub repository created
- ✓ Railway deployment guide provided
- ⚠️ Database tables incomplete (missing 4 core tables)
- ❌ End-to-end testing not possible (missing core features)

---
