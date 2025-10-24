import React from "react";
import WelcomeContainer from "./_components/WelcomeContainer";
import CreateOption from "./_components/CreateOption";
import LatestInterviewList from "./_components/LatestInterviewList";

const Dashboard = () => {
  return (
    <div>
      <WelcomeContainer />
      <h2 className="my-3 font-bold text-3xl">Dashboard</h2>
      <CreateOption />
      <LatestInterviewList />
    </div>
  );
};

export default Dashboard;
