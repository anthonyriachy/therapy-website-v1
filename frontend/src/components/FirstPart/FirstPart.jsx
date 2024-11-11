import { useNavigate } from "react-router-dom";
import AnimatedItem from "../AnimatedItem";

function FirstPart() {
  const navigate=useNavigate()
  const handleStartNow=()=>{
    navigate('/appointment')
  }
  return (
    <main className="home-main ">
      <section className="home-left-section">
        <AnimatedItem>
          <h1 className="header">
            Find Peace <br /> Within.
          </h1>
        </AnimatedItem>
        <AnimatedItem>
          <p className="home-paragraph">
            People seek personal growth and mental well-being through our
            therapy services in Beirut. Begin your journey to self-discovery
            here.
          </p>
        </AnimatedItem>
        <AnimatedItem>
          <button className="main-start-btn" type="button" onClick={handleStartNow}>Start Now</button>
        </AnimatedItem>
      </section>

      <AnimatedItem>
        <section className="main-image"></section>
      </AnimatedItem>
    </main>
  );
}

export default FirstPart;
