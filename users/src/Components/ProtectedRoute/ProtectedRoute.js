import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const userAuth = () => {
    const userDetails = JSON.parse(localStorage.getItem("talent"))

    return userDetails
}

const ProtectedRoute = () => {
    const isAuth = userAuth()

    return isAuth ? <Outlet /> : <Navigate to = "/" />
}

export default ProtectedRoute