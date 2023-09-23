"use client";

import { LensProvider } from "@lens-protocol/react-web";
import { ToastContainer } from "react-toastify";
import { WagmiConfig } from "wagmi";

import { lensConfig } from "@/lib/lens-config";
import { wagmiClient } from "@/lib/wagmi-client";

export function Client({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <WagmiConfig client={wagmiClient}>
        <LensProvider config={lensConfig}>
          <div>{children}</div>
        </LensProvider>
      </WagmiConfig>
      <ToastContainer theme="light" />
    </div>
  );
}
