import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store/store'
import { toast, Toaster } from 'react-hot-toast'
const ProtectedRoutes = ({ children, setedittab }) => {

    const snap = useSnapshot(state)
    if (!snap.login) {
        toast.error("Please Login To Use AI")
        setedittab(
            ""
        )
        return;
    }
    return (
        <>
            children
        </>
    )
}

export default ProtectedRoutes