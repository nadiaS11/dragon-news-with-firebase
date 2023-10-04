import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsColumn = ({ aNews }) => {
  console.log(aNews);
  const { _id, title, image_url, details } = aNews;
  return (
    <div>
      <div className="mb-5  bg-white border border-gray-200  ">
        <img className="mx-auto  pt-2" src={image_url} alt="" />

        <div className=" px-2">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold  text-gray-900  ">
              {title}
            </h5>
          </a>
          {details?.length > 200 ? (
            <p className="mb-3 font-normal text-gray-700 ">
              {details.slice(0, 200)}
              {"... "}
              <Link to={`/news/${_id}`} className="text-blue-700  ">
                Read More
              </Link>
            </p>
          ) : (
            <p className="mb-3 font-normal text-gray-700 ">{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

NewsColumn.propTypes = {
  aNews: PropTypes.object,
};

export default NewsColumn;
