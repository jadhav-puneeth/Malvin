import {ScaleLoader} from "react-spinners";



function Loader(props) {
  return (
    <div className="sweet-loading">
      <ScaleLoader color="#4276ed" loading={true}/>
    </div>
  );
}

export default Loader;
