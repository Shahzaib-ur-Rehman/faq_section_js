import { useEffect, useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import { faqQuestions } from "./data/data.js";
function App() {
  const [data, setData] = useState(faqQuestions);
  const [SearchItem, setSearchItem] = useState(null);
  const handleInput = (e) => {
    setSearchItem(e.target.value);
    setData(faqQuestions);
  };

  const handleSumbit = () => {
    if (SearchItem !== null) {
      const requestData = faqQuestions.filter((faqQuestion) => {
        return faqQuestion.Name === SearchItem;
      });
      if (requestData) {
        setData(requestData);
      }
    }
  };

  return (
    <div className="container p-3">
      <section className="FaqSection p-2">
        <div>
          <div>
            <h1 className="">FAQ</h1>
          </div>
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                className="form-control mx-1"
                onChange={handleInput}
              ></input>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="btn btn-primary "
                onClick={handleSumbit}
              ></input>
            </div>
          </div>
          <div className="row p-1">
            <div className="col-md-10">
              <Accordion data={data} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
