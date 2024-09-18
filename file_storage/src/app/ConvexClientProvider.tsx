"use client";
import { ReactNode } from "react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

// Initialize the Convex client with the URL from the environment variables
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    // Wrap the application with ClerkProvider for authentication
    <ClerkProvider publishableKey={process.env.Next_CLERK_PUBLISHABLE_KEY}>
      {/* ConvexProviderWithClerk will integrate Clerk's authentication with Convex */}
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}

