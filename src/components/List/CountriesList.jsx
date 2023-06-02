import "../styles/style.css";
import {Link} from "react-router-dom"

function CountriesList({ country }) {
  return (
    <>
    <div  className="mt-5 text-danger">
    <h1 className="mt-5 text-danger">All Countries</h1>
     <hr />
    </div>
    
      <div className="d-flex justify-content-around g-2 mt-5 flex-wrap">
        {country.map((item, index) => {
          return (
            <div
              className="mb-5 shadow  text-danger flex-wrap contentcontainer"
              key={index}
            >
              <div>
                <div className="countryimg">
                  <img src={item.flags.png} />
                  <hr />
                </div>

                <div className="contentinfo  mt-4 p-4 d-flex justify-content-between">
                  <p className="fw-bold">{item.name.common}</p>
                  <Link to={`/${index}` }className="text-danger">
                    Learnmore
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default CountriesList;
