import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

import Layout from "../components/Layout";
import { LoadingAnimation } from "../components/Loading";
import { withRouter } from "../utils/navigation";
import { MovieType } from "../utils/types/movie";

const formatUSD = (money: any) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(money);
};

interface PropsType {
  params?: any;
}

interface StateType {
  loading: boolean;
  data: MovieType;
}

class DetailMovie extends Component<PropsType, StateType> {
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
    const { id_movie } = this.props.params;
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&append_to_response=videos`,
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
    }, 5000);
  }

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <LoadingAnimation />
        ) : (
          <div className="flex w-full h-[60vh] bg-blue-900 text-white text-base overflow-auto gap-3">
            <img
              src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}
              alt={this.state.data.title}
            />
            <div className="p-5">
              <p className="text-center">
                <h1 className="text-white text-2xl font-bold text-center">
                  {" "}
                  Title: {this.state.data.title}
                </h1>
                <span className="italic">{this.state.data.tagline}</span>
              </p>

              <div className="card flex-shrink-0 w-full max-lg: shadow-2xl">
                <div className="card-body p-1">
                  <div className="form-control">
                    <p className="px-3 label-text text-white">
                      Ratings: {this.state.data.vote_average}
                    </p>
                    <p className="px-3 label-text text-white">
                      Release:{" "}
                      {moment(this.state.data.release_date).format("ll")}{" "}
                    </p>
                    <p className="px-3 label-text text-white">
                      Genre :{" "}
                      {this.state.data.genres
                        ?.map((genre) => {
                          return genre.name;
                        })
                        .join(", ")}
                    </p>
                    <p className="px-3 label-text text-white">
                      Production Companies:{" "}
                      {this.state.data.production_companies
                        ?.map((production_companies) => {
                          return production_companies.name;
                        })
                        .join(", ")}
                    </p>
                    <p className="px-3 label-text text-white">
                      Budget: {formatUSD(this.state.data.budget)}.00
                    </p>
                    <p className="px-3 label-text text-white">
                      Runtime: {this.state.data.runtime} mins
                    </p>
                    <p className="px-3 label-text text-white">
                      Original Language: {this.state.data.original_language}
                    </p>
                    <p className="px-3 label-text text-white">
                      Status: {this.state.data.status}
                    </p>
                    <p className="px-3 label-text text-white">
                      Overview:{" "}
                      <span className="italic font-bold text-white">
                        {this.state.data.overview}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    );
  }
}

export default withRouter(DetailMovie);