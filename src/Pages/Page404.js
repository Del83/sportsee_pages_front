import * as React from "react";
import image404 from "../assets/logo404.webp";
import "../Style/Page404.css";

/**Render the 404 page
 * @return {JSX}
 */
const Page404 = () => {
  return (
    <>
      <div className="page404">
        <img className="image404" src={image404} alt="image404" />
      </div>
    </>
  );
};

export default Page404;
