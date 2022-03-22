import { Header } from "../../components/Header";
import { HealthCheckTypeCard } from "../../components/HealthCheckTypeCard";
import { healthCheckOptions } from "../../shared/constants/healthCheckOptions";

function Home() {
  return (
    <>
      <Header />
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000000CC",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {healthCheckOptions.map((option) => (
          <HealthCheckTypeCard healthCheckType={option} />
        ))}
      </div>
    </>
  );
}

export default Home;
