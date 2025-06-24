import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Category from "./pages/Category";
import posts from "./data/posts";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:slug" element={<Post posts={posts} />} />
                <Route path="/category/:category" element={<Category posts={posts} />} />
            </Routes>
        </Router>
    );
}