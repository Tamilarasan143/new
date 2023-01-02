import { Navigate, Outlet, useLocation } from "react-router";
import React from "react";
import "./layout.css";
import MyAccountHeader from "./header";
import MySideBar from "./sidebar";
import { useUser } from "../../data/providers/users/hooks";

export default function MyAccount() {
  const user = useUser();
  const location = useLocation();

  console.log("Auth user => ", user);

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    console.log("Redirect to login ", location);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row flex-nowrap">
          <MyAccountHeader />
        </div>
        <div className="row flex-nowrap vh-100">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <MySideBar />
          </div>
          <div className="col py-3">
            <main className="container-fluid vh-100">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Share
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Export
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                  >
                    <span data-feather="calendar"></span>
                    This week
                  </button>
                </div>
              </div>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
