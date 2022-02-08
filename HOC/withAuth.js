/* eslint-disable react/display-name */

import { verifyToken } from "apis/auth";
import router from "next/router";
import { useEffect, useState } from "react";
import store from "store";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const user = store.get("user");
    const token = store.get("token");
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      if (!token || !user) {
        router.replace("/");
      }

      verifyToken()
        .then((response) => {
          setVerified(true);
        })
        .catch((error) => {
          store.remove("user");
          store.remove("token");
          router.replace("/");
        });
    }, []);

    return <>{verified && <WrappedComponent {...props} />}</>;
  };
};

export default withAuth;
