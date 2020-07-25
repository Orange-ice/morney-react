import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
    tagIds:number[]
    note:string
    category:'+'|'-'
    amount:number
    createAt:string
}
type NewRecordItem = Omit<RecordItem, 'createAt'>    // 忽略createAt 的 RecordItem

export const useRecords = ()=>{
    const [records,setRecords] = useState<RecordItem[]>([])

    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
    },[])
    useUpdate(()=>{
        window.localStorage.setItem('records',JSON.stringify(records))
    },[records])
    const addRecord = (newRecord:NewRecordItem)=>{
        const record = {...newRecord,createAt:(new Date()).toISOString()}
        setRecords([...records,record])
    }

    return {records,addRecord}
}