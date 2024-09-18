import LoaderIcon from "../assets/LoaderIcon";

const Loader = ({ loading }) => {
  return loading ? (
    <div className="flex items-center justify-center z-[9999] absolute top-0 left-0 h-screen w-screen opacity-75 bg-primary-white">
      <LoaderIcon />
    </div>
  ) : null;
};
export default Loader;
