import { ShieldCheck } from "lucide-react";

export function DisclaimerBanner() {
  return (
    <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border-b border-amber-200/50 dark:border-amber-800/50">
      <div className="container py-2">
        <div className="flex items-start md:items-center gap-2 md:gap-3 text-xs">
          <ShieldCheck className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 md:mt-0" />
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-y-1 md:gap-x-4 text-amber-900 dark:text-amber-200">
            <span className="flex items-center gap-1.5">
              <span className="font-semibold">18+</span>
              <span className="text-amber-700 dark:text-amber-300">Only</span>
            </span>
            <span className="hidden md:inline text-amber-400 dark:text-amber-600">•</span>
            <span className="flex items-center gap-1.5">
              <span className="font-semibold">Geo-Restricted:</span>
              <span className="text-amber-700 dark:text-amber-300">Assam, Telangana, Tamil Nadu, Orissa, Andhra Pradesh, Nagaland, Sikkim</span>
            </span>
            <span className="hidden md:inline text-amber-400 dark:text-amber-600">•</span>
            <span className="flex items-center gap-1.5">
              <span className="font-semibold">India Compliant</span>
              <span className="text-amber-700 dark:text-amber-300">Fantasy Sports Regulations</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
