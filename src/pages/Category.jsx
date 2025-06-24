import React from "react";
import { useParams, Link } from "react-router-dom";

export default function Category({ posts }) {
    const { category } = useParams();
    const filtered = posts.filter((post) => post.category === category);

    return (
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h1 style={{ textTransform: "capitalize" }}>
                Posts in {category}
            </h1>

            {filtered.length === 0 ? (
                <p>No posts yet in this category.</p>
            ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {filtered.map((post) => (
                        <div key={post.slug} style={{ borderBottom: "1px solid #eee", marginBottom: "1.5rem" }}>
                            {post.image && (
                                <img src={post.image} alt={post.title} className="post-image" />
                            )}
                            <h2>
                                <Link to={`/post/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <small>{post.date}</small>
                            <p>{post.excerpt}</p>
                            <Link to={`/post/${post.slug}`}>Read more →</Link>
                        </div>

                    ))}
                </div>
            )}

            <p style={{ marginTop: "2rem" }}>
                <Link to="/">← Back to Home</Link>
            </p>
        </div>
    );
}