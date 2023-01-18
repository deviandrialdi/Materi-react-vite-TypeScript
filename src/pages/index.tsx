import { Component } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import DetailCard from "../components/DetailCard";
import { LoadingAnimation } from "../components/Loading";
import Carousel from "../components/Carousel";
import { MovieType } from "../utils/types/movie";

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: MovieType[];
  page: number;
  totalPage: number;
}

export default class index extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      datas: [],
      loading: true,
      page: 1,
      totalPage: 1,
    };
  }
  //side effect

  componentDidMount() {
    this.fetchData(1);
  }

  fetchData(page: number) {
    setTimeout(() => {
      axios
        .get(
          `now_playing?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US&page=1${page}`
        )
        .then((data) => {
          const { results, total_pages } = data.data;
          this.setState({ datas: results, totalPage: total_pages });
        })
        .catch((error) => {
          alert(error.tostring());
        })
        .finally(() => this.setState({ loading: false }));
    }, 1000);
  }

  nextpage() {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage });
    this.fetchData(newPage);
  }

  prevPage() {
    const newPage = this.state.page - 1;
    this.setState({ page: newPage });
    this.fetchData(newPage);
  }

  handleFavorite(data: MovieType) {
    const checkExist = localStorage.getItem("FavMovie");
    if (checkExist) {
      let parsefav: MovieType[] = JSON.parse(checkExist);
      parsefav.push(data);
      localStorage.setItem("FavMovie", JSON.stringify(parsefav));
      alert("Movie added to favorite");
    } else {
      localStorage.setItem("FavMovie", JSON.stringify([data]));
      alert("Succes added Movie to Favorite");
    }
  }

  render() {
    return (
      <Layout>
        {!this.state.loading && (
          <Carousel
            datas={this.state.datas}
            content={(data) => (
              <div
                className="w-full h-full flex justify-center items-center bg-cover bg-center dark:opacity-90"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
                }}
              >
                <p className="text-white italic tracking-widest font-bold break-words text-2xl text-center">
                  {data.title}
                </p>
              </div>
            )}
          />
        )}
        <div className="grid grid-cols-4 gap-3 p-3">
          {this.state.loading
            ? [...Array(20).keys()].map((data) => (
                <LoadingAnimation key={data} />
              ))
            : this.state.datas.map((data) => (
                <DetailCard
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  labelButton="Add To Favorite"
                  id={data.id}
                  onClickFav={() => this.handleFavorite(data)}
                />
              ))}
        </div>
        <div className="btn-group w-full justify-center">
          <button
            className="btn bg-blue-800"
            onClick={() => this.prevPage()}
            disabled={this.state.page === 1}
          >
            «
          </button>
          <button className="btn">{this.state.page}</button>
          <button
            className="btn bg-indigo-900"
            onClick={() => this.nextpage()}
            disabled={this.state.page === this.state.totalPage}
          >
            »
          </button>
        </div>
      </Layout>
    );
  }
}
