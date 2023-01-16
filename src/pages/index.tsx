import React, { Component } from "react";

import Layout from "../components/Layout";
 import DetailCard from "../components/DetailCard";
 import { IndicatorsLoading, LoadingAnimation } from "../components/Loading";

 interface DataType {
   id: number;
   title: string;
   image: string;
 }

 export default class index extends Component {
   state = {
     datas: [],
     loading: true,
   };

   //side effect

   componentDidMount() {
     this.fetchData();
   }

   fetchData() {
     setTimeout(() => {
       this.setState({
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
         loading: false,
       });
     }, 3000);
   }

   render() {
     return (
       <Layout>
         <div className=" grid grid-cols-4 gap-3">
           {this.state.loading ? (
             <LoadingAnimation />
           ) : (
             this.state.datas.map((data: DataType) => (
               <DetailCard
                 key={data.id}
                 title={data.title}
                 image={data.image}
               />
             ))
           )}
         </div>
       </Layout>
     );
   }
 }
 