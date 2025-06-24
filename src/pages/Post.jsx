import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function Post({ posts }) {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    if (!post) return <p>Post not found</p>;

    return (
        <div style={{ padding: "2rem" }}>
            <Link to="/">← Back</Link>
            <h1>{post.title}</h1>
            <p><i>{post.date}</i></p>
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
    );
}