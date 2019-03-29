import * as React from 'react';

import Logo from 'assets/imgs/logo.png';

import './Signup.scss';

class Signup extends React.Component {
    render() {
        return (
            <div className="signup">
                <nav className="navbar main-header" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src={Logo} width="95" alt="ajar logo" />
                        </a>
                    </div>

                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <div className="navbar-item">

                            </div>
                        </div>
                    </div>
                </nav>
                <div className="signupContent section">
                    <div className="columns is-mobile is-centered h-100 is-vcentered">
                        <div className="column is-two-fifths-desktop is-full-mobile is-three-quarters-tablet">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        SIGNUP FOR EASY RENT PAYMENT AND COLLECTION
                                    </p>
                                </header>
                                <div className="card-content">
                                    <form className='signupform'>

                                        <div className="field is-horizontal">
                                            <div className="field-label is-normal">
                                                <label className="label">Who are you</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <div className="control">
                                                        <div className="select">
                                                            <select>
                                                                <option>Choose</option>
                                                                <option>Tenant</option>
                                                                <option>Landlord</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="field is-horizontal">
                                            <div className="field-label is-normal">
                                                <label className="label">Name</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control">
                                                        <input className="input" type="text" placeholder="Enter your name " />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="field is-horizontal">
                                            <div className="field-label is-normal">
                                                <label className="label">Email</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control">
                                                        <input className="input" type="text" placeholder="Enter your email " />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="field is-horizontal">
                                            <div className="field-label is-normal">
                                                <label className="label">Country</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <div className="control">
                                                        <div className="select">
                                                            <select>
                                                                <option>Kuwait</option>
                                                                <option>Saudi Arabia</option>
                                                                <option>UAE</option>
                                                                <option>Qatar</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="field is-horizontal">
                                            <div className="field-label is-normal">
                                                <label className="label">Mobile No.</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field has-addons">
                                                    <p className="control"><button className="button is-static">+965</button></p>
                                                    <p className="control">
                                                        <input className="input" type="number" name="name" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="field is-horizontal">
                                            <div className="field-label is-normal">
                                                <label className="label">Landlord Name</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control">
                                                        <input className="input" type="text" placeholder="Enter Landlord Name " />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;