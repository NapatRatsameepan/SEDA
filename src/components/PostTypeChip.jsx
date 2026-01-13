import React from 'react'

function PostTypeChip({ type }) {

  return (
    <>
      <style jsx>{`
      .post-type-chip {
        background-color: var(--Color-second);
        color: var(--Color-text-white);
        font-size: clamp(6px, 1.4vw, 16px);
        font-weight: 700;
        font-style: bold;
        width: clamp(61px, 14.19vw, 164px);
        height: clamp(12px, 2.79vw, 31px);
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        border-radius: 8px;
      }
    `}</style>

      <div className="post-type-chip">
        {type}
      </div>
    </>
  )
}

export default PostTypeChip