import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <ClipLoader size={50} color="#4fa94d" />
    </div>
  );
}
export default Loader;
