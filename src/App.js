import { useState } from "react";
import "./App.css";
import FrontCreditCard from "./components/frontcard/FrontCreditCard";
import BackCreditCard from "./components/backcard/BackCreditCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () =>
    toast.success("Sucessfully Added Card Details!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
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
        setErr({
          ...err,
          errCard: "invaid card number, it must be equal to 16 digits",
        });
        toast.error("invaid card number, it must be equal to 16 digits!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setData({ ...data, cardNum: "" });
      } else if (
        data.month.length > 2 ||
        data.month.length < 1 ||
        data.month > 12 ||
        data.month === "0" ||
        data.month === "00"
      ) {
        setErr({ ...err, errMonth: "invalid month" });
        toast.error("invalid month!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setData({ ...data, month: "" });
      } else if (
        data.year.length > 2 ||
        data.year.length === 1 ||
        data.year === "0" ||
        data.year === "00"
      ) {
        setErr({ ...err, errYear: "invalid year" });
        toast.error("Invalid year!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setData({ ...data, year: "" });
      } else if (data.cvc.length !== 3 || data.cvc === "000") {
        setErr({ ...err, errCvc: "invalid cvc, it must be 3 digits" });
        toast.error("invalid cvc, it must be 3 digits and cannot be 000!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setData({ ...data, cvc: "" });
      } else {
        notify();
        console.log(` name: ${data.name}`);
        console.log(` cardNum: ${data.cardNum}  `);
        console.log(` month: ${data.month}`);
        console.log(` year: ${data.year}`);
        console.log(` cvc: ${data.cvc}`);
      }
    } else {
      toast.error("all input fields required!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <div className="App">
      <div className="formLeft">
        <FrontCreditCard
          cardNum={data.cardNum}
          name={data.name}
          month={data.month}
          year={data.year}
        />
        <BackCreditCard cvc={data.cvc} />
      </div>
      <div className="formRight">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="userName">
            <label className="labl"> CARDHOLDER NAME</label>
            <br />
            <input
              type="text"
              className="inpt"
              placeholder="e.g Jane Appleseed"
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
              // prevent entering unwanted characters in input field
              onKeyDown={(evt) =>
                ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
              }
              onChange={(e) => setData({ ...data, cardNum: e.target.value })}
              value={data.cardNum}
            />
            {err.errCard !== null ? (
              <>
                <p className="errorInput">{err.errCard}</p>
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
                  onChange={(e) => setData({ ...data, month: e.target.value })}
                  value={data.month}
                />

                <input
                  type="number"
                  className="inpt"
                  placeholder="YY"
                  onChange={(e) => setData({ ...data, year: e.target.value })}
                  value={data.year}
                />
              </div>
              {err.errMonth !== null ? (
                <>
                  <p className="errorInput">{err.errMonth}</p>
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
                onChange={(e) => setData({ ...data, cvc: e.target.value })}
                value={data.cvc}
              />
              {err.errCvc !== null ? (
                <>
                  <p className="errorInput">{err.errCvc}</p>
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
      <ToastContainer />
    </div>
  );
}

export default App;
