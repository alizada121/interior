import React from 'react'
import PortfolioHeader from './PortfolioHeader'
import PortfolioSlider from './PortfolioSlider'

import PortfolioSliderMobile from './PortfolioSliderMobile'

import "../portfolio/Portfolio.css"

function Portfolio() {
  return (
    <div className='portfolio-container'>
        <div className='portfolio'>
            <PortfolioHeader/>
            <div className='PortfolioSlider-page'>
                <PortfolioSlider/>
            </div>
            
            <div className='PortfolioSliderMobile-page'>
                <PortfolioSliderMobile/>
            </div>
            
        </div>

    </div>
  )
}

export default Portfolio