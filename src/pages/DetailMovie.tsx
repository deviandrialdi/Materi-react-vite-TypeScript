import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

import Layout from "../components/Layout";
import { LoadingAnimation } from "../components/Loading";

type GenreType = {
  id?: number;
  name?: string;
};

type companiesType = {
  id?: number;
  name?: string;
};

const fotmatUSD = (money: any) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(money);
};

interface DataType {
  id?: number;
  title?: string;
  poster_path?: string;
  backdrop_path?: string;
  tagline?: string;
  vote_average?: number;
  release_date?: string;
  genres?: GenreType[];
  runtime?: number;
  original_language?: string;
  popularity?: string;
  production_companies?: companiesType[];
  budget?: number;
  revenue?: number;
  overview?: string;
  status?: string;
  vote?: string;
}

interface PropsType {}

interface StateType {
  loading: boolean;
  data: DataType;
}

export default class DetailMovie extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      data: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/683328?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`,
        { method: "GET" }
      )
        .then((response) => response.json())

        .then((data) => {
          this.setState({ data });
          console.log(data);
        })
        .catch((error) => {
          alert(error.tostring());
        })
        .finally(() => this.setState({ loading: false }));
    }, 3000);
  }

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <LoadingAnimation />
        ) : (
          <div className="flex w-full h-[50vh] bg-blue-900 text-zinc-300">
            <img
              src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}
              alt={this.state.data.title}
            />
            <div className="p-5">
              <p>
                Title: {this.state.data.title} ({this.state.data.tagline})
              </p>
              <p>Ratings: {this.state.data.vote_average}</p>
              <p>
                Release: {moment(this.state.data.release_date).format("ll")}{" "}
              </p>
              <p>
                Genre :{" "}
                {this.state.data.genres
                  ?.map((genre) => {
                    return genre.name;
                  })
                  .join(", ")}
              </p>
              <p>
                Production Companies:{" "}
                {this.state.data.production_companies
                  ?.map((production_companies) => {
                    return production_companies.name;
                  })
                  .join(", ")}
              </p>
              <p>Budget: {fotmatUSD(this.state.data.budget)}.00</p>
              <p>Runtime: {this.state.data.runtime} mins</p>
              <p>Original Language: {this.state.data.original_language}</p>
              <p>Status: {this.state.data.status}</p>
              <p>Overview: {this.state.data.overview}</p>
            </div>
          </div>
        )}
      </Layout>
    );
  }
}
