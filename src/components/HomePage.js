import "./HomePage.css";
import Branch from "./Branch";
const HomePage = () => {
  return (
    <div className="div">
      <h1>Welcome To ChezElias Restaurant!</h1>
      <h2>Our Branches: </h2>
      <table>
        <tr>
          <td>
            <Branch name="Batroun" address="Near the municipality of Batroun" />
          </td>
        </tr>
        <tr>
          <td>
            <Branch name="Beirut" address="Near Zaytuna Bay" />
          </td>
        </tr>
        <tr>
          <td>
            <Branch name="Saida" address="Infront Of The Mosque" />
          </td>
        </tr>
        <tr>
          <td>
            <Branch name="Byblos" address="Near The Castle" />
          </td>
        </tr>
      </table>
    </div>
  );
};
export default HomePage;
