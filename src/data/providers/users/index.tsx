import { signInWithEmailAndPassword } from "@firebase/auth";
import { getApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signOut,
  User,
} from "firebase/auth";
import React, { useMemo, useState } from "react";
import restClient from "../../common/restClient";
import settings from "../../common/settings";
import UserContext, { UserApiResult, UserDetails } from "./userContext";

function toUserDetails(fbUser: User, data: any) {
  return {
    name: fbUser.displayName || fbUser.email || "",
    email: fbUser.email || "",
    photoUrl: fbUser.photoURL || "man",
    role: data?.role || "Admin2",
    mobile: fbUser.phoneNumber || undefined,
    data: data,
    status: data.status,
  };
}

export const UserContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(false);
  const [user, setLoggedUser] = useState<UserDetails>();

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
        .then((usr) => {
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
        .then((userCredential) => {
          // Update profile
          const data = { name: name, mobile: mobile, source: "WEB" };
          restClient.post("/users/register", data).then((res) => {
            setLoading(false);
            if (res.ok) {
              //setUser(toUserDetails(userCredential.user, res.value));
              resolve({ success: true });
            } else {
              resolve({
                success: false,
                errorCode: res.error.code,
                errorMessage: res.error.message,
              });
            }
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
      // resolve({ result: false, errorCode: 1400, errorMessage: "Unknow error" })
    });
  }

  function joinNow(name?: string, email?: string): Promise<UserApiResult> {
    return new Promise((resolve) => {
      setLoading(true);
      // Update profile
      const data = { name: name, email: email, source: "WEB" };
      restClient.post("/users/register", data).then((res) => {
        setLoading(false);
        if (res.ok) {
          //setUser(toUserDetails(getAuth().currentUser!!, res.value));
          resolve({ success: true });
        } else {
          resolve({
            success: false,
            errorCode: res.error.code,
            errorMessage: res.error.message,
          });
        }
      });
    });
  }

  async function updateProfile(
    name?: string,
    mobile?: string
  ): Promise<UserApiResult> {
    return new Promise((resolve) => {
      setLoading(true);
      const data = { name: name, mobile: mobile };
      restClient.post("/users/me", data).then((res) => {
        setLoading(false);
        if (res.ok) {
          setUser(toUserDetails(getAuth().currentUser!!, res.value));
          resolve({ success: true });
        } else {
          resolve({
            success: false,
            errorCode: res.error.code,
            errorMessage: res.error.message,
          });
        }
      });
    });
  }

  function setUser(user: UserDetails) {
    settings.setLocalUser(user);
    setLoggedUser(user);
  }

  const memoedValue = useMemo(
    () => ({
      loading,
      user,

      showProgress,
      login,
      //  loginWithSSO,
      logout,
      resetPassword,
      createAccount,
      joinNow,
      updateProfile,
    }),
    [loading, user]
  );
  return (
    <UserContext.Provider value={memoedValue}>{children}</UserContext.Provider>
  );
};
