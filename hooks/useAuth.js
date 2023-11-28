import { View, Text } from 'react-native';
import React, { createContext, useState } from 'react';
import * as Google from 'expo-google-app-auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async() => {
    await Google.logInAsync()
  }

  return (
    <AuthContext.Provider value={{
      user: null,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider




// import { View, Text } from 'react-native'
// import React from 'react'
// import { createContext, useContext } from 'react/cjs/react.development';

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   return (
//     <AuthContext.Provider
//         value={{
//             user: "Egor",
//         }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // export default AuthProvider

// export default function useAuth(){
//     return useContext(AuthContext);
// }


// // import { View, Text } from 'react-native';
// // import React, {createContext, useContext } from 'react';

// // const AuthContext = createContext({});

// // export const AuthProvider = ({ children }) => {
// //   return (
// //     <AuthContext.Provider
// //         value={{
// //             user: "Egor",
// //         }}
// //     >
// //         {}
// //     </AuthContext.Provider>
// //   );
// // };

// // export default function useAuth(){
// //     return useContext(AuthContext)
// // }

