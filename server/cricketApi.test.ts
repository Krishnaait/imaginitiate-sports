import { describe, expect, it } from "vitest";
import { getMatches } from "./cricketApi";

describe("Cricket API Integration", () => {
  it("should successfully fetch matches with valid API key", async () => {
    const matches = await getMatches();
    
    // Should return an array (even if empty)
    expect(Array.isArray(matches)).toBe(true);
    
    // If matches exist, validate structure
    if (matches.length > 0) {
      const match = matches[0];
      // Cricket API returns matches with various properties
      // Just verify we got valid data structure
      expect(match).toBeDefined();
      expect(typeof match).toBe("object");
    }
  }, 15000); // 15 second timeout for API call
});
