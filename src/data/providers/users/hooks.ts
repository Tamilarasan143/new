import { useContext } from "react";
import UserContext from "./userContext";

export function useUserContext() {
    const ctx = useContext(UserContext);
    return {
        ...ctx,
    };
}


export function useUser() {
    const ctx = useContext(UserContext);
    return ctx.user;
}