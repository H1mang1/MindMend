// import { createContext } from "react";
// import run from "../../../server/config/gemini";

//import { createContext } from "react";

// export const Context=createContext();
// const ContextProvider =(props)=>{
//     const onSent =async(propmpt)=>{
//        await run(propmpt)
//     }
//     onSent("whats react js")
//     const contextValue={

//     }
//     return(
//         <Context.Provider value={contextValue}>
//             {props.children}
//         </Context.Provider>
//     )
// }
// export default ContextProvider
// import { createContext, useEffect } from "react";
// import run from "../../../server/config/gemini";

// export const Context = createContext();

// const ContextProvider = (props) => {
//     const onSent = async (prompt) => {
//         await run(prompt);
//     };

//     useEffect(() => {
//         onSent("whats react js");
//     }, []); // Empty dependency array to run only once

//     const contextValue = {
//         // Add your context values here
//     };

//     return (
//         <Context.Provider value={contextValue}>
//             {props.children}
//         </Context.Provider>
//     );
// };

// export default ContextProvider;

// import { createContext } from "react";
// export const Context=createContext();
// const ContextProvider=(props)=>{
//     const onSent=async (propmt)=>{
//         await run(prompt)
//     }
//     onSent("what is react js")
//     const contextValue={

//     }
//     return(
//         <Context.Provider value={contextValue}>
//             {props.children}
//         </Context.Provider>
//     )

// }
// export default ContextProvider

// import { createContext, useEffect } from "react";
// import run from "../../../server/gemini";

// export const Context = createContext();

// const ContextProvider = (props) => {
//   const onSent = async (prompt) => {
//     // Assuming 'run' is a function you have defined elsewhere
//     await run(prompt);
//   };

//   useEffect(() => {
//     onSent("what is react js");
//   }, []);

//   const contextValue = {};

//   return (
//     <Context.Provider value={contextValue}>
//       {props.children}
//     </Context.Provider>
//   );
// };
// export const Context=createContext();
// const ContextProvider=(props)=>{
//     const onSent=async (prompt)=>{
//         await run(prompt)
//     }
//     onSent("what is react js")
//     const contextValue={

//     }
//     return(
//         <Context.Provider value={contextValue}>
//             {props.children}
//         </Context.Provider>
//     )

// }
// export default ContextProvider;
