import React, { Fragment } from "react";
import Marker from "react-mark.js/Marker";
const Accordion = ({ data, SearchItem }) => {
  return (
    <Fragment>
      <Marker mark={SearchItem}>
        {data.map((item) => {
          return (
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed bg-primary text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${item.id}`}
                    aria-expanded="false"
                    aria-controls={item.id}
                  >
                    {item.Name}
                  </button>
                </h2>
                <div
                  id={item.id}
                  class="accordion-collapse collapse show"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="accordion-collapse"
                >
                  <div class="accordion-body ">
                    <div className="">
                      <div>{item.Answer}</div>
                      {item.keys.map((key) => {
                        return (
                          <span className="badge bg-secondary p-2 me-2">
                            {key}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Marker>
    </Fragment>
  );
};

export default Accordion;
