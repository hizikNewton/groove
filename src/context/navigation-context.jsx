import React, { useState } from "react";

const defaultContext = {
  isSidebarCollapsed: false,
  toggleSidebar: () => {},
};

export const NavigationContext = React.createContext(defaultContext);

export function NavigationProvider({ children }) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(
    defaultContext.isSidebarCollapsed
  );

  return (
    <NavigationContext.Provider
      value={{
        isSidebarCollapsed,
        toggleSidebar: () => setSidebarCollapsed((isCollapsed) => !isCollapsed),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
