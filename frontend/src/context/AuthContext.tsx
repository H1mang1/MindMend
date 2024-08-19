// import { createContext, useEffect, useState } from "react";
// type User={
//     name:string
//     email:string
// }
// type UserAuth={
//     user:User | null;
//     isLoggedIn:boolean;
//     login:(email:string,password:string)=>Promise<void>;
//     logout:()=>Promise<void>;
// }
// const AuthContext=createContext<UserAuth | null>(null)
// export const AuthProvider = ({children}:{ children: ReactNode}) => {
//     const [user,setUser]=useState(null);
//     const [isLoggedIn,setIsLoggedIn]=useState<boolean>(false);
//     useEffect(()=>{
//         setIsLoggedIn(false);
//         setUser(null);
//     },[])
//     const login =async (email:string,password:string) => {};
//     const logout =async () => {};

//     const value={
//         user,
//         login,
//         logout,
//         isLoggedIn,
//     };
//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// };
// export const useAuth = () => useContext(AuthContext);