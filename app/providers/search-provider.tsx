"use client";

import { createContext, useContext, useState } from "react";

type SearchContextType = {
    searches: string[];
    addSearch: (search: string) => void;
};

const SearchContext = createContext<SearchContextType>({
    searches: [],
    addSearch: () => {},
});

export const SearchProvider = ({ children }: {children: React.ReactNode}) => {
    const [searches, setSearches] = useState<string[]>([]);

    const addSearch = (search: string) => {
        setSearches(prevSearches => [...prevSearches, search]);
    };

    const contextValue: SearchContextType = {
        searches,
        addSearch,
    };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);
