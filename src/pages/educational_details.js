import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../App.css';

export const Educationaldetails = () => {
    const history = useHistory();
    const [collegename, setcollegename] = useState('');
    const [collegedate, setcollegedate] = useState('');
    const [collegecgpa, setcollegecgpa] = useState('');
    const [collegequalification, setcollegequalification] = useState('');
    const [collegedescription, setcollegedescription] = useState('');
    const [hscschoolname, sethscschoolname] = useState('');
    const [hscschooldate, sethscschooldate] = useState('');
    const [hscschoolpercentage, sethscschoolpercentage] = useState('');
    const [hscschoolqualification, sethscschoolqualification] = useState('');
    const [hscschooldescription, sethscschooldescription] = useState('');

    const [sslcschoolname, setsslcschoolname] = useState('');
    const [sslcschooldate, setsslcschooldate] = useState('');
    const [sslcschoolpercentage, setsslcschoolpercentage] = useState('');
    const [sslcschoolqualification, setsslcschoolqualification] = useState('');
    const [sslcschooldescription, setsslcschooldescription] = useState('');

    useEffect(() => {
        setcollegename(localStorage.getItem('collegename'));
        setcollegedate(localStorage.getItem('collegedate'));
        setcollegecgpa(localStorage.getItem('collegecgpa'));
        setcollegequalification(localStorage.getItem('collegequalification'));
        setcollegedescription(localStorage.getItem('collegedescription'));
        sethscschoolname(localStorage.getItem('hscschoolname'));
        sethscschooldate(localStorage.getItem('hscschooldate'));
        sethscschoolpercentage(localStorage.getItem('hscschoolpercentage'));
        sethscschoolqualification(localStorage.getItem('hscschoolqualification'));
        sethscschooldescription(localStorage.getItem('hscschooldescription'));
        setsslcschoolname(localStorage.getItem('sslcschoolname'));
        setsslcschooldate(localStorage.getItem('sslcschooldate'));
        setsslcschoolpercentage(localStorage.getItem('sslcschoolpercentage'));
        setsslcschoolqualification(localStorage.getItem('sslcschoolqualification'));
        setsslcschooldescription(localStorage.getItem('sslcschooldescription'));
    }, []);



    const nextStep = () => {
        if (collegename === null || collegedate === null || collegecgpa === null ||
            collegequalification === null || collegedescription === null || hscschoolname === null || hscschooldate === null ||
            hscschoolpercentage === null || hscschoolqualification === null || hscschooldescription === null ||
            sslcschoolname === null || sslcschooldate === null || sslcschoolpercentage === null || sslcschoolqualification === null ||
            sslcschooldescription === null) {
            alert("please fill all mandatory fields");
        } else {
            history.push('/step3');
        }

    }
    const prevStep = () => {
        history.push('/step1');
    }
    return <div className='maincontainer'>
        <div className='output'>
            <h2>EDUCATION DETAILS</h2>
            <br />
            <form id='presonal-form'>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="College/University *" value={collegename} onChange={(e) => { setcollegename(e.target.value); localStorage.setItem('collegename', e.target.value) }} />
                    </div>
                    <div className="col">
                        <input type="date" className="form-control" placeholder="Year *" value={collegedate} onChange={(e) => { setcollegedate(e.target.value); localStorage.setItem('collegedate', e.target.value) }} />
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="cgpa *" value={collegecgpa} onChange={(e) => { setcollegecgpa(e.target.value); localStorage.setItem('collegecgpa', e.target.value) }} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Qualification *" value={collegequalification} onChange={(e) => { setcollegequalification(e.target.value); localStorage.setItem('collegequalification', e.target.value) }} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Description *" value={collegedescription} onChange={(e) => { setcollegedescription(e.target.value); localStorage.setItem('collegedescription', e.target.value) }} />
                    </div>

                </div>
                <br /><br />
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="school *" value={hscschoolname} onChange={(e) => { sethscschoolname(e.target.value); localStorage.setItem('hscschoolname', e.target.value) }} />
                    </div>
                    <div className="col">
                        <input type="date" className="form-control" placeholder="Year *" value={hscschooldate} onChange={(e) => { sethscschooldate(e.target.value); localStorage.setItem('hscschooldate', e.target.value) }} />
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Percentage *" value={hscschoolpercentage} onChange={(e) => { sethscschoolpercentage(e.target.value); localStorage.setItem('hscschoolpercentage', e.target.value) }} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Qualification *" value={hscschoolqualification} onChange={(e) => { sethscschoolqualification(e.target.value); localStorage.setItem('hscschoolqualification', e.target.value) }} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Description *" value={hscschooldescription} onChange={(e) => { sethscschooldescription(e.target.value); localStorage.setItem('hscschooldescription', e.target.value) }} />
                    </div>

                </div>
                <br /><br />
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="School *" value={sslcschoolname} onChange={(e) => { setsslcschoolname(e.target.value); localStorage.setItem('sslcschoolname', e.target.value) }} />
                    </div>
                    <div className="col">
                        <input type="date" className="form-control" placeholder="Year *" value={sslcschooldate} onChange={(e) => { setsslcschooldate(e.target.value); localStorage.setItem('sslcschooldate', e.target.value) }} />
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Percentage *" value={sslcschoolpercentage} onChange={(e) => { setsslcschoolpercentage(e.target.value); localStorage.setItem('sslcschoolpercentage', e.target.value) }} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Qualification *" value={sslcschoolqualification} onChange={(e) => { setsslcschoolqualification(e.target.value); localStorage.setItem('sslcschoolqualification', e.target.value) }} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Description *" value={sslcschooldescription} onChange={(e) => { setsslcschooldescription(e.target.value); localStorage.setItem('sslcschooldescription', e.target.value) }} />
                    </div>

                </div>
            </form>
            <br />
            <div className='btnContainer'>
                <Link onClick={prevStep}>Back</Link>
                <Link onClick={nextStep}>Next</Link>
            </div>
        </div>
    </div>;
};
