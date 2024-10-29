import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () =>{//hook
     return useContext(AuthContext);
}

export const AuthContextProvider = ({children})=>{
    const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)
    
    return <AuthContext.Provider value={{authUser,setAuthUser}}>{children}</AuthContext.Provider>
}

// Breakdown:
// Creating a Context (AuthContext):

// createContext() creates an empty context called AuthContext. This context will store information related to the 
//authenticated user (if someone is logged in).Context allows you to pass data (like user info) to any component in your app without
// having to pass it down through props.


// useAuthContext Hook:
// useAuthContext is a custom hook that uses useContext(AuthContext) to easily access the values stored in AuthContext.
// Any component can call this hook to get or modify the user data.
// Why? It’s a shortcut so that you don’t have to use useContext(AuthContext) every time you need to access the context—just 
//use useAuthContext().

// AuthContextProvider Component:

// This component provides the AuthContext to any child components that are wrapped inside it. It's like a "wrapper" 
//that surrounds parts of the app needing access to authentication data.

// What it does:
// It reads the logged-in user from localStorage using localStorage.getItem("chat-user"), which stores user data as a JSON string. 
//This data gets parsed back into a JavaScript object using JSON.parse().
// If there is no data in localStorage, authUser will be null (i.e., no user is logged in).
// setAuthUser is used to update the authUser state when the user logs in or logs out.


// Providing the Context:
// The AuthContext.Provider component is used to pass down the authUser and setAuthUser values to any children wrapped 
//inside the AuthContextProvider.Any component inside AuthContextProvider can access these values and functions using the useAuthContext() hook.
// Simple Example:
// When a user logs in, their data gets saved in localStorage. This code retrieves the user data from localStorage 
//and makes it available throughout the app via the context.Components inside the AuthContextProvider can access the 
//current user (authUser) and a function to update the user (setAuthUser).
// How It’s Used:
// Wrap your app (or part of it) with AuthContextProvider so that all components inside can access the authUser and 
//setAuthUser.Inside a component, you can call useAuthContext() to check who the logged-in user is or update the user
// data when needed.