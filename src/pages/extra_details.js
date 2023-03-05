import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../App.css";

export const Extradetails = () => {
  const history = useHistory();
  const [skill1, setskill1] = useState("");
  const [skill2, setskill2] = useState("");
  const [skill3, setskill3] = useState("");
  const [skill4, setskill4] = useState("");
  const [skill5, setskill5] = useState("");
  const [skill6, setskill6] = useState("");
  const [intrest1, setintrest1] = useState("");
  const [intrest2, setintrest2] = useState("");
  const [intrest3, setintrest3] = useState("");
  const [intrest4, setintrest4] = useState("");
  const [intrest5, setintrest5] = useState("");
  const [intrest6, setintrest6] = useState("");
  const [careerobjective, setcareerobjective] = useState("");
  const [personalskill1, setpersonalskill1] = useState("");
  const [personalskill2, setpersonalskill2] = useState("");
  const [personalskill3, setpersonalskill3] = useState("");
  const [personalskill4, setpersonalskill4] = useState("");
  const [personalskill5, setpersonalskill5] = useState("");
  const [personalskill6, setpersonalskill6] = useState("");

  useEffect(() => {
    setskill1(localStorage.getItem("skill1"));
    setskill2(localStorage.getItem("skill2"));
    setskill3(localStorage.getItem("skill3"));
    setskill4(localStorage.getItem("skill4"));
    setskill5(localStorage.getItem("skill5"));
    setskill6(localStorage.getItem("skill6"));
    setintrest1(localStorage.getItem("intrest1"));
    setintrest2(localStorage.getItem("intrest2"));
    setintrest3(localStorage.getItem("intrest3"));
    setintrest4(localStorage.getItem("intrest4"));
    setintrest5(localStorage.getItem("intrest5"));
    setintrest6(localStorage.getItem("intrest6"));
    setcareerobjective(localStorage.getItem("careerobjective"));
    setpersonalskill1(localStorage.getItem("personalskill1"));
    setpersonalskill2(localStorage.getItem("personalskill2"));
    setpersonalskill3(localStorage.getItem("personalskill3"));
    setpersonalskill4(localStorage.getItem("personalskill4"));
    setpersonalskill5(localStorage.getItem("personalskill5"));
    setpersonalskill6(localStorage.getItem("personalskill6"));
  }, []);

  const prevStep = () => {
    history.push("/step2");
  };
  const nextStep = e => {
    e.preventDefault();
    if (
      skill1 === null ||
      skill2 === null ||
      intrest1 === null ||
      intrest2 === "" ||
      careerobjective === null ||
      personalskill1 === null ||
      personalskill2 === null
    ) {
      alert("please fill all mandatory fields");
    } else {
      history.push("/step4");
    }
  };
  return (
    <div className="maincontainer">
      <div className="output">
        <h2>EXTRA DETAILS</h2>
        <div id="skillset">
          <h5>SKILLS/LANGUAGES</h5>
          <br />
          <form id="presonal-form">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 1 *"
                  value={skill1}
                  onChange={e => {
                    setskill1(e.target.value);
                    localStorage.setItem("skill1", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 2 *"
                  value={skill2}
                  onChange={e => {
                    setskill2(e.target.value);
                    localStorage.setItem("skill2", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 3"
                  value={skill3}
                  onChange={e => {
                    setskill3(e.target.value);
                    localStorage.setItem("skill3", e.target.value);
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
                  placeholder="skill 4"
                  value={skill4}
                  onChange={e => {
                    setskill4(e.target.value);
                    localStorage.setItem("skill4", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 5"
                  value={skill5}
                  onChange={e => {
                    setskill5(e.target.value);
                    localStorage.setItem("skill5", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 6"
                  value={skill6}
                  onChange={e => {
                    setskill6(e.target.value);
                    localStorage.setItem("skill6", e.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <h5>AREA OF INTREST</h5>
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Intrest 1 *"
                  value={intrest1}
                  onChange={e => {
                    setintrest1(e.target.value);
                    localStorage.setItem("intrest1", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Intrest 2 *"
                  value={intrest2}
                  onChange={e => {
                    setintrest2(e.target.value);
                    localStorage.setItem("intrest2", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Intrest 3"
                  value={intrest3}
                  onChange={e => {
                    setintrest3(e.target.value);
                    localStorage.setItem("intrest3", e.target.value);
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
                  placeholder="Intrest 4"
                  value={intrest4}
                  onChange={e => {
                    setintrest4(e.target.value);
                    localStorage.setItem("intrest4", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Intrest 5"
                  value={intrest5}
                  onChange={e => {
                    setintrest5(e.target.value);
                    localStorage.setItem("intrest5", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Intrest 6"
                  value={intrest6}
                  onChange={e => {
                    setintrest6(e.target.value);
                    localStorage.setItem("intrest6", e.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <h5>CAREER OBJECTIVE</h5>
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Career Objective *"
                  value={careerobjective}
                  onChange={e => {
                    setcareerobjective(e.target.value);
                    localStorage.setItem("careerobjective", e.target.value);
                  }}
                />
              </div>
            </div>
            <br />

            <br />
            <h5>PERSONAL SKILLS</h5>
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 1 *"
                  value={personalskill1}
                  onChange={e => {
                    setpersonalskill1(e.target.value);
                    localStorage.setItem("personalskill1", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 2 *"
                  value={personalskill2}
                  onChange={e => {
                    setpersonalskill2(e.target.value);
                    localStorage.setItem("personalskill2", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 3"
                  value={personalskill3}
                  onChange={e => {
                    setpersonalskill3(e.target.value);
                    localStorage.setItem("personalskill3", e.target.value);
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
                  placeholder="skill 4"
                  value={personalskill4}
                  onChange={e => {
                    setpersonalskill4(e.target.value);
                    localStorage.setItem("personalskill4", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 5"
                  value={personalskill5}
                  onChange={e => {
                    setpersonalskill5(e.target.value);
                    localStorage.setItem("personalskill5", e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 6"
                  value={personalskill6}
                  onChange={e => {
                    setpersonalskill6(e.target.value);
                    localStorage.setItem("personalskill6", e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </div>
        <br />
        <div className="btnContainer">
          <Link onClick={prevStep}>Back</Link>
          <Link onClick={nextStep}>Next</Link>
        </div>
      </div>
    </div>
  );
};
