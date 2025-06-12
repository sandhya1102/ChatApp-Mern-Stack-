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
                const res = await axios.get(`http://localhost:4000/api/v1/message/${selectedUser._id}`,{
                    withCredentials:true
                })
                dispatch(setMessages(res.data))
                
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchMessages();
    },[selectedUser])
}

export default useGetMessages
