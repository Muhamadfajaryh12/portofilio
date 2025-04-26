import CardProfile from "../CardProfile";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex justify-center gap-4 p-4">
      {/* <CardProfile />
      <div className="flex flex-col-reverse xl:flex-row gap-2  flex-wrap ">
        <div className="min-w-xl max-w-2xl  bg-white rounded-md p-4 shadow-md">
          {children}
        </div>
        <Sidebar />
      </div> */}
      <Sidebar />
      <div className="w-3/4 w-full  ">{children}</div>
    </div>
  );
};

export default MainLayout;
