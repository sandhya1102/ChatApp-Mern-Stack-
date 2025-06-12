import React, { useEffect } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';

const useGetOtherUsers = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchOtherUsers = async ()=>{
            try {
                const res = await axios.get(`http://localhost:4000/api/v1/user/`,{
                    withCredentials:true
                })
               dispatch(setOtherUsers(res.data));
            } catch (error) {
                console.error(error);
                
            }
        }
        fetchOtherUsers();
    },[])
}

export default useGetOtherUsers
