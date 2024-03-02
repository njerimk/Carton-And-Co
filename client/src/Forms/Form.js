import React, { Component } from 'react'
import './GreatGrandkids/UserProfile.css'

export default class UserForm extends Component {
    render() {
        return (
          <div className="col-xl-8 order-xl-1">
            <div className="card bg-secondary shadow">
              <div className="card-header bg-white border-0">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h3 className="mb-0">My account</h3>
                  </div>
                <form>
                  <h6 className="heading-small text-muted mb-4">User information</h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" for="input-username">Username</label>
                          <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value="lucky.jesse"/>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label" for="input-email">Email address</label>
                          <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="jesse@example.com"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" for="input-first-name">First name</label>
                          <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" value="Lucky"/>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" for="input-last-name">Last name</label>
                          <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" value="Jesse"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4"/>

                  <h6 className="heading-small text-muted mb-4">Contact information</h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group focused">
                          <label className="form-control-label" for="input-address">Address</label>
                          <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label className="form-control-label" for="input-city">City</label>
                          <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value="New York"/>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label className="form-control-label" for="input-country">Country</label>
                          <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value="United States"/>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label className="form-control-label" for="input-country">Postal code</label>
                          <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code" value="postalCode"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4"/>

                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <div className="form-group focused">
                      <label>About Me</label>
                      <textarea rows="4" className="form-control form-control-alternative" value="A few words about you ..."/>
                    </div>
                  </div>
                </form>
            </div>
            </div>
          </div>
        </div>
        )
    }
}
