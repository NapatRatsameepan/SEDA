import React, { useState } from 'react'
import '../styles/NewestPost.css'
import data from '../data/posts.json'

import PostTypeChip from './PostTypeChip.jsx'
import Calendar from '../assets/Calendar.svg'
import View from '../assets/view.svg'
import GridView from '../assets/GridView.svg'
import ListView from '../assets/ListView.svg'

function NewestPost() {

    const [view, setView] = useState('grid');

    const postData = data
        .filter(post => !post.isHero)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(2, 5);

    return (
        <>
            <div className="newest-post-header">
                <h2 className="newest-post-heading">Newest</h2>
                <div className="view-toggle-container">
                    <img 
                    src={ListView} 
                    alt="ListView" 
                    onClick={() => setView('list')}
                    className={`view-btn ${view === 'list' ? 'active' : ''}`}
                    />
                    <span className="divider" >|</span>
                    <img 
                    src={GridView}
                    alt="GridView" 
                    onClick={() => setView('grid')}
                    className={`view-btn ${view === 'grid' ? 'active' : ''}`}
                    />
                </div>    
            </div>
            <section className={`newest-post-grid ${view === 'list' ? 'list-view' : ''}`}>
                {postData.map((post, index) => (
                    <div className="newest-post" key={index}>
                        <div className="newest-post-image-wrapper">
                            <img src={post.image} alt={post.title} className="newest-post-image" />
                        </div>
                        <div className="newest-post-content">
                            <h4 className="newest-post-title">
                                {post.title}
                            </h4>
                            <div className="newest-post-meta">
                                <div className="newest-post-item">
                                    <span className="newest-post-content">{post.content}</span>
                                </div>
                                <div className="newest-post-info">
                                    <div className="newest-post-item">
                                        <img src={Calendar} alt="Calendar" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="newest-post-item">
                                        <img src={View} alt="View" />
                                        <span>{post.view}</span>
                                        <span> Views</span>
                                    </div>
                                </div>
                                <div className="newest-post-item">
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

export default NewestPost