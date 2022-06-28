import { useParams } from "react-router-dom";

const TestPages = () => {
  const { id, href } = useParams();

  return (
    <div>
      <h1> </h1>
      {id} -- {href}
    </div>
  );
};

export default TestPages;
