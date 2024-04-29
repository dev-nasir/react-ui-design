import React from 'react'
import './styles.css'
import flower from '../../assets/image/flower.svg'
import Button from '../../components/button'
import Card from '../../components/card'
import Semmain from '../../assets/image/SEMmain1.svg'






const Landing = () => {
  return (
    <div className='main'>
      {/* r1 */}
      <div className='row-1'>
        <div className='img-div-image-1'>
          <img src={flower}></img>
        </div>

        <div className='para-dev'>
          <h2 className='heading'>S H I L L - T O - E A R N</h2>
          <p className='para'>Post on Twitter with $SEM or @SemAtlman and earn! </p>
          <Button title={"CONNECT TWITTER"} />
          <p className='para-1'>By connecting your twitter you agree to the Terms of Use and Privacy Policy</p>
        </div>

        <div className='img-div'>
          <img src={flower}></img>
        </div>
      </div>
      {/* r2 */}
<div className='dev'>
      <Card>
        <div className='landing-card'>
          <div className='landing-page'>
            <h2 className='heading'>1</h2>
          </div>
          <div className='para-p'>
            <h3>SIGN UP</h3>
            <p>SIMPLY CONNECT YOUR TWITTER.</p>
          </div>
        </div>
        <div className='landing-card'>
          <div className='landing-page'>
            <h2 className='heading'>2</h2>
          </div>
          <div className='para-p'>
            <h3>POST</h3>
            <p>SIMPLY CONNECT YOUR TWITTER.</p>
          </div>
        </div>
        <div className='landing-card'>
          <div className='landing-page'>
            <h2 className='heading'>3</h2>
          </div>
          <div className='para-p'>
            <h3>EARN</h3>
            <p>SIMPLY CONNECT YOUR TWITTER.</p>
          </div>
        </div>
      </Card>


      <div className='image-path'>
          <img src={Semmain}></img>
        </div>

      </div>
    </div>
  )
}

export default Landing

