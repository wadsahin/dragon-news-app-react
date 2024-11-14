import Header from "../components/Header";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <section className="header">
        <Header></Header>
      </section>
      <section className="navbar">
        <Navbar></Navbar>
      </section>
      <section className="main">
        <Main></Main>
      </section>
    </div>
  );
};

export default MainLayout;