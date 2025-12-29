import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function DisclaimerBanner() {
  return (
    <Alert className="rounded-none border-x-0 border-t-0 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
      <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-500" />
      <AlertDescription className="text-xs text-amber-800 dark:text-amber-300">
        <strong>18+ Only:</strong> Users must be 18 years or older. |{" "}
        <strong>Geo-Restricted:</strong> Not available in Assam, Telangana, Tamil Nadu, Orissa, Andhra Pradesh, Nagaland, Sikkim. |{" "}
        <strong>Compliance:</strong> Operated under Indian laws and fantasy sports regulations.
      </AlertDescription>
    </Alert>
  );
}
