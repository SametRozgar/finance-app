import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from "react-plaid-link";
import { StyledString } from "next/dist/build/swc/types";
import { useRouter } from "next/navigation";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");
  useEffect(() => {
    const getLinkToken=async()=>{
 //const data=await createLinkToken(user);
    //setToken(data?.linkToken);
    }
   getLinkToken();
  }, []);
  const onSuccess = useCallback <PlaidLinkOnSuccess>(
    async (public_token: string) => {
      /*  await exchangePublicToken({
        public_token:public_token,user
    })*/
   router.push("/")
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };



  const {open,ready}=usePlaidLink(config)
  return (
    <>
      {variant === "primary" ? (
        <Button disabled={!ready} onClick={()=>open()} className="plaidlink-primary">Connect Bank</Button>
      ) : variant === "ghost" ? (
        <Button>Connect Bank</Button>
      ) : (
        <Button>Connect Bank</Button>
      )}
    </>
  );
};

export default PlaidLink;
