import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import { useState, useEffect, React } from "react";

export const Personaldetails = () => {
  const history = useHistory();
  const [fathername, setfathername] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [gender, setgender] = useState("");
  const [maritalstatus, setmaritalstatus] = useState("");
  const [nationality, setnationality] = useState("");
  const [languageproficiency, setlanguageproficiency] = useState("");
  const [place, setplace] = useState("");

  useEffect(() => {
    setfathername(localStorage.getItem("fathername"));
    setdateofbirth(localStorage.getItem("dateofbirth"));
    setgender(localStorage.getItem("gender"));
    setmaritalstatus(localStorage.getItem("maritalstatus"));
    setnationality(localStorage.getItem("nationality"));
    setlanguageproficiency(localStorage.getItem("languageproficiency"));
    setplace(localStorage.getItem("place"));
  }, []);

  const prevStep = () => {
    history.push("/step3");
  };
  const nextStep = e => {
    e.preventDefault();
    if (
      fathername === null ||
      dateofbirth === "" ||
      gender === "" ||
      maritalstatus === null ||
      nationality === "" ||
      languageproficiency === "" ||
      place === null
    ) {
      alert("please fill mandatory fields");
    } else {
      history.push("/step5");
    }
  };
  return (
    <div className="maincontainer">
      <div className="output">
        <h2>PERSONAL DETAILS</h2>
        <br />
        <div id="skillset">
          <form id="presonal-form">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Father Name *"
                  value={fathername}
                  onChange={e => {
                    setfathername(e.target.value);
                    localStorage.setItem("fathername", e.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date Of Birth *"
                  value={dateofbirth}
                  onChange={e => {
                    setdateofbirth(e.target.value);
                    localStorage.setItem("dateofbirth", e.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <select
                  className="form-control"
                  placeholder="Gender *"
                  value={gender}
                  onChange={e => {
                    setgender(e.target.value);
                    localStorage.setItem("gender", e.target.value);
                  }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <select
                  className="form-control"
                  placeholder="Marital Status *"
                  value={maritalstatus}
                  onChange={e => {
                    setmaritalstatus(e.target.value);
                    localStorage.setItem("maritalstatus", e.target.value);
                  }}
                >
                  <option value="married">Married</option>
                  <option value="un married">Un Married</option>
                </select>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nationality *"
                  value={nationality}
                  onChange={e => {
                    setnationality(e.target.value);
                    localStorage.setItem("nationality", e.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Language Proficiency *"
                  value={languageproficiency}
                  onChange={e => {
                    setlanguageproficiency(e.target.value);
                    localStorage.setItem("languageproficiency", e.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="place *"
                  value={place}
                  onChange={e => {
                    setplace(e.target.value);
                    localStorage.setItem("place", e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
          <br />
          <div className="btnContainer">
            <Link onClick={prevStep}>Back</Link>
            <Link onClick={nextStep}>Next</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
