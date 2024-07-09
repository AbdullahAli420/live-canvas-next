'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../lib/store'
import Board from './Board'
import "./board.css"

export default function StoreProvider({ children }) {
    const storeRef = useRef()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = store
    }

    return <Provider store={storeRef.current}><Board /></Provider>
}