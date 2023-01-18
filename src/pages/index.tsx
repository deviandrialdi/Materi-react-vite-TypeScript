import { Component } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import DetailCard from "../components/DetailCard";
import { LoadingAnimation } from "../components/Loading";
import Carousel from "../components/Carousel";
import ScrollToTop from "../components/ScroollTop";

interface DatasType {
  id: number;
  title: string;
  poster_path: string;
}

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: DatasType[];
}

export default class index extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      datas: [],
      loading: true,
    };
  }
  //side effect

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    setTimeout(() => {
      axios
        .get(
          `now_playing?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US&page=1`
        )
        .then((data) => {
          const { results } = data.data;
          this.setState({ datas: results });
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
                <ScrollToTop />
              </div>
            )}
          />
        )}
        <div
          className={`${
            this.state.loading ? "flex justify-center" : "grid"
          } grid-cols-4 gap-3 p-3`}
        >
          {this.state.loading
            ? [0].map((data) => <LoadingAnimation />)
            : this.state.datas.map((data) => (
                <DetailCard
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                />
              ))}
        </div>
      </Layout>
    );
  }
}
