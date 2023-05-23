import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function PointData() {
  const { id } = useParams();
  const [playerName, setPlayerName] = useState([]);
  const [point, setPoint] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(`http://localhost:8000/point/${id}`);
      const data = await res.json();

      setPoint(data.data);
    }
    getData();
  }, []);
  useEffect(() => {
    async function getData() {
      const res = await fetch(`http://localhost:8000/game/${id}`);
      const data = await res.json();

      setPlayerName(data.data);
    }
    getData();
  }, []);

  const handleChange = (e) => {};
  if (playerName.length === 0 || point.length === 0) {
    return <>loading</>;
  }
  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ width: "10%" }}>#</div>
          <div style={{ width: "10%" }}>{playerName[0].p1}</div>
          <div style={{ width: "10%" }}>{playerName[0].p2}</div>
          <div style={{ width: "10%" }}>{playerName[0].p3}</div>
          <div style={{ width: "10%" }}>{playerName[0].p4}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ width: "10%" }}>Sum of score</div>
          <div style={{ width: "10%" }}>
            <input type="number" value={point[0].p1} onChange={handleChange} />
          </div>
          <div style={{ width: "10%" }}>0</div>
          <div style={{ width: "10%" }}>0</div>
          <div style={{ width: "10%" }}>0</div>
        </div>
      </div>
    </>
  );
}
