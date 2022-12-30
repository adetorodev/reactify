import React from "react";

export const UserContext = React.createContext('ZestDev')

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer