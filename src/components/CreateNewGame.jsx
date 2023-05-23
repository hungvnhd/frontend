import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CreateNewGame() {
  const [validate, setValidate] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.p1.value === "" ||
      e.target.p2.value === "" ||
      e.target.p3.value === "" ||
      e.target.p4.value === ""
    ) {
      setValidate("Please input all playername");
    } else {
      setValidate("");

      async function postJSON(data) {
        try {
          const response = await fetch("http://localhost:8000/game/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const result = await response.json();
          navigate(`/round/${result.gameId}`);
        } catch (error) {
          console.error("Error:", error);
        }
      }

      const data = {
        p1: e.target.p1.value,
        p2: e.target.p2.value,
        p3: e.target.p3.value,
        p4: e.target.p4.value,
      };
      postJSON(data);
    }
  };
  return (
    <>
      <h2>Score keeper</h2>
      <div>{validate}</div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="p1" id="" placeholder="Player 1" />
        <input type="text" name="p2" id="" placeholder="Player 2" />
        <input type="text" name="p3" id="" placeholder="Player 3" />
        <input type="text" name="p4" id="" placeholder="Player 4" />
        <button>submit</button>
      </form>
    </>
  );
}
