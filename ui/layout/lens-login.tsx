import {
  useActiveProfile,
  useActiveWallet,
  useWalletLogin,
  useWalletLogout,
} from "@lens-protocol/react-web";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import { getPictureURL } from "@/lib/get-picture-url";
import { truncateAddr } from "@/lib/truncate-address";

import { LensProfiles } from "./lens-profiles";

export function LensLogin() {
  const [isOwner, setIsOwner] = useState(false);
  const {
    execute: login,
    error: loginError,
    isPending: isLoginPending,
  } = useWalletLogin();
  const { execute: logout } = useWalletLogout();
  const { data: wallet } = useActiveWallet();
  const { isConnected } = useAccount();
  const { connectAsync } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnectAsync } = useDisconnect();
  const { data: activeProfile } = useActiveProfile();

  const onLoginClick = async (isOwner: boolean) => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { connector } = await connectAsync();

    if (connector instanceof InjectedConnector) {
      const signer = await connector.getSigner();
      const result = await login(signer);
      console.log("Result:", result);
    }
  };

  useEffect(() => {
    loginError && toast.error(loginError.message);
  }, [loginError]);

  return (
    <>
      {wallet ? (
        activeProfile ? (
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn-primary btn-sm btn flex flex-nowrap normal-case"
            >
              <div className="relative h-5 w-5">
                <Image
                  src={getPictureURL(activeProfile)}
                  alt={activeProfile.handle}
                  fill
                  sizes="(max-width: 20px) 100vw"
                  className="rounded-full object-cover"
                />
              </div>
              {activeProfile?.handle}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
            >
              <LensProfiles />
              <li>
                <a onClick={logout}>Log out</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn-primary btn-sm btn flex flex-nowrap whitespace-nowrap normal-case"
            >
              {truncateAddr(wallet.address)}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
            >
              <LensProfiles />
              <li>
                <a onClick={logout}>Log out</a>
              </li>
            </ul>
          </div>
        )
      ) : (
        <button
          className="btn-primary btn-sm btn whitespace-nowrap text-3xl normal-case"
          disabled={isLoginPending}
          onClick={() => onLoginClick(true)}
        >
          Owner
        </button>
      )}
    </>
  );
}
