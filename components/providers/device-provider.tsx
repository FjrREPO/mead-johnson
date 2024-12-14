import React, { createContext, useState, useEffect } from 'react';

interface DeviceContextType {
  isMobile: boolean;
  isDesktop: boolean;
}

export const DeviceContext = createContext<DeviceContextType>({
  isMobile: false,
  isDesktop: true
});

export const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsDesktop(!mobile);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile, isDesktop }}>
      {children}
    </DeviceContext.Provider>
  );
};