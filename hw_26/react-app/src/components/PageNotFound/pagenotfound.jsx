import "./_pagenotfound.scss"
import { Link } from "react-router-dom";
import errorimage from "./img/error_img.png"
import { useEffect } from "react";

function PageNotFound () {
  useEffect(() => {document.title = 'Marvel | 404';},[]);
  return (
    <div className="page-404 container">
      <img className="error-img" src={ errorimage } alt="" />
      <h3>Sorry page not found</h3>
      <Link to={'/'}>Back to home page</Link>
    </div>
  )
}
export default PageNotFound;