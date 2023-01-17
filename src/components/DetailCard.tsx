import React, { Component } from "react";

interface DetailCardProps {
  title: string;
  image: string;
}

export default class DetailCard extends Component<DetailCardProps> {
  render() {
    return (
      <div className="card glass">
        <figure>
          <img
            className="mx-auto"
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
          />
        </figure>
        <div className="card-body items-center justify-between">
          <h2 className="card-title items-center text-center">
            {this.props.title}
          </h2>
          <div className="card-actions w-full justify-center">
            <button className="btn btn-primary w-full">Add To Favorite</button>
          </div>
        </div>
      </div>
    );
  }
}
