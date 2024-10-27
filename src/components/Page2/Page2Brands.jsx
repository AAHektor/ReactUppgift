import React from 'react'
import Logoipsum1 from '../../assets/images/logoipsum1.svg'
import Logoipsum2 from '../../assets/images/logoipsum2.svg'
import Logoipsum3 from '../../assets/images/logoipsum3.svg'
import Logoipsum4 from '../../assets/images/logoipsum4.svg'
import Logoipsum5 from '../../assets/images/logoipsum5.svg'
import Logoipsum6 from '../../assets/images/logoipsum6.svg'

const Brands = () => {
  return (
    <div className="brands">
        <ul>
            <li className="brands-border"><img src={Logoipsum1} alt="" /></li>
            <li className="brands-border"><img src={Logoipsum2} alt="" /></li>
            <li className="brands-border"><img src={Logoipsum3} alt="" /></li>
            <li className="brands-border"><img src={Logoipsum4} alt="" /></li>
            <li className="brands-border" id="logo-hide"><img src={Logoipsum5} alt="" /></li>
            <li className="brands-border brand-shadow" id="logo-hide"><img src={Logoipsum6} alt="" /></li>
        </ul>
    </div>
  )
}

export default Brands