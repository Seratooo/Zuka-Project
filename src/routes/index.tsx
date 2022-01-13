import React, { useContext } from "react";
import AuthContext from '../context/auth';

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes: React.FC = () => {
    const { signed } = useContext(AuthContext);
    return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;