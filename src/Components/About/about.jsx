import { Component } from "react";

export default class About extends Component{
    state = {};
    render() {
        return <>
            <div className="row about">
                
            <div className="col-md-6 offset-3 cern justify-content-center align-items-center d-flex">
                
                <div className="container justify-content-center align-items-center d-flex">
                        <div className="row justify-content-center align-items-center">
                            <h2 className="bg-danger text-center w-75 rounded-5 mb-5">About Thrill</h2>
                            <p>Welcome to Thrill – Your Ultimate Destination for Movie Enthusiasts!</p>
                            <h3>Who We Are</h3>
                            <p>Thrill is a passionate community of movie or tv lovers dedicated to providing a one-stop platform for all things related to cinema. Whether you're a casual viewer or a die-hard cinephile,
                                our goal is to enhance your movie-watching experience and keep you updated on the latest in the world of film.</p>
                            <h2>Our Mission</h2>
                            <p>At Thrill, our mission is to create a space where movie enthusiasts can connect, discover,
                                and engage with their favorite films. We aim to be your go-to source for comprehensive information,
                                reviews, recommendations, and discussions about movies from various genres and eras.</p>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    }
}