import React, {useState} from 'react'
import AsideContext from './Aside-context'

const AsideProvider = (props) => {
    const [classAside, setClassAside] = useState("menu-sin-desplegar")

    return (
        <AsideContext.Provider value={{classAside, setClassAside}}>
            {props.children}
        </AsideContext.Provider>
    )
}

export default AsideProvider