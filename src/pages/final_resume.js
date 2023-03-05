import React from "react";
import { useState, useEffect } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../App.css";


export const Finalresume = () => {
  const [list1, setlist1] = useState(false);
  const [list2, setlist2] = useState(false);
  const [list3, setlist3] = useState(false);
  const [list4, setlist4] = useState(false);
  const [linkedin, setlinkedin] = useState(false);
  const [github, setgithub] = useState(false);
  const [twitter, settwitter] = useState(false);
  const [facebook, setfacebook] = useState(false);
  const [instagram, setinstagram] = useState(false);
  const [intrest1, setintrest1] = useState(false);
  const [intrest2, setintrest2] = useState(false);
  const [intrest3, setintrest3] = useState(false);
  const [intrest4, setintrest4] = useState(false);
  const [personalskill1, setpersonalskill1] = useState(false);
  const [personalskill2, setpersonalskill2] = useState(false);
  const [personalskill3, setpersonalskill3] = useState(false);
  const [personalskill4, setpersonalskill4] = useState(false);
  const pdfExportComponent1 = React.useRef(null);
  const pdfExportComponent2 = React.useRef(null);

  const history = useHistory();
  const prevStep = () => {
    history.push("/step4");
  };
  useEffect(() => {
    if (!localStorage.getItem("skill3")) {
      setlist1(true);
    }
    if (!localStorage.getItem("skill4")) {
      setlist2(true);
    }
    if (!localStorage.getItem("skill5")) {
      setlist3(true);
    }
    if (!localStorage.getItem("skill6")) {
      setlist4(true);
    }
    if (!localStorage.getItem("intrest3")) {
      setintrest1(true);
    }
    if (!localStorage.getItem("intrest4")) {
      setintrest2(true);
    }
    if (!localStorage.getItem("intrest5")) {
      setintrest3(true);
    }
    if (!localStorage.getItem("intrest6")) {
      setintrest4(true);
    }

    if (!localStorage.getItem("personalskill3")) {
      setpersonalskill1(true);
    }
    if (!localStorage.getItem("personalskill4")) {
      setpersonalskill2(true);
    }
    if (!localStorage.getItem("personalskill5")) {
      setpersonalskill3(true);
    }
    if (!localStorage.getItem("personalskill6")) {
      setpersonalskill4(true);
    }

    if (!localStorage.getItem("github")) {
      setgithub(true);
    }
    if (!localStorage.getItem("twitter")) {
      settwitter(true);
    }
    if (!localStorage.getItem("facebook")) {
      setfacebook(true);
    }
    if (!localStorage.getItem("instagram")) {
      setinstagram(true);
    }
    if (!localStorage.getItem("linkedin")) {
      setlinkedin(true);
    }
  }, []);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "-" + dd + "-" + yyyy;
  return (
    <div className="container">
      <div className="my-3">
        <div className="m-2 btn btn-primary"
          
            onClick={() => {
              if (pdfExportComponent1.current) {
                pdfExportComponent1.current.save();
                localStorage.clear();
              }
            }}
          >
            <i class="fa fa-download" /> Download
        </div>
        <div class="">
        <PDFExport paperSize="A4" margin="1cm" ref={pdfExportComponent1}>
        <div className="bg-info">
          <header className="bg-white text-dark">
            <div class="header-left">
              <h2 className="display-5">{localStorage.getItem("firstname") +
                    "\n" +
                    localStorage.getItem("lastname")}</h2>
              <p className="">{localStorage.getItem("collegequalification") +
                    "\n" +
                    localStorage.getItem("collegedescription")}</p>
            </div>
            <div class="header-right">
              <ul>
                <li>{localStorage.getItem("address")}</li>
                <li>{localStorage.getItem("phonenumber")}</li>
                <li>{localStorage.getItem("email")}</li>
                <li>{localStorage.getItem("linkedin")}</li>
                <li>{localStorage.getItem("github")}</li>
                <li>{localStorage.getItem("linkedin")}</li>
              </ul>
            </div>
          </header>
          <main className="">
            <section>
              <h2>Personal Details</h2>
              <div className="row">
              <ul className="col-6">
              <p>
                <b>Father Name :</b>
                {"\n" + localStorage.getItem("fathername")}
              </p>
              <p>
                <b>Date of Birth :</b>
                {"\n" + localStorage.getItem("dateofbirth")}
              </p>
              <p>
                <b>Gender :</b>
                {"\n" + localStorage.getItem("gender")}
              </p></ul>
              <ul className="col-6">
              <p>
                <b>Marital Status :</b>
                {"\n" + localStorage.getItem("maritalstatus")}
              </p>
              <p>
                <b>Nationality :</b>
                {"\n" + localStorage.getItem("nationality")}
              </p>
              <p>
                <b>Language Proficiency :</b>
                {"\n" + localStorage.getItem("languageproficiency")}
              </p>
              </ul></div>
            </section>
            <section>
              <h2>Career Objective</h2>
              <p>{localStorage.getItem("careerobjective")}</p>
            </section>
            <section>
              <h2>Education</h2>
              <ul>
                <div className="row">
                <li className="col-6">
                  <div class="school-info">
                    <h3>{localStorage.getItem("collegename")}</h3>
                    <p>{localStorage.getItem("collegequalification") }</p>
                    <p>{localStorage.getItem("collegedate")}</p>
                  </div>
                </li>
                <li className="col-6">
                  <div class="school-info">
                    <h3>{localStorage.getItem("hscschoolname")}</h3>
                    <p>{localStorage.getItem("hscschoolqualification") }</p>
                    <p>{localStorage.getItem("hscschooldate")}</p>
                  </div>
                </li>
                <li className="col-6">
                  <div class="school-info">
                    <h3>{localStorage.getItem("sslcschoolname")}</h3>
                    <p>{localStorage.getItem("sslcschoolqualification") }</p>
                    <p>{localStorage.getItem("sslcschooldate")}</p>
                  </div>
                </li></div>
              </ul>
            </section>
            <section>
              <h2>Skills</h2>
              <div className="row">
              <ul className="col-6">
                <li>{localStorage.getItem("skill1")}</li>
                <li>{localStorage.getItem("skill2")}</li>
              </ul>
              <ul className="col-6">
                <li>{localStorage.getItem("skill3")}</li>
                <li>{localStorage.getItem("skill4")}</li>
              </ul>
              <ul className="col-6">
                <li>{localStorage.getItem("skill5")}</li>
                <li>{localStorage.getItem("skill6")}</li>
              </ul></div>
            </section>
            <section>
              <h2>Interest</h2>
              <div className="row">
              <ul className="col-6">
                <li>{localStorage.getItem("intrest1")}</li>
                <li>{localStorage.getItem("intrest2")}</li>
              </ul>
              <ul className="col-6">
                <li>{localStorage.getItem("intrest3")}</li>
                <li>{localStorage.getItem("intrest4")}</li>
              </ul>
              <ul className="col-6">
                <li>{localStorage.getItem("intrest5")}</li>
                <li>{localStorage.getItem("intrest6")}</li>
              </ul></div>
            </section>
            <section>
              <h2>Declaration</h2>
              <p>I hereby declare that the above given information is true to
                  the best of my knowledge.
              </p><p>
                    <b>Place:</b>
                    {localStorage.getItem("place")}
                  </p>
                  <p>
                    <b>
                      ({localStorage.getItem("firstname") +
                        "\n" +
                        localStorage.getItem("lastname")})
                    </b>
                  </p>
                <p>
                  <b>Date:</b> {today}
                </p>
            </section>
          </main>
        </div>
        </PDFExport>
        <div className="m-2 btn btn-primary"
            onClick={() => {
              if (pdfExportComponent2.current) {
                pdfExportComponent2.current.save();
                localStorage.clear();
              }
            }}
          >
            <i class="fa fa-download" /> Download
        </div>
        <PDFExport paperSize="A4" className="contai" margin="1cm" ref={pdfExportComponent2}>
        <div class="text-primary">
          <div class="row">
              <div class="card">
                <div class="card-body">
                  <h2 class="text-center">{localStorage.getItem("firstname") +
                    "\n" +
                    localStorage.getItem("lastname")}</h2>
                  <h5 class="text-center">{localStorage.getItem("collegequalification") +
                    "\n" +
                    localStorage.getItem("collegedescription")}</h5>
                  <hr/>
                  <div class="row">
                    <div class="col-md-6">
                      <p><i class="fas fa-envelope"></i> {localStorage.getItem("email")}</p>
                      <p><i class="fas fa-phone"></i>{localStorage.getItem("phonenumber")}</p>
                    </div>
                    <div class="col-md-6">
                      <p><i class="fas fa-map-marker-alt"></i> {localStorage.getItem("address")}</p>
                      <p><i class="fab fa-github"></i> {localStorage.getItem("github")}</p>
                    </div>
                  </div>
                  <hr/>
                  <h4>Summary</h4>
                  <p>{localStorage.getItem("careerobjective")}</p>
                  <hr/>
                  <h2>Education</h2>
                <ul>
                  <div className="row">
                  <li className="col-6">
                    <div class="school-info">
                      <h4>{localStorage.getItem("collegename")}</h4>
                      <p>{localStorage.getItem("collegequalification") }</p>
                      <p>{localStorage.getItem("collegedate")}</p>
                    </div>
                  </li>
                  <li className="col-6">
                    <div class="school-info">
                      <h4>{localStorage.getItem("hscschoolname")}</h4>
                      <p>{localStorage.getItem("hscschoolqualification") }</p>
                      <p>{localStorage.getItem("hscschooldate")}</p>
                    </div>
                  </li>
                  <li className="col-6">
                    <div class="school-info">
                      <h4>{localStorage.getItem("sslcschoolname")}</h4>
                      <p>{localStorage.getItem("sslcschoolqualification") }</p>
                      <p>{localStorage.getItem("sslcschooldate")}</p>
                    </div>
                  </li></div>
                </ul>
                  <hr/>
                  <h2>Skills</h2>
              <div className="row">
              <ul className="col-6">
                <li>{localStorage.getItem("skill1")}</li>
                <li>{localStorage.getItem("skill2")}</li>
              </ul>
              <ul className="col-6">
                <li>{localStorage.getItem("skill3")}</li>
                <li>{localStorage.getItem("skill4")}</li>
              </ul>
              <ul className="col-6">
                <li>{localStorage.getItem("skill5")}</li>
                <li>{localStorage.getItem("skill6")}</li>
              </ul></div>
                  <hr/>
              <h2>Interest</h2>
              <div className="row">
              <ul className="col-6">
                <li>{localStorage.getItem("intrest1")}</li>
                <li>{localStorage.getItem("intrest2")}</li>
              </ul>
              <ul className="col-6">
                <li>{localStorage.getItem("intrest3")}</li>
                <li>{localStorage.getItem("intrest4")}</li>
              </ul>
              <ul className="col-6">
                <li>{localStorage.getItem("intrest5")}</li>
                <li>{localStorage.getItem("intrest6")}</li>
              </ul></div>
                </div>
              </div>
            </div>
        </div>

        </PDFExport>
        </div>
      </div>
      <div className="btnContainer">
        <Link onClick={prevStep}>Back</Link>
      </div>
    </div>
  );
};
