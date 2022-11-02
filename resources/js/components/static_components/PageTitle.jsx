import React,{useEffect} from 'react'

export default function PageTitle(props) {



  return (
    <div className="row">
    <div className="col-12">
      <div className="page-title-box">
        <div className="page-title-right">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
            <li className="breadcrumb-item active">{props.title}</li>
          </ol>
        </div>
        <h4 className="page-title">{props.title}</h4>
      </div>
    </div>
  </div>  
  )
}
