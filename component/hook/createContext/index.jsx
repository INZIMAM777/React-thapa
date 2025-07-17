import {createContext} from 'react';
// useContext is use for props Drilling.
export const BioContext=createContext();

export const BioProvider=({children})=>{ //mandatory to use children component
    const myName='Inzimam';
    const myAge=20;``
    return(
        <>
            <BioContext.Provider value={{myName,myAge}}>{children}</BioContext.Provider>
            {/* if we send more than one data use double curly bracket and mandatory to use children component*/}
        </>
    )
}

//1st create context(creator)
//2nd create provider(provider or delivery)
//3th create useContext(consumer)