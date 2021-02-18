import React, { useState } from "react";

export const SpaceProgramsContext = React.createContext();

const SpaceProgramsProvider = ({ children }) => {
  const spaceProgramsFactory = useState(null);
  //   const [spacePrograms, setSpacePrograms] = spaceProgramsFactory;
  return (
    <SpaceProgramsContext.Provider value={spaceProgramsFactory}>
      {/* The rest of your app */}
      {children}
    </SpaceProgramsContext.Provider>
  );
};
export default SpaceProgramsProvider;
