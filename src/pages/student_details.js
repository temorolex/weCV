import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export const Studentdetails = () => {
    const history = useHistory();
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [address, setaddress] = useState('');
    const [github, setgithub] = useState('');
    const [linkedin, setlinkedin] = useState('');
    const [twitter, settwitter] = useState('');
    const [facebook, setfacebook] = useState('');
    const [instagram, setinstagram] = useState('');
    const nextStep = (e) => {
        e.preventDefault();
        if (firstname === null || lastname === null || email === null || phonenumber === null || address === null) {
            alert("please fill the mandatory fields");
        } else {
            history.push({ pathname: "/step2" });
        }
    }
    useEffect(() => {
        setfirstname(localStorage.getItem('firstname'));
        setlastname(localStorage.getItem('lastname'));
        setemail(localStorage.getItem('email'));
        setphonenumber(localStorage.getItem('phonenumber'));
        setaddress(localStorage.getItem('address'));
        setgithub(localStorage.getItem('github'));
        setlinkedin(localStorage.getItem('linkedin'));
        settwitter(localStorage.getItem('twitter'));
        setfacebook(localStorage.getItem('facebook'));
        setinstagram(localStorage.getItem('instagram'));
    }, []);

    return <div className='maincontainer'>
        <div className='output'>
            <h2>STUDENT DETAILS</h2>
            <form id='presonal-form'>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" value={firstname} onChange={(e) => { setfirstname(e.target.value); localStorage.setItem('firstname', e.target.value) }} placeholder="First name *" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" value={lastname} onChange={(e) => { setlastname(e.target.value); localStorage.setItem('lastname', e.target.value) }} placeholder="Last name *" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <input type="email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value); localStorage.setItem('email', e.target.value); }} placeholder="Email *" />
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" value={phonenumber} onChange={(e) => { setphonenumber(e.target.value); localStorage.setItem('phonenumber', e.target.value); }} placeholder="Phone Number *" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" value={address} onChange={(e) => { setaddress(e.target.value); localStorage.setItem('address', e.target.value); }} placeholder="Address" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" value={github} onChange={(e) => { setgithub(e.target.value); localStorage.setItem('github', e.target.value); }} placeholder="Github" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" value={linkedin} onChange={(e) => { setlinkedin(e.target.value); localStorage.setItem('linkedin', e.target.value); }} placeholder="Linked In" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" value={twitter} onChange={(e) => { settwitter(e.target.value); localStorage.setItem('twitter', e.target.value); }} placeholder="Twitter" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" value={facebook} onChange={(e) => { setfacebook(e.target.value); localStorage.setItem('facebook', e.target.value); }} placeholder="Facebook" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" value={instagram} onChange={(e) => { setinstagram(e.target.value); localStorage.setItem('instagram', e.target.value); }} placeholder="Instagram" />
                    </div>
                </div>
            </form>
            <div className='btnContainer'>
                <Link to="/step2" onClick={nextStep}>Next</Link>
            </div>
        </div>
    </div>;
};
