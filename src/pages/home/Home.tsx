import "./home.scss";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget, { WidgetType } from "./widget/Widget";
const Home: React.FC = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type={WidgetType.user} />
          <Widget type={WidgetType.order} />
          <Widget type={WidgetType.earning} />
          <Widget type={WidgetType.balance} />
        </div>
      </div>
    </div>
  );
};

export default Home;
