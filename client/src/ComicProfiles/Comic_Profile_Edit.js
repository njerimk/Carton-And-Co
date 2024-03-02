import React, { Component } from 'react'

export default class Comic_Profile_Edit extends Component {
    render() {
        return (
            <div>
                <div class="col-md-4">
                        <div class="profile-img">
                            <img src={this.props.image_url} alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }
}
