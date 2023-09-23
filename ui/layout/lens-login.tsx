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
import { polygonMumbai } from "@wagmi/core/chains";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
import { InjectedConnector } from "@wagmi/core/connectors/injected";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";

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
  // const { connectAsync } = useConnect({
  //   connector: new WalletConnectConnector({
  //     chains: [polygonMumbai],
  //     options: {
  //       projectId: process.env
  //         .NEXT_PUBLIC_NETWORKWALLETCONNECT_PROJECTID as string,
  //     },
  //   }),
  // });
  // const { connectAsync } = useConnect({
  //   connector: new InjectedConnector(),
  // });
  const { connectAsync } = useConnect({
    connector: new MetaMaskConnector(),
  });
  const { disconnectAsync } = useDisconnect();
  const { data: activeProfile } = useActiveProfile();

  const onLoginClick = async (isOwner: boolean) => {
    console.log("connecting1");
    if (isConnected) {
      console.log("isconnected");
      await disconnectAsync();
    }

    console.log("connecting2");

    const { connector } = await connectAsync();

    console.log("resolved");

    // if (connector instanceof WalletConnectConnector) {
    if (connector instanceof MetaMaskConnector) {
      console.log("walletconnect");
      // if (connector instanceof InjectedConnector) {
      const signer = await connector.getSigner();
      console.log("signer resolved");
      console.log("signer", signer);
      const result = await login(signer);
      console.log("login complete");
      console.log("result:", result);
    } else {
      console.log("notwalletconnect");
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
        <>
          <button
            className="btn-primary btn whitespace-nowrap normal-case text-lg w-32"
            disabled={isLoginPending}
            onClick={() => onLoginClick(true)}
          >
            Owner
          </button>
        </>
      )}
    </>
  );
}
