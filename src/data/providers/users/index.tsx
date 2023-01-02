import { signInWithEmailAndPassword } from "@firebase/auth";
import { getApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signOut,
  UserCredential,
} from "firebase/auth";
import React, { useMemo, useState } from "react";
import settings from "../../common/settings";
import UserContext, {
  AccountStatus,
  UserApiResult,
  UserDetails,
} from "./userContext";

function getUser(usr: UserCredential): UserDetails {
  return {
    name: usr.user.displayName || usr.user.email || "",
    email: usr.user.email || "",
    photoUrl: usr.user.photoURL || "man",
    role: "guest",
    mobile: usr.user.phoneNumber || undefined,
    status: AccountStatus.ACTIVATED,
  };
}

export const UserContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(false);
  const [user, setLoggedUser] = useState<UserDetails | undefined>(
    settings.getLocalUser()
  );

  const auth = getAuth(getApp());

  function showProgress(show: boolean): void {
    setLoading(show);
  }

  async function login(
    email: string,
    password: string
  ): Promise<UserApiResult> {
    return new Promise((resolve) => {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((res: any) => {
          setUser(res);
          resolve({
            success: true,
            user,
          });
        })
        .catch((error) => {
          setLoading(false);
          resolve({
            success: false,
            errorCode: error.code,
            errorMessage: error.message,
          });
        });
    });
  }

  function resetPassword(email: string): Promise<UserApiResult> {
    return new Promise((resolve) => {
      setLoading(true);
      sendPasswordResetEmail(getAuth(), email)
        .then(() => {
          setLoading(false);
          resolve({ success: true });
        })
        .catch((error) => {
          setLoading(false);
          resolve({
            success: false,
            errorCode: error.code,
            errorMessage: error.message,
          });
        });
    });
  }

  function logout(): Promise<Boolean> {
    setLoading(true);
    return new Promise((resolve) => {
      signOut(getAuth())
        .then(() => {
          localStorage.clear();
          sessionStorage.clear();
          setLoggedUser(undefined);
          setLoading(false);
          resolve(true);
          console.log("<==== User Signout Success ====>");
        })
        .catch((error) => {
          setLoading(false);
          resolve(error);
        });
    });
  }

  function createAccount(
    name: string,
    email: string,
    password: string,
    mobile?: string
  ): Promise<UserApiResult> {
    return new Promise((resolve) => {
      setLoading(true);
      console.log("email ", email);
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setUser(res);
          resolve({
            success: true,
            user,
          });
        })
        .catch((error) => {
          setLoading(false);
          resolve({
            success: false,
            errorCode: error.code,
            errorMessage: error.message,
          });
        });
    });
  }

  function setUser(credential: UserCredential) {
    const usr = getUser(credential);
    settings.setLocalUser(usr);
    setLoggedUser(usr);
  }

  const memoedValue = useMemo(
    () => ({
      loading,
      user,
      showProgress,
      login,
      logout,
      resetPassword,
      createAccount,
    }),
    [loading, user]
  );
  return (
    <UserContext.Provider value={memoedValue}>{children}</UserContext.Provider>
  );
};
