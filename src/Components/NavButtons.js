import { useNavigate } from "react-router";

const NavButtons = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default NavButtons;
