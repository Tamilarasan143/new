import { createContext } from "react"


export interface UserDetails {
    name: string
    status: AccountStatus
    email: string
    photoUrl: string
    role: string
    mobile?: string
    data?: any
}

export enum AccountStatus {
    STORE_NOT_FOUND,
    STORE_KYC_VERIFICATION_IN_PROGRESS,
    STORE_KYC_REJECTED,
    ACTIVATED,
    LOCKED,
    CLOSED,
}

export interface UserApiResult {
    success: Boolean
    errorCode?: number
    errorMessage?: string
    user?: any
}

export interface IUserContext {
    loading: boolean
    user?: UserDetails
    showProgress(show: boolean): void
    login(email: string, password: string): Promise<UserApiResult>
    resetPassword(email: string): Promise<UserApiResult>
    createAccount(name: string, email: string, password: string, mobile?: string): Promise<UserApiResult>
    logout(): Promise<Boolean>

}


export const UserContext = createContext({} as IUserContext);
export default UserContext;

