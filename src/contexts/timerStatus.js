import { createContext, useState } from "react";

export const defaultTime = 0;

export const ActiveTimer = createContext(defaultTime);

export default function ActiveTimerProvider({ children }) {
    const [activeTimer, setActiveTimer] = useState(defaultTime);

    return (
        <ActiveTimer.Provider
            value={{
                activeTimer: activeTimer,
                setActiveTimer: setActiveTimer,
            }}
        >
            {children}
        </ActiveTimer.Provider>
    );
}
