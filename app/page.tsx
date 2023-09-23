"use client";

import Link from "next/link";

import { LensLogin } from "@/ui/layout/lens-login";

export default function Home() {
  return (
    <div className="mt-36 grid justify-center gap-44 text-center">
      <div className="text-center">
        <div className="text-5xl">🤤</div>
        <div className="text-2xl font-semibold">Zupper</div>
      </div>
      <div className="grid gap-3 divide-y">
        <div>Login</div>
        <div className="pt-3">
          <div>
            <LensLogin />
          </div>
          <div className="btn-secondary btn-sm btn mt-3 whitespace-nowrap normal-case">
            Customer
          </div>
        </div>
      </div>
    </div>
  );
}
