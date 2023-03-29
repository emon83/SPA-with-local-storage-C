import React from 'react';

const SingleCard = ({movie, handleWatchTime}) => {
    //console.log(movie);
    const {poster, movieName, description, watchTime, imdbRating} = movie;
    return (
        <div>
            <div className="movie__card card text-center w-100 m-auto col-md-6">
            <div className="movie__poster w-50 m-auto">
              <img
                className="w-75"
                src={poster}
                alt=""
              />
            </div>
            <h3>{movieName}</h3>
            <p>{description}</p>
            <div className="timeAndRating d-flex justify-content-around">
              <p>Watch Time: {watchTime}</p>
              <p>Rating: {imdbRating}</p>
            </div>
            <button onClick={() =>handleWatchTime(watchTime)} className="btn btn-info w-75 m-auto">Book Now</button>
          </div>
        </div>
    );
};

export default SingleCard;