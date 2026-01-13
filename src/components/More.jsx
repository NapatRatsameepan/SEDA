import React from 'react'

function More() {
  return (
    <>
    <style jsx>{`
    .more-button-container {
        display: flex;
        justify-content: center; 
        align-items: center;
        margin: 60px 0px 30px 0px;
    }

    .more-button {
        border: none;
        border-radius: 10px;
        width: clamp(118px, 27.44vw, 236px);
        height: clamp(22px, 5.12vw, 45px);
        cursor: pointer;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: clamp(8px, 1.86vw, 16px);
        font-style: medium;
        font-weight: 500;
    }
    `}</style>

    <div className="more-button-container">
        <button className='more-button'>
            ดูเพิ่มเติม
        </button>
    </div>
    </>
  )
}

export default More