import React, { Component } from "react";

import Layout from "../components/Layout";

export default class index extends Component {
  state = {
    datas: [
      {
        id: 1,
        title: "Avengers 1",
        image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
      },
      {
        id: 2,
        title: "Avengers 2",
        image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
      },
      {
        id: 3,
        title: "Avengers 3",
        image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
      },
      {
        id: 4,
        title: "Avengers 4",
        image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
      },
      {
        id: 5,
        title: "Avengers 5",
        image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
      },
    ],
  };

  render() {
    return (
      <Layout>
        <div className=" grid grid-cols-4 gap-3">
          {this.state.datas.map((data) => (
            <div key={data.id}>
              <img src={data.image} />
              <p className="text-center">{data.title}</p>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}
