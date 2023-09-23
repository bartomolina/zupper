"use client";

import Link from "next/link";

import { LensLogin } from "@/ui/layout/lens-login";

export default function Home() {
  return (
    <div className="mt-36 grid justify-center gap-36 text-center">
      <div className="text-center">
        <div className="text-5xl">🤤</div>
        <div className="text-4xl font-semibold">Zupper</div>
      </div>
      <div className="grid gap-5 divide-y">
        <div className="text-2xl">Login</div>
        <div className="pt-3">
          <div className="btn-secondary btn whitespace-nowrap normal-case text-lg">
            Customer
          </div>
          <div className="mt-3">
            <LensLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
