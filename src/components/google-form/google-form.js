import React from "react"
import Container from "../container"
import { Link } from "gatsby"

//icons
const GoogleForm = () => {

  return (
    <div className="registration">
      <Container>
        <div className="registration-section">
          
          <div className="back-to-home-button">
            <Link to="/" className="btn btn_violet-outline">
              Back to Home Page
              </Link>
          </div>

          <iframe title="devhost-registration-form" 
          src="https://docs.google.com/forms/d/e/1FAIpQLSdv5Zlv6ModjWTqUqXwLaw-DKYP3SuxC5j7XtvD0IZhmOTD4A/viewform?embedded=true" 
          width="100%"
          height="2800"
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0">
            Loading…
          </iframe>
        
        </div>
      </Container>
    </div>
  )
}

export default GoogleForm
