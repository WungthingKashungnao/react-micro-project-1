import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: null,
    cardNum: null,
    month: null,
    year: null,
    cvc: null,
  });
  const [err, setErr] = useState({
    errCard: null,
    errMonth: null,
    errYear: null,
    errCvc: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.name !== null &&
      data.cardNum !== null &&
      data.month !== null &&
      data.year !== null &&
      data.cvc !== null &&
      data.name !== "" &&
      data.cardNum !== "" &&
      data.month !== "" &&
      data.year !== "" &&
      data.cvc !== ""
    ) {
      if (data.cardNum.length !== 16) {
        // setErrorCard("invaid card number, it must be equal to 16 digits");
        setErr({
          ...err,
          errCard: "invaid card number, it must be equal to 16 digits",
        });
        alert("invaid card number, it must be equal to 16 digits");
        // setCardNum("");
        setData({ ...data, cardNum: "" });
      } else if (
        data.month.length > 2 ||
        data.month.length < 1 ||
        data.month > 12 ||
        data.month === "0"
      ) {
        // setErrorMonth("invalid month");
        setErr({ ...err, errMonth: "invalid month" });
        alert("invalid month");
        // setMonth("");
        setData({ ...data, month: "" });
      } else if (
        data.year.length > 2 ||
        data.year.length === 1 ||
        data.year === "0"
      ) {
        // setErrorYear("Invalid year");
        setErr({ ...err, errYear: "invalid year" });
        alert("Invalid year");
        // setYear("");
        setData({ ...data, year: "" });
      } else if (data.cvc.length !== 3) {
        // setErrorCvc("invalid cvc, it must be 3 digits");
        setErr({ ...err, errCvc: "invalid cvc, it must be 3 digits" });
        alert("invalid cvc, it must be 3 digits");
        // setCvc("");
        setData({ ...data, cvc: "" });
      } else {
        console.log(` name: ${data.name}`);
        console.log(` cardNum: ${data.cardNum}  `);
        console.log(` month: ${data.month}`);
        console.log(` year: ${data.year}`);
        console.log(` cvc: ${data.cvc}`);
      }
    } else {
      alert("all input fields required");
    }
  };
  return (
    <div className="App">
      <div className="formLeft"></div>
      <div className="formRight">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="userName">
            <label className="labl"> CARDHOLDER NAME</label>
            <br />
            <input
              type="text"
              className="inpt"
              placeholder="e.g Jane Appleseed"
              // onChange={(e) => setName(e.target.value)}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.name}
            />
            {data.name === "" && (
              <p className="errorInput">Cardholder name required</p>
            )}
          </div>
          <div className="cardNumber">
            <label className="labl">CARD NUMBER</label>
            <br />
            <input
              type="number"
              className="inpt"
              placeholder="e.g 1234 6578 9123 0000"
              // onChange={(e) => setCardNum(e.target.value)}
              onChange={(e) => setData({ ...data, cardNum: e.target.value })}
              value={data.cardNum}
            />
            {err.errCard !== null ? (
              <>
                <p className="errorInput">{err.errCard}</p>
                {/* {setErrorCard(null)} */}
                {setErr({ ...err, errCard: null })}
              </>
            ) : (
              <>
                {data.cardNum === "" && (
                  <p className="errorInput">Card number required</p>
                )}
              </>
            )}
          </div>
          <div className="dateCvv">
            <div className="dateCvvInputCon">
              <label className="labl">EXP. DATE (MM/YY)</label>
              <div className="dateCvvInputs">
                <input
                  type="number"
                  className="inpt"
                  placeholder="MM"
                  // onChange={(e) => setMonth(e.target.value)}
                  onChange={(e) => setData({ ...data, month: e.target.value })}
                  value={data.month}
                />

                <input
                  type="number"
                  className="inpt"
                  placeholder="YY"
                  // onChange={(e) => setYear(e.target.value)}
                  onChange={(e) => setData({ ...data, year: e.target.value })}
                  value={data.year}
                />
              </div>
              {err.errMonth !== null ? (
                <>
                  <p className="errorInput">{err.errMonth}</p>
                  {/* {setErrorMonth(null)} */}
                  {setErr({ ...err, errMonth: null })}
                </>
              ) : (
                <>
                  {data.month === "" && (
                    <p className="errorInput">month is required field</p>
                  )}
                </>
              )}

              {err.errYear !== null ? (
                <>
                  <p className="errorInput">{err.errYear}</p>
                  {/* {setErrorYear(null)} */}
                  {setErr({ ...err, errYear: null })}
                </>
              ) : (
                <>
                  {data.year === "" && (
                    <p className="errorInput">year is required field</p>
                  )}
                </>
              )}
            </div>
            <div className="cvvInput">
              <label className="labl"> CVC</label>
              <input
                type="number"
                className="inpt"
                placeholder="e.g 123"
                // onChange={(e) => setCvc(e.target.value)}
                onChange={(e) => setData({ ...data, cvc: e.target.value })}
                value={data.cvc}
              />
              {err.errCvc !== null ? (
                <>
                  <p className="errorInput">{err.errCvc}</p>
                  {/* {setErrorCvc(null)} */}
                  {setErr({ ...err, errCvc: null })}
                </>
              ) : (
                <>
                  {data.cvc === "" && (
                    <p className="errorInput">cvc is required field</p>
                  )}
                </>
              )}
            </div>
          </div>
          <button onClick={(e) => handleSubmit(e)}>Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default App;
