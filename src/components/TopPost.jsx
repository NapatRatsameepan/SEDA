import React from 'react'
import data from '../data/posts.json'
import '../styles/TopPost.css'

import PostTypeChip from './PostTypeChip.jsx'
import Calendar from '../assets/Calendar.svg'
import View from '../assets/view.svg'

function TopPost() {

    const postData = data
        .filter(post => !post.isHero)
        .sort((a, b) => b.viewCount - a.viewCount)
        .slice(0, 2);

    return (
        <>
            <div className="top-post-header">
                <h2 className="top-post-heading">Most Viewer</h2>
            </div>
            <section className="top-post-grid">
                {postData.map((post, index) => (
                    <div className="top-post" key={index}>
                        <div className="top-post-image-wrapper">
                            <img src={post.image} alt={post.title} className="top-post-image" />

                            <h4 className="top-post-title">
                                {post.title}
                            </h4>
                        </div>
                        <div className="top-post-content">

                            <div className="top-post-meta">
                                <div className="top-post-item">
                                    <span className="top-post-content">{post.content}</span>
                                </div>
                                <div className="top-post-info">
                                    <div className="top-post-item">
                                        <img src={Calendar} alt="Calendar" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="top-post-item">
                                        <img src={View} alt="View" />
                                        <span>{post.view}</span>
                                        <span> Views</span>
                                    </div>
                                </div>
                                <div className="top-post-item">
                                    <PostTypeChip type={post.type} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default TopPost