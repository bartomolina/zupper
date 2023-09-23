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
          <div>
            <LensLogin />
          </div>
          <div className="btn-secondary btn-sm btn mt-3 whitespace-nowrap normal-case text-3xl">
            Customer
          </div>
        </div>
      </div>
    </div>
  );
}
