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
