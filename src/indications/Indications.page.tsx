import { Link } from "react-router-dom";

function IndicationsPage() {
  return (
    <div>
      <h1>Indications</h1>
      <div>
        <Link to="/pins">Home</Link>
        <br />
        <Link to="/pins/indications">Indications</Link>
      </div>
    </div>
  );
}

export default IndicationsPage;
