import { createContext, useState } from "react";

export const TouchContext = createContext()
const MobileProvider = ({children}) => {
  const [isTouch, setIsTouch ] = useState(false)
  const [loading, setLoading] = useState(false)
  const touchInfo = {
    isTouch,
    setIsTouch,
    loading,
    setLoading,
  }
    return (
        <TouchContext.Provider value={touchInfo}>
            {children}
        </TouchContext.Provider>
    );
};

export default MobileProvider;