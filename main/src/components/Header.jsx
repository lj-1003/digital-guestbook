import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  
  return (
    <div>
        <h1>Digital Guestbook</h1>
        <p>Leave a nice note for us!</p>
        <button onClick={() => navigate("/compose")}>Compose a message</button>
    </div>
  );
}

export default Header;