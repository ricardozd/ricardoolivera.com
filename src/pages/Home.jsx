import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts";
import "./Home.css";

const quotes = [
    {
        text: "Primera regla, molestar al vecino! Pum Pum Pum!",
        author: "Buenry & Pastis",
        emoji: "🎧",
    },
    {
        text: "Balancear calidad y velocidad es un arte.",
        emoji: "⚖️",
    },
    {
        text: "El esfuerzo trae recompensa.",
        emoji: "🏋️",
    },
];

export default function Home() {
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const sortedPosts = [...posts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

    return (
        <div className="home-container">
            {/* Íconos sociales a la izquierda */}
            <div className="social-inside">
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://google.es" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://google.es" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>

            {/* Contenido principal */}
            <img
                src="https://ca.slack-edge.com/T2S97LHR9-U2SB9LU4A-701eac8eeaa7-72"
                alt="Ricardo Olivera"
                className="profile-image"
            />
            <h1 className="title">Ricardo Olivera</h1>
            <p className="subtitle">Dev, thinker, storyteller</p>

            <div className="quote-banner">
                <p className="quote-text">
                    {quotes[quoteIndex].emoji} <em>"{quotes[quoteIndex].text}"</em>
                    {quotes[quoteIndex].author && (
                        <span className="quote-author">— {quotes[quoteIndex].author}</span>
                    )}
                </p>
            </div>

            <div className="categories">
                <Link to="/category/tech" className="category-link">🛠 Tech</Link>
                <Link to="/category/personal" className="category-link">🧠 Personal</Link>
                <Link to="/category/ideas" className="category-link">💡 Ideas</Link>
            </div>

            <div className="latest-posts">
                <h2>📚 Latest Posts</h2>
                {sortedPosts.map((post) => (
                    <div key={post.slug} className="post-preview">
                        {post.image && (
                            <img src={post.image} alt={post.title} className="post-image" />
                        )}
                        <h3>
                            <Link to={`/post/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <small>{post.date}</small>
                        <p>{post.excerpt}</p>
                        <Link to={`/post/${post.slug}`}>Read more →</Link>
                    </div>
                ))}
            </div>

            <div className="chatgpt-credit">⚡️ Built with ChatGPT</div>
            <div className="chatgpt-time">
                ⏱️ Hecha en aproximadamente 5 horas con pasión y curiosidad.
            </div>
        </div>
    );
}