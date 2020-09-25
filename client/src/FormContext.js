
import React, {useState} from 'react'

export const FormContext = React.createContext();

export const FormProvider = (props) => {

    const [allData, setallData]= useState([]);
    return(
        <FormContext.Provider value={[allData, setallData]}>
            {props.children}
        </FormContext.Provider>
    )
}