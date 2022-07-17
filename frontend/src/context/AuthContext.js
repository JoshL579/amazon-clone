import React, { useState, createContext, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setUid, getUid, selectUser } from '../store/userReducer';
import { varifyToken } from '../api/endpoints/auth';

export const AuthContext = createContext({});

export const AuthContextProvider = (props) => {
    const uid = useSelector(selectUser)
    const dispatch = useDispatch()

    // call api
    // dispatch(setUid(uid))
    // setCookie

    useEffect(() => {
        if (uid) return console.log('uid', uid)
        varifyToken().then((res) => {
            if (res.uid) dispatch(setUid(res.uid))
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const value = {};

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>

    )
}