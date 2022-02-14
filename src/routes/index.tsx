import React, { useContext, useEffect } from "react";
import AuthContext from "../context/auth";
import AuthRoutes from "./auth.routes";



const Routes: React.FC = () => {
    const context = useContext(AuthContext);

    useEffect(()=>{
        console.log("Alterado");
    },[]);
    return <AuthRoutes />
}

export default Routes;