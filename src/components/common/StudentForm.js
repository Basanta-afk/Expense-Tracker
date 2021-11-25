export const StudentForm = (props) => {
  return (
    <section className="flex-centered">
      <div className="form-area pa-xl">
        <div className="card mb-lg">
          <div className="border-solid absolute r-sm mr-lg">
            <label htmlFor="Received on">Received on : </label>
            <input type="text" className="dotbox" />
            <br />
            <label htmlFor="Signature by">Signature by : </label>
            <input type="text" className="dotbox" />
          </div>

          <div className="logo-heading flex items-center border-solid flex-centered mt-xl ml">
            <div className="logo ">
              <img src="" alt="School Logo" />
            </div>
            <div className="college-title vl">
              <h2 className="center">
                Panjab University, Chandigarh <br /> Admission form For Ongoing
                Classes
                <br />
                (Semester 3rd, 5th, 7th & 9th only)
              </h2>
            </div>
          </div>

          <div className="info mt-md">
            <div className="border-solid absolute r-sm mr-lg">
              <p>
                Affix self
                <br /> attached recent <br />
                phtograph of <br /> 3.5cm X 4.5cm
              </p>
            </div>
            <label htmlFor="Class">Class : </label>
            <input type="text" className="dotbox" />
            <br />
            <label htmlFor="Registration No.">
              Panjab University Registration No :
            </label>
            <input type="text" className="dotbox" />
            <ol className="more-info">
              <li>
                Name of Candidate: <input type="text" className="dotbox" />
              </li>
              <li>
                Father's Name: <input type="text" className="dotbox" />
              </li>
              <li>
                Mother's Name: <input type="text" className="dotbox" />
              </li>
              <li>
                Guardian's Name: <input type="text" className="dotbox" />
              </li>
              <li>
                Date of Birth: <input type="text" className="dotbox" />
              </li>
              <div className="flex justify-between">
                <li>
                  Address of Correspondence: <br />
                  <input type="text" className="dotbox" /> <br />
                  <input type="text" className="dotbox" /> <br />
                  <input type="text" className="dotbox" /> <br />
                  Mobile No. <br />
                  <input type="text" className="dotbox" />
                </li>
                <li>
                  Permanent Adress: <br />
                  <input type="text" className="dotbox" /> <br />
                  <input type="text" className="dotbox" /> <br />
                  <input type="text" className="dotbox" /> <br />
                  Mobile No. <br />
                  <input type="text" className="dotbox" />
                </li>
              </div>
              <li>
                Email Id:
                <input type="text" className="dotbox" />
                <input type="text" className="dotbox" />
              </li>
              <li>
                Do you belong to economically Weaker Seaction ?
                <span className="pa-xl">Yes/No </span>
              </li>
              <li>
                Annual Inncome from all sources
                <input type="text" className="dotbox" />
              </li>
              <li>
                Adhar Card(Optional)
                <input type="text" className="dotbox" />
              </li>
              <li>
                Blood Group
                <input type="text" className="dotbox" />
              </li>
              <li>
                Previsous Semester / Year Examination Details
                <table>
                  <tr>
                    <th>Semester/Year</th>
                    <th>Marks Obtained</th>
                    <th>Maximum Marks</th>
                    <th>%age</th>
                    <th>Year</th>
                    <th>Examination Roll no.</th>
                  </tr>

                  <tr>
                    <td>I</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>II</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>III</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>IV</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>V</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>VI</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>VII</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>VIII</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>XI</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </li>
            </ol>
            <label htmlFor="Place">Place </label>
            <input type="text" className="dotbox" />
            <br />
            <label htmlFor="Dated">Dated</label>
            <input type="text" className="dotbox" />
            <br />
            <div className="absolute r-sm mr-lg">
              (Full signature of candidate)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
