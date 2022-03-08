import React from "react";

const WeatherForm = (props) => (

        <div className="card card-body">
            <form onSubmit={props.getWeather}>
                <div className="form-group mb-4">
                    <input type="text" name="city" placeholder="Your city name" className="form-control" autoFocus />
                </div>
                <div className="form-group mb-4">
                    <input type="text" name="country" placeholder="Your country name" className="form-control" autoFocus />
                </div>
                <button className="btn btn-success btn-block mb-4">Get Weather</button>
            </form>
        </div>
    )

export default WeatherForm;