import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DOCUMENT_URL } from 'containers/App/constants';
import Button from 'components/Button'
const BlogList = (props) => {
  const { blogList, handleLoadMore, totalItems, isRequesting } = props;
  return (
    <div>
      {blogList && blogList.length > 0 &&
        blogList.map((eachBlog, idx) => (
          <div className="card" key={`lis${idx}`}>
            <div className=" d-flex title mb-4">
              <div className="no">{idx + 1}</div>
              {eachBlog.category && eachBlog.category.length > 0 && <div className="ml-auto">
                {eachBlog.category.map((eachCategory, idx) => (
                  <div className="category mr-1" key={`list${idx}`}>
                    <Link to={`/blog/category/${eachCategory._id}`}>{eachCategory.category_title}</Link>
                  </div>
                ))}
              </div>}
            </div>
            <div className="img-holder">
              <img className="card-img-top img-fluid" src={`${DOCUMENT_URL}${eachBlog.image && eachBlog.image.document_name}`} alt="Card image cap" />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <Link to={`/blog/${eachBlog.slug}`}>{eachBlog.title}</Link>
              </h4>
              <p className="card-text">{eachBlog.summary}</p>
            </div>
            <div className="end">
              <div className="d-flex">
                <div className="date">
                  <i className="far fa-clock"></i>
                  {eachBlog.addedOn}
                </div>
                <div className="share ml-auto">
                  <i className="fas fa-share-alt"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      {totalItems == null && <Link style={{ marginLeft: "300px" }} to="/blog" ><Button type="button" variant="outline-primary">View All</Button></Link>}
      {blogList && totalItems && blogList.length < totalItems && <Button type="button" loading={isRequesting} variant="outline-primary" onClick={handleLoadMore}>Load More</Button>}
    </div>
  )
}
export default BlogList