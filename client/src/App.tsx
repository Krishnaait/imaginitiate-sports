import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import FantasyCricket from "./pages/FantasyCricket";
import FairPlay from "./pages/FairPlay";
import Contact from "./pages/Contact";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import CreateTeam from "./pages/CreateTeam";
import Contests from "./pages/Contests";
import MyTeams from "./pages/MyTeams";
import Results from "./pages/Results";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/how-it-works"} component={HowItWorks} />
      <Route path={"/fantasy-cricket"} component={FantasyCricket} />
      <Route path={"/fair-play"} component={FairPlay} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/responsible-gaming"} component={ResponsibleGaming} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/disclaimer"} component={Disclaimer} />
      <Route path={"/matches"} component={Matches} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/create-team/:id"} component={CreateTeam} />
      <Route path={"/create-team"} component={CreateTeam} />
      <Route path={"/contests/:id"} component={Contests} />
      <Route path={"/contests"} component={Contests} />
      <Route path={"/my-teams"} component={MyTeams} />
      <Route path={"/results"} component={Results} />
      <Route path={"/profile"} component={Profile} />
      <Route path={"/login"} component={Login} />
      <Route path={"/register"} component={Register} />
      <Route path={"/forgot-password"} component={ForgotPassword} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
