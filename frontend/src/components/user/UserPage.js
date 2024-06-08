import React from "react";
import Login from "./Login";
import Register from "./Register";
const UserPage = () => {
  return (
    <section className="login-section pt-100 pb-100" style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="tab-content" id="pills-tabContent">
                <div className="form-wrap box--shadow">
                  <Register />
                </div>
              <div
                className="tab-pane fade"
              >
                <div className="form-wrap box--shadow">
                  <Login />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
