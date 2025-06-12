import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

const useGetMessages = () => {
    const {selectedUser} = useSelector(store=>store.user);
    const dispatch = useDispatch();
   useEffect(()=>{
        const fetchMessages = async ()=>{
            try {
                const res = await axios.get(`https://chatapp-mern-stack-1.onrender.com/api/v1/message/${selectedUser._id}`,{
                    withCredentials:true
                })
                dispatch(setMessages(res.data))
                
            } catch (error) {
                console.error(error);
                
            }
        }
        fetchMessages();
    },[selectedUser])
}

export default useGetMessages
