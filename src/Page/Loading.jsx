import { ImSpinner11 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-cyan-500">
      <ImSpinner11 className="animate-spin text-5xl" />
    </div>
  );
};

export default Loading;