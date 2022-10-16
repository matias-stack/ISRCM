import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Analytics from './Pages/Analytics';
import Comment from './Pages/Comment';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import "../styles/Ver_emp.css"
import Logo from "../assets/Logo.png"

export default function Ver_emp(){
    return(
        <BrowserRouter>
        <Sidebar>
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productList" element={<ProductList />} />
            </Routes>
        </Sidebar>
        </BrowserRouter>
    );

}