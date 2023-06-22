import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ArticleCard from "./index-sections/ArticleCard.js";

function Home() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="main">
        <ArticleCard />
      </div>
    </>
  );
}

export default Home;
