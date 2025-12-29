# Fantasy Cricket Platform - Complete Feature TODO List
## Based on 37-Page PDF Guide Analysis

---

## ✅ COMPLETED FEATURES

### Project Setup & Infrastructure
- [x] Project initialized (Vite + React + tRPC stack)
- [x] Database configured (Drizzle ORM + MySQL/TiDB)
- [x] Environment variables setup
- [x] Global CSS with Tailwind 4
- [x] Authentication system (Manus OAuth)
- [x] GitHub repository created
- [x] Railway deployment guide

### Pages - Basic Structure
- [x] Home page with hero section
- [x] About page
- [x] How It Works page
- [x] FAQ page
- [x] Contact page
- [x] Terms of Service page
- [x] Privacy Policy page
- [x] Responsible Gaming page
- [x] Login page
- [x] Register page
- [x] Matches page (basic structure)

### Components
- [x] Header/Navigation component
- [x] Footer component
- [x] Layout component
- [x] Disclaimer banner
- [x] Responsive mobile hamburger menu

### Styling & Design
- [x] Responsive CSS utilities
- [x] Auto-responsive breakpoints
- [x] Mobile-first design
- [x] Brand colors (emerald green)
- [x] Logo and branding

---

## ❌ MISSING CORE FEATURES

### Database Schema - CRITICAL MISSING TABLES
- [ ] **userTeams table** (stores fantasy teams created by users)
  - userId (FK to users)
  - matchId
  - name
  - captainId
  - viceCaptainId
  - totalCreditsUsed (decimal)
  - createdAt

- [ ] **teamPlayers table** (stores player selections for each team)
  - teamId (FK to userTeams)
  - playerId

- [ ] **contests table** (stores available contests for matches)
  - matchId
  - name
  - entryFee (decimal)
  - prizePool (decimal)
  - maxEntries
  - currentEntries
  - status (upcoming/live/completed)
  - createdAt

- [ ] **contestEntries table** (stores user participation in contests)
  - contestId (FK to contests)
  - userId (FK to users)
  - teamId (FK to userTeams)
  - points (decimal)
  - rankPosition
  - createdAt

### Cricket API Integration
- [ ] **Cricket API library** (src/lib/cricketApi.ts)
  - getMatches() function
  - getMatchSquad(matchId) function
  - Integration with CRIC_API_KEY

- [ ] **CricScore API route** (/api/cricscore)
  - Fetch live, upcoming, completed matches
  - Sort and filter matches
  - Cache with revalidation (60 seconds)

- [ ] **Match Squad API route** (/api/matches/[id]/squad)
  - Fetch squad data for specific match
  - Return player details (name, role, team)

### Team Creation System - CORE FEATURE
- [ ] **Team Creation API** (/api/teams POST)
  - Validate team composition (11 players)
  - Validate captain and vice-captain selection
  - Check credit budget (100 credits)
  - Insert into userTeams and teamPlayers tables

- [ ] **Team Creation Page** (/dashboard/matches/[id]/create-team)
  - Multi-step UI:
    - Step 1: Select 11 players
    - Step 2: Select captain (2x points) and vice-captain (1.5x points)
    - Step 3: Preview and confirm
  - Player list with filtering by role (WK, BAT, AR, BOWL)
  - Credit system display (100 credits budget)
  - Team composition validation:
    - 1-4 Wicketkeepers
    - 3-6 Batsmen
    - 1-4 All-rounders
    - 3-6 Bowlers
    - Minimum 7 players from one team, maximum 10
  - Real-time credit calculation
  - Save team functionality

### Contest System - CORE FEATURE
- [ ] **Contest List API** (/api/contests GET)
  - Fetch all contests
  - Filter by matchId
  - Return contest details with current entries

- [ ] **Contest Seeding API** (/api/contests/seed POST)
  - Create sample contests for a match
  - Contest types:
    - Mega Contest (entry: $10, prize: $1000, max: 100)
    - Head to Head (entry: $50, prize: $90, max: 2)
    - Winner Takes All (entry: $25, prize: $225, max: 10)

- [ ] **Join Contest API** (/api/contests/join POST)
  - Validate user authentication
  - Check contest availability (not full)
  - Create contestEntry record
  - Increment currentEntries counter
  - Deduct entry fee from user balance (if wallet system exists)

- [ ] **Match Contests Page** (/dashboard/matches/[id]/contests)
  - Display available contests for specific match
  - Show entry fee, prize pool, spots filled
  - Join button for each contest
  - Filter by contest type
  - Show user's joined contests

### Live Score System
- [ ] **Live Score Page** (/dashboard/live-scores/[id])
  - Fetch live match data
  - Auto-refresh every 30 seconds
  - Toggle for enabling/disabling auto-refresh
  - Display:
    - Team names
    - Current score
    - Match status
    - Overs
    - Run rate

- [ ] **Contest Sync API** (/api/contests/sync GET)
  - Update contest status based on match status
  - Auto-create contests for new upcoming matches
  - Trigger point calculation for completed matches

- [ ] **Cron Job API** (/api/cron/sync-contests GET)
  - Protected with CRON_SECRET
  - Calls contest sync API
  - Runs every 5 minutes via external cron service

### Point Calculation System - COMPLEX FEATURE
- [ ] **Scoring Rules Implementation**
  - Runs scored: 1 point per run
  - Boundary bonus: 1 point per 4, 2 points per 6
  - Half-century: 8 points
  - Century: 16 points
  - Wicket taken: 25 points
  - Catch taken: 8 points
  - Stumping: 12 points
  - Run out: 6 points
  - Maiden over: 12 points
  - Economy rate bonuses
  - Strike rate bonuses

- [ ] **Point Calculation API** (/api/calculate-points POST)
  - Fetch detailed scorecard for completed match
  - Calculate points for each player
  - Update contestEntries with points
  - Calculate rankings based on total points
  - Apply captain (2x) and vice-captain (1.5x) multipliers

### Leaderboard System
- [ ] **Contest Leaderboard API** (/api/contests/[id]/leaderboard GET)
  - Fetch all entries for a contest
  - Sort by points (descending)
  - Return user details, team name, points, rank

- [ ] **Leaderboard Page** (/dashboard/contests/[id]/leaderboard)
  - Display ranked list of participants
  - Show user's team and rank
  - Highlight top 3 positions
  - Show prize distribution
  - Real-time updates during live matches

### User Dashboard Enhancements
- [ ] **My Teams Section**
  - List all teams created by user
  - Filter by match
  - Edit team (before match starts)
  - Delete team
  - View team details

- [ ] **My Contests Section**
  - List all contests joined by user
  - Show contest status (upcoming/live/completed)
  - Show current rank (for live/completed)
  - Show points earned
  - Link to leaderboard

- [ ] **Wallet System** (if implementing paid contests)
  - User balance tracking
  - Add money functionality
  - Withdraw money functionality
  - Transaction history
  - Entry fee deduction
  - Prize money credit

### Match Display Components
- [ ] **LiveMatchesSection component**
  - Fetch and display live matches
  - Show live scores
  - Link to create team / join contest
  - Auto-refresh data

- [ ] **UpcomingMatchesSection component**
  - Fetch and display upcoming matches
  - Show match date/time
  - Link to create team
  - Countdown timer

- [ ] **CompletedMatchesSection component**
  - Fetch and display completed matches
  - Show final scores
  - Link to view leaderboard

- [ ] **FeaturedContestsSection component**
  - Display featured contests on homepage
  - Show prize pools
  - Call-to-action buttons

### Missing Pages
- [ ] **Fair Play Policy page** (/fair-play)
- [ ] **Forgot Password page** (/forgot-password)
- [ ] **User Profile page** (/dashboard/profile)
- [ ] **Transaction History page** (/dashboard/transactions)
- [ ] **My Winnings page** (/dashboard/winnings)

### Additional Features from PDF
- [ ] **Toast Notifications**
  - Verify react-hot-toast is installed and configured
  - Success/error messages for all actions

- [ ] **Date Formatting**
  - Verify date-fns is installed
  - Format match dates consistently

- [ ] **Loading States**
  - Skeleton screens for data loading
  - Spinners for async operations

- [ ] **Error Handling**
  - User-friendly error messages
  - Fallback UI for failed API calls

- [ ] **Image Optimization**
  - Convert images to WebP format
  - Lazy loading for images
  - Responsive image sizes

---

## 🔧 TECHNICAL DEBT & IMPROVEMENTS

### Code Quality
- [ ] Fix Layout.tsx import error (@/contexts/AuthContext)
- [ ] Add TypeScript types for all API responses
- [ ] Add input validation schemas (Zod)
- [ ] Add API error handling middleware

### Testing
- [ ] Write vitest tests for tRPC procedures
- [ ] Test team creation validation
- [ ] Test contest joining logic
- [ ] Test point calculation accuracy

### Performance
- [ ] Implement caching for match data
- [ ] Optimize database queries
- [ ] Add indexes to database tables
- [ ] Implement pagination for large lists

### Security
- [ ] Add rate limiting to API endpoints
- [ ] Validate all user inputs
  - Sanitize match IDs
- [ ] Implement CSRF protection
- [ ] Add request logging

### Documentation
- [ ] API documentation
- [ ] Database schema documentation
- [ ] Deployment guide updates
- [ ] User guide / How to Play detailed instructions

---

## 📊 PRIORITY LEVELS

### P0 - CRITICAL (Must have for MVP)
1. Database tables (userTeams, teamPlayers, contests, contestEntries)
2. Cricket API integration (getMatches, getMatchSquad)
3. Team creation system (API + UI)
4. Contest system (list, join)
5. Match display components

### P1 - HIGH (Core features)
6. Live score page with auto-refresh
7. Contest sync API
8. Point calculation system
9. Leaderboard system
10. My Teams / My Contests dashboard sections

### P2 - MEDIUM (Enhanced features)
11. Wallet system (if paid contests)
12. User profile management
13. Team editing functionality
14. Transaction history
15. Cron job for automated sync

### P3 - LOW (Nice to have)
16. Fair Play Policy page
17. Forgot Password functionality
18. Image optimization
19. Advanced filtering/sorting
20. Social sharing features

---

## 📝 NOTES

**Stack Differences:**
- PDF uses Next.js 14 (App Router) + NextAuth.js
- Current project uses Vite + React 19 + tRPC + Manus OAuth
- Need to adapt API routes to tRPC procedures
- Need to adapt NextAuth session handling to Manus OAuth

**Theme Differences:**
- PDF uses dark theme (bg-gray-900, bg-gray-800)
- Current project uses light theme with emerald green accents
- May need to adjust color scheme for consistency

**Database Differences:**
- PDF uses PlanetScale MySQL
- Current project uses TiDB (MySQL-compatible)
- Should work without changes

---

## 🎯 ESTIMATED COMPLETION

- **P0 Features**: ~40-50 hours of development
- **P1 Features**: ~30-40 hours of development
- **P2 Features**: ~20-30 hours of development
- **P3 Features**: ~10-15 hours of development

**Total**: ~100-135 hours for complete implementation

---
