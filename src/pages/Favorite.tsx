import React, { Component } from "react";

import Layout from "../components/Layout";
import DetailCard from "../components/DetailCard";
import { LoadingAnimation } from "../components/Loading";

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

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {}

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
