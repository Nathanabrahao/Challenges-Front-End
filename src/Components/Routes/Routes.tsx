import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from '../../App'
import First from '../../Challenges/First/First'

const appRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="First" element={<First />} />
            </Routes>
        </BrowserRouter>
    );
}

export default appRouter;