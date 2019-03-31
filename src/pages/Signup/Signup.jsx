import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import { toast } from 'react-toastify';

import { signedUp } from 'redux/actions';

import Input from 'shared-components/Input/Input.jsx';
import storageService from 'services/storage.js';
import auth from 'services/Auth.js';

import Logo from 'assets/imgs/logo.png';
import { ReactComponent as Back } from 'assets/icons/arrow-right.svg';

import './Signup.scss';

class Signup extends React.Component {


    constructor(props) {
        super(props);
        this.form = React.createRef();
        const signupData = storageService.getSignupData();
        this.state = signupData ? signupData : {
            usertype: '',
            countryCode: '965',
            selectedCountry: 'kuwait',
            name: '',
            mob: '',
            email: '',
            units: '',
            contractno: '',
            landlordName: '',
            step: 1,
            toDashboard: false
        };
        this.storeFormDataInStorage = this.storeFormDataInStorage.bind(this);
    }

    componentDidMount() {
        window.addEventListener("unload", this.storeFormDataInStorage);
    }

    componentWillUnmount() {
        window.removeEventListener("unload", this.storeFormDataInStorage);
    }

    handleTypeChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    /* Function to validate form in step 1 before going to next step */
    goToNextStep = (event) => {
        if (this.form.current.reportValidity()) {
            this.setState({
                step: 2
            });
        } else {
            this.showErrorToast();
        }

    }

    storeFormDataInStorage() {
        storageService.storeFormData(this.state);
    }

    /* Handle Toast notification for error */
    showErrorToast() {
        if (!toast.isActive('signup')) {
            toast.warn('Please enter all details', { hideProgressBar: true, toastId: 'signup' });
        }
    }

    goToPreviousStep = (e) => {
        this.setState({
            step: 1
        });
    }

    /* Handle signup form submit */
    signup = (e) => {
        if (this.form.current.reportValidity()) {
            const user = {
                name: this.state.name,
                role: this.state.usertype
            }
            storageService.setUser(user);
            storageService.removeFormData();
            auth.authenticate();
            this.props.signedUp(user)
            this.setState({
                toDashboard: true
            });
        } else {
            this.showErrorToast();
        }
    }

    handleCountryChange = (event) => {
        const selectedCountry = event.target.value;
        let countryCode;
        switch (selectedCountry) {
            case 'kuwait': {
                countryCode = '965';
                break;
            }
            case 'uae': {
                countryCode = '971';
                break;
            }
            case 'ksa': {
                countryCode = '966';
                break;
            }
            case 'qatar': {
                countryCode = '974';
                break;
            }
            default: {
                countryCode = '965';
                break;
            }
        }
        this.setState({
            selectedCountry: selectedCountry,
            countryCode: countryCode
        });
    }

    render() {
        const state = this.state;
        if (this.state.toDashboard === true) {
            return <Redirect to='/dashboard' />
        }
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
                                    <form className='signupform' ref={this.form} noValidate>
                                        {
                                            state.step === 1 ?
                                                <>
                                                    <div className="field is-horizontal">
                                                        <div className="field-label is-normal">
                                                            <label className="label">Who are you</label>
                                                        </div>
                                                        <div className="field-body">
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="select">
                                                                        <select required value={state.usertype} name='usertype' onChange={this.handleTypeChange}>
                                                                            <option value=''>Choose</option>
                                                                            <option value='tenant'>Tenant</option>
                                                                            <option value='landlord'>Landlord</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Input label='Your Name' type='text' value={state.name}
                                                        handleChange={this.handleTypeChange} name='name'
                                                        placeholder="Enter your name "
                                                        required={true}>
                                                    </Input>

                                                    <Input label='Your Email' type='email' value={state.email}
                                                        handleChange={this.handleTypeChange} name='email'
                                                        placeholder="Enter your Email "
                                                        required={true}>
                                                    </Input>

                                                    <div className="field is-horizontal">
                                                        <div className="field-label is-normal">
                                                            <label className="label">Country</label>
                                                        </div>
                                                        <div className="field-body">
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="select">
                                                                        <select required value={state.selectedCountry} name='country' onChange={this.handleCountryChange}>
                                                                            <option value='kuwait'>Kuwait</option>
                                                                            <option value='ksa'>Saudi Arabia</option>
                                                                            <option value='uae'>UAE</option>
                                                                            <option value='qatar'>Qatar</option>
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
                                                                <p className="control"><button className="button is-static">+{state.countryCode}</button></p>
                                                                <p className="control">
                                                                    <input className="input"
                                                                        type="number" name="mob"
                                                                        value={state.mob} placeholder="Enter Mobile No "
                                                                        onChange={this.handleTypeChange}
                                                                    />
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <button className="button is-text back" type='button' onClick={this.goToPreviousStep}><Back /></button>
                                                    <div className="pt-1">

                                                        {
                                                            this.state.usertype === 'tenant' ?
                                                                <>
                                                                    <Input label='Landlord Name' type='text' value={state.landlordName}
                                                                        handleChange={this.handleTypeChange} name='landlordName'
                                                                        placeholder="Enter Landlord Name "
                                                                        required={true}>
                                                                    </Input>

                                                                    <Input label='Contract Number' type='text' value={state.contractno}
                                                                        handleChange={this.handleTypeChange} name='contractno'
                                                                        placeholder="Enter Contract Number"
                                                                        required={true}>
                                                                    </Input>

                                                                </>
                                                                : ''
                                                        }

                                                        {
                                                            state.usertype === 'landlord' ?
                                                                <>
                                                                    <Input label='Number of Units' type='number' value={state.units}
                                                                        handleChange={this.handleTypeChange} name='units'
                                                                        placeholder="Enter Number of Units"
                                                                        required={true}>
                                                                    </Input>
                                                                </>
                                                                : ''
                                                        }
                                                    </div>

                                                </>
                                        }

                                        <div className='is-flex justify-content-center pt-1'>
                                            {
                                                state.step === 1 ?
                                                    <button className="button is-primary" type='button' onClick={this.goToNextStep}>Next</button>
                                                    :
                                                    <button className="button is-primary" type='button' onClick={this.signup}>Submit</button>
                                            }
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default connect(null, { signedUp })(Signup);