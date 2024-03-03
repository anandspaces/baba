import React from "react";

export default function Dashboard3() {
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Social Media Post</h5>
            <p className="card-text">
              Write your comments here
              <i className="bi bi-rocket ml-2"></i>
            </p>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write a comment..."
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  