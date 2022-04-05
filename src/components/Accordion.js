import React, { Fragment } from "react";

const Accordion = ({ data }) => {
  return (
    <Fragment>
      {data.map((item) => {
        return (
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
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
    </Fragment>
  );
};

export default Accordion;
