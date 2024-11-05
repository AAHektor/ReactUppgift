import React, { useState, useEffect } from 'react'
import DesktopOnlyPage2img1 from '../../assets/images/images-page-5/quotes.svg'

import StarOutlineIcon from '../../assets/images/images-page-5/starOutline.svg'
import StarIcon from '../../assets/images/images-page-5/star.svg'

const DesktopOnlyPage2CardContainer = () => {

    const [testimonials, setTestimonials] = useState([])

    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonials(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const renderStars = (starRating) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <img key={index}
             src={index < starRating ? StarIcon : StarOutlineIcon} 
             alt="Star" 
             className='star-icon' />
        ))
    }
    
  return (
    <div className="card-container">
        {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="card">
            <div className="card-icon">
                <img src={DesktopOnlyPage2img1} alt="" />
            </div>
            <div className="card-rating-icon">
                {renderStars(testimonial.starRating)}
            </div>
            <div className="card-text">
                <p>{testimonial.comment}</p>
            </div>
            <div className="avatar-text-container">
                <img src={testimonial.avatarUrl} alt="" />
                <div>
                    <h5>{testimonial.author}</h5>
                    <p>{testimonial.jobRole}</p>
                </div>
            </div>
        </div>
        ))}

    </div>
  )
}

export default DesktopOnlyPage2CardContainer