import { Component } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import DetailCard from "../components/DetailCard";
import { LoadingAnimation } from "../components/Loading";
import clsx from "clsx";

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
          "https://api.themoviedb.org/3/movie/now_playing?api_key=146e8db54e8666053bec4869a08e67d1&language=en-US&page=1"
        )
        .then((data) => {
          const { results } = data.data;
          this.setState({ datas: results });
        })
        .catch((error) => {
          alert(error.tostring());
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }, 8000);
  }

  render() {
    return (
      <Layout>
        <div
          className={`${
            this.state.loading ? "flex justify-center" : "grid"
          } grid-cols-4 gap-3`}
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
