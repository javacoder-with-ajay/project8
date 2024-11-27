import React from 'react'
import { useNavigate } from 'react-router-dom'

const Universe = () => {
  const navigate=useNavigate();
  return (
    <div className='container mt-5'>
      <div className='row text-center mt-5 mb-5'>
        <h2>The Zerodha Universe</h2>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='col-lg-4 col-sm-12 p-3 mt-3'>
          <img src='media\images\smallcaseLogo.png' />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <div className='col-lg-4 col-sm-12 p-3 mt-3'>
          <img src='media\images\streakLogo.png' style={{width:"45%"}}/>
          <p className='text-small text-muted'>Algo & strategy platform</p>
        </div>
        <div className='col-lg-4 col-sm-12 p-3 mt-3'>
          <img src='media\images\sensibullLogo.svg'style={{width:"50%"}} />
          <p className='text-small text-muted'>Options trading platform</p>
        </div>

        <div className='col-lg-4 col-sm-12 p-3 mt-5'>
          <img src='media\images\zerodhaFundhouse.png'style={{width:"50%"}} />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <div className='col-lg-4 col-sm-12 p-3 mt-5'>
          <img src='media\images\smallcaseLogo.png' style={{width:"45%"}}/>
          <p className='text-small text-muted'>Algo & strategy platform</p>
        </div>
        <div className='col-lg-4 col-sm-12 p-3 mt-5'>
          <img src='media\images\dittoLogo.png' style={{width:"40%"}}/>
          <p className='text-small text-muted'>Options trading platform</p>
        </div>
        <button className='hero-btn p-lg-2 btn btn-primary fs-lg-5 p-md-1 mt-5 mb-5 ' onClick={()=>navigate("/signup")}>Sign up now</button>
      </div>
    </div>
  )
}

export default Universe