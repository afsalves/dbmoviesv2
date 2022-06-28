import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

    const setItem = () => async (key: string, value: any) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(key, jsonValue)
        } catch (error) {
          return (error)
        }
      }

    const getItem = () => async (key:string) =>{
        try{
         const item = await AsyncStorage.getItem(key)
         return item ? JSON.parse(item) : item
        }catch(err){
         return (err)
        }
     }

     const getAllItems = () => async () =>{
        const keys = await AsyncStorage.getAllKeys()
        const items = await AsyncStorage.multiGet(keys)
        console.log(items)
     }


    const removeItem = () => async (key:string) =>{
        try{
         await AsyncStorage.removeItem(key)
        }catch(err){
         return (err)
        }
     }

     const clear = () => async () => {
        await AsyncStorage.clear()
    }

    const useAsyncStorage = () => {
        return {
            setItem: setItem(),
            getItem: getItem(),
            removeItem: removeItem(),
            getAllItems: getAllItems(),
            clear: clear()
        }
    }

    export default useAsyncStorage
    