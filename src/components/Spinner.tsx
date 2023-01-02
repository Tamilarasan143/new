import React from 'react'

export default function Spinner() {
  return (
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-border position-relative text-primary" role="status"></div>
      <i className="fa fa-laptop-code fa-2x text-primary position-absolute top-50 start-50 translate-middle"></i>
    </div>
  )
}
