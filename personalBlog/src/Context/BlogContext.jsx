import { createContext ,useContext } from "react";
import { useState } from "react";

const BlogContext = createContext ();

// profider

export const BlogProvider = ({children}) =>{
    const [fullData,setFullData] = useState ({});

    return (
        <BlogContext.Provider value={{fullData,setFullData}}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => useContext (BlogContext);