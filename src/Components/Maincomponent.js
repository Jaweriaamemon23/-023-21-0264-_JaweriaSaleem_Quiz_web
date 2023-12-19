import React from 'react';
import '../App.css'; // Correct import path for the CSS file
import { Form, Button } from 'react-bootstrap';
import bg2 from '../Assets/Group 8666.png'
const Maincomponent = () => {
  return (
    <>
      <div className='bg'>
        <div className="container">
          <div className='row'>
            <div className='col-sm-12 col-lg-6'>
              <h4 style={{ alignItems: 'center', paddingTop: '50px', fontSize: '40px', fontFamily: 'Abhaya Libre, sans-serif', fontWeight: 800  }}>
              <b> Request <span style={{ color: 'blue' }}>Callback</span>
               </b></h4>
              <div className="row">
                <div className="col-md-6 form-group col-sm-12 col-lg-6">
                    <h6 style={{paddingTop:'70px'}}>Name*</h6>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0 col-lg-6 col-sm-12">
                <h6 style={{paddingTop:'70px'}}>Email*</h6>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />

                </div>
                <div className="col-md-6 form-group col-lg-6 col-sm-12">
                <br></br>
                <br></br>
                <h6>Mobile NUmber*</h6>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="YourMObile Number"
                    required
                  />
                </div>
                <br>
                </br>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                <br></br>
              <br></br>
                <h6>Looking to invest*</h6>
 
                  <input
                    type="msg"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Looking to invest"
                    required
                  />
                </div>
             <br></br>
             <br></br>
                <Form.Check style={{paddingTop:'40px'}} type="checkbox" label="I authorize Estee Advisors Pvt. Ltd. to contact me. This will override registry on the NDNC. As per SEBI guide Lines, minimum investment required is of ₹50 Lakhs." />
             <br>
             </br>
             <br></br>
                <Button style={{borderRadius:'30px'}} variant="success" type="submit">
        Submit
      </Button>
    
              </div>
            </div>
         
          <div className="col-lg-6 col-sm-12 col-md-6">
            <img src={bg2} alt="SKYSYNC" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            </div> </div>
        </div>
      </div>
    </>
  );
}

export default Maincomponent;
