# Project TODO

## Core Setup
- [x] Configure database schema for fantasy sports
- [x] Set up Cricket API integration
- [x] Configure environment variables

## Landing Page Components
- [x] Hero section with brand identity
- [x] Features showcase section
- [x] How It Works educational guide
- [x] FAQs section
- [x] Compliance section
- [x] Responsible Play section
- [x] Call-to-Action sections

## Matches Display
- [x] Live Matches section
- [x] Upcoming Matches section
- [x] Completed Matches section
- [ ] Match details page

## User Features
- [x] User authentication (login/register)
- [x] User dashboard
- [x] Team creation interface
- [x] Team management
- [x] Contest participation

## Design & Polish
- [x] Brand colors and styling
- [x] Responsive design
- [x] Navigation structure
- [x] Footer with company details

## Testing & Deployment
- [x] Test all features
- [x] Create checkpoint
- [x] Documentation

## New Pages to Create

### Informational Pages
- [x] About page (Our Story, Mission & Vision, Why We're Free, Fair Play Gaming, Do's and Don'ts)
- [x] How It Works page (How to Play, Create Team, Score System, Leaderboard Rankings)
- [x] Fantasy Cricket page
- [x] Fair Play page
- [x] Contact Us page
- [x] Responsible Gaming page (detailed points)

### Legal Pages
- [x] Terms & Conditions page
- [x] Privacy Policy page
- [x] Disclaimer & Compliance page

### Team & Contest Management
- [x] Create Team page
- [x] Contest page (browse and join contests)
- [x] My Teams page
- [x] Results page

### User Management
- [x] Profile page
- [x] Login page (uses Manus OAuth)
- [x] Register page (uses Manus OAuth - saves data in database)
- [x] Forgot Password page (handled by Manus OAuth)
- [x] Logout functionality (already implemented)

### Backend Features
- [ ] Registration process with data validation
- [ ] Login process with authentication
- [ ] Password reset functionality
- [ ] Team creation backend
- [ ] Contest management backend

## Bug Fixes
- [x] Fix pages not displaying - investigate routing and navigation issues
- [x] Fix nested anchor tag error in Home.tsx

## Navigation & Compliance Updates
- [x] Update navigation bar sequence: Home → About Us → How it Works → Responsible Gaming → FAQs → Fair Play → Matches → Contact Us → Login → Register
- [x] Add age restriction disclaimer (18+ only) to header and footer
- [x] Add geo-restriction disclaimer for 7 Indian states (Assam, Telangana, Tamil Nadu, Orissa, Andhra Pradesh, Nagaland, Sikkim)
- [x] Add Indian compliance disclaimer (operates under Indian laws and fantasy sports regulations)
- [x] Apply disclaimers to all pages across the website

## Custom Authentication Implementation
- [ ] Remove Manus OAuth dependencies and references
- [x] Update database schema to add password, dateOfBirth, state fields
- [x] Implement password hashing (bcrypt)
- [x] Create registration endpoint with validation (18+, geo-restrictions)
- [x] Create login endpoint with JWT token generation
- [x] Create forgot password endpoint
- [x] Create password reset endpoint
- [x] Build custom Login page
- [x] Build custom Register page with age and state validation
- [x] Build Forgot Password page
- [x] Update authentication context to use custom auth
- [x] Remove all Manus OAuth references from codebase
- [x] Test complete authentication flow

## Bug Fixes
- [x] Fix persistent nested anchor tag error (Link wrapping Button creates nested anchors)

## Design Improvements & Bug Fixes
- [x] Redesign disclaimer banner pattern (current design is too intrusive)
- [x] Fix team names not showing on Matches page

## Content Updates
- [x] Update disclaimer banner to show actual names of 7 restricted states instead of "7 Indian States"

## Bug Fixes
- [x] Fix nested anchor tag error on Home.tsx page

## Design Assets
- [x] Generate brand logo for IMAGINITIATE
- [x] Generate background banner image for hero section
- [x] Integrate logo and banner into website

## Hero Section Updates
- [x] Replace trophy icon with real cricketer image

## Logo Fixes
- [x] Fix brand logo visibility in navigation header

## Domain Update
- [x] Update domain from imanitiatesports.com to imaginitiatesports.com

## Responsive Design
- [x] Add mobile hamburger menu to navigation (Layout component)
- [x] Fix responsive logo and header sizing
- [x] Fix disclaimer banner for mobile
- [x] Fix footer responsive grid layout
- [x] Test responsive design across all pages

## Responsive Design Bug Fixes
- [x] Debug and identify what's not working in responsive design
- [x] Fix responsive issues on all pages
- [x] Ensure mobile menu works correctly
- [x] Test on mobile viewport sizes

## CSS Responsive Overhaul
- [x] Recreate global CSS with comprehensive responsive utilities
- [x] Add auto-responsive container classes
- [x] Fix all layout issues with new CSS

## Global Component System
- [x] Enhance global CSS with auto-responsive component utilities
- [x] Recreate header component with global classes
- [x] Recreate footer component with global classes
- [x] Update all pages to use global responsive utilities
- [x] Ensure all CTAs, buttons, images auto-responsive

## Header Fix
- [x] Make header auto-responsive for all devices
- [x] Use viewport-based sizing with clamp() for fluid scaling
- [x] Changed breakpoint from lg (1024px) to xl (1280px) for hamburger menu


## Phase 1: Core Database & API Implementation
- [x] Create userTeams table in database schema
- [x] Create teamPlayers table in database schema
- [x] Create contests table in database schema
- [x] Create contestEntries table in database schema
- [x] Push database schema changes with pnpm db:push
- [x] Create Cricket API library (server/cricketApi.ts)
- [x] Implement getMatches() function
- [x] Implement getMatchSquad() function
- [x] Create tRPC procedure for fetching matches
- [x] Create tRPC procedure for fetching match squad
- [x] Create tRPC procedures for team creation (teams.create, teams.myTeams, teams.getById)
- [x] Create tRPC procedures for contests (contests.list, contests.seed, contests.join, contests.myEntries, contests.leaderboard)
- [x] Fix TypeScript errors and database connection issues


## Phase 3: Team Creation UI Implementation
- [x] Update CreateTeam page with functional team builder
- [x] Fetch match squad data from tRPC (trpc.matches.squad)
- [x] Implement player selection with role filtering (WK/BAT/AR/BOWL)
- [x] Add credit system (100 credits budget with real-time tracking)
- [x] Add captain and vice-captain selection with visual badges
- [x] Implement team composition validation (1-4 WK, 3-6 BAT, 1-4 AR, 3-6 BOWL)
- [x] Connect to teams.create tRPC mutation
- [x] Add success/error toast notifications
- [x] Add loading states and error handling
- [x] Add team name input field
- [ ] Test complete team creation flow


## Phase 4: Contest System Implementation
- [x] Update Matches page to show available contests
- [x] Add Create Team and View Contests buttons to match cards
- [x] Update Contests page to fetch real data from tRPC
- [x] Fetch contests list from tRPC (contests.list)
- [x] Display contest details (entry fee, prize pool, spots filled)
- [x] Implement join contest functionality with team selection dialog
- [x] Connect to contests.join tRPC mutation
- [x] Add contest entry success/error handling with toasts
- [x] Show user's teams for contest selection
- [x] Add routes for /create-team/:id and /contests/:id
- [x] Add progress bars showing contest fill percentage
- [ ] Test complete contest flow end-to-end


## Website Redesign - Dark Cinematic Theme
- [x] Generate hero image: Dramatic cricket stadium with players in action
- [x] Generate feature image 1: Intense cricket batting moment
- [x] Generate feature image 2: Cricket team celebration
- [x] Generate feature image 3: Strategic team planning
- [x] Generate feature image 4: Cricket bowler action shot
- [x] Redesign homepage with dark theme and cinematic layouts
- [x] Update global CSS to dark color scheme (emerald green primary)
- [x] Replace all placeholder images with generated cricket images
- [x] Add cinematic hero section with full-screen background
- [x] Add feature cards with hover effects
- [x] Add stats section and atmospheric sections
- [ ] Update remaining pages (About, Matches, etc.) with dark theme
- [ ] Test responsive design with new theme
- [ ] Push to GitHub for Railway deployment


## Bug Fixes
- [x] Fix nested anchor tag error in Home.tsx (Link wrapping <a> tags)


## Remove Money/Prize Content
- [x] Search for all money/cash/prize references across website
- [x] Update Home page - remove prize/money mentions (₹10L+ → 100K+ Active Players, "win big" → "earn recognition")
- [x] Update About page - remove "paid advantages" reference
- [x] Update HowItWorks page - remove "winning teams" reference
- [x] Update FairPlay page - remove "paid advantages" reference
- [x] Update database schema - already clean, no entryFee or prizePool fields exist
- [x] Update Contests page UI to remove entry fee display (no entry fees in UI)
- [x] Fix Home.tsx syntax error causing Vite build failure (server restarted successfully)


## Railway Deployment Error Fix
- [x] Analyze error: TypeError [ERR_INVALID_ARG_TYPE] at dist/index.js:787
- [x] Find path.resolve() call with undefined argument (import.meta.dirname)
- [x] Fix Node.js v18 compatibility issue (replaced with __dirname)
- [x] Test locally and push to GitHub


## Railway 502 Error Fix
- [x] Check Railway deployment logs for error details
- [x] Identify root cause: dist/index.js:788 still has old code with import.meta.dirname
- [ ] Force clean rebuild by triggering new deployment
- [ ] Verify website loads correctly after rebuild
