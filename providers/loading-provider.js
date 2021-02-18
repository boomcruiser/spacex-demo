import React, { useState } from "react";

export const LoadingContext = React.createContext();

const LoadingProvider = ({ children }) => {
  const LoadingFactory = useState(false);

  return (
    <LoadingContext.Provider value={LoadingFactory}>
      {/* The rest of your app */}
      {children}
    </LoadingContext.Provider>
  );
};
export default LoadingProvider;
