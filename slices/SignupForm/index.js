import React, { useRef } from "react";

const SignupForm = ({ slice }) => {
  const bounceRef = useRef();
  const fakeFormRef = useRef();
  const emailRef = useRef();
  const sectionRef = useRef();

  function appendChar() {
    let formVal = emailRef.current.value;
    let result = "";
    let inputData = document.createElement("p");
    inputData.setAttribute("id", "fieldtext");
    inputData.innerHTML = formVal;
    fakeFormRef.current.innerHTML = `<span class="cursor"></span>`;
    let splitText = inputData.textContent.split("");
    splitText.forEach(function (char) {
      result +=
        char.trim() === ``
          ? ``
          : `<span><span data-char="${char}">${char}</span></span>`;
    });
    fakeFormRef.current.innerHTML += result;
  }

  function submitForm(e) {
    e.preventDefault();
    sectionRef.current.classList.add("sliding");
    setTimeout(() => {
      fakeFormRef.current.innerHTML = '<span class="cursor"></span>';
      bounceRef.current.reset();
      sectionRef.current.classList.remove("sliding");
    }, 6500);
  }

  return (
    <section className="signup-form" ref={sectionRef}>
      <div id="wrap">
        <form
          id="bounce"
          autoComplete="off"
          ref={bounceRef}
          onKeyUp={appendChar}
          onSubmit={submitForm}
        >
          <input
            type="email"
            id="email"
            ref={emailRef}
            maxLength={25}
            required
          />
          <input
            type="submit"
            id="submit"
            defaultValue={slice.primary.formLabel}
          />
        </form>
        <div id="fakeform">
          <p id="wrapper" ref={fakeFormRef}>
            <span className="cursor" />
          </p>
        </div>
        <svg id="bouncehouse" viewBox="0 0 1000 800">
          <defs>
            <marker
              id="cap"
              markerHeight={20}
              markerWidth={20}
              refX={70}
              refY={40}
              orient="auto-start-reverse"
              viewBox="0 0 800 800"
            >
              <g transform="rotate(90,90,90), translate(0,50)">
                <g>
                  <path d="M 60 60 Q 40 70 20 60 Q 10 40 20 20 Q 40 10 60 20 Q 70 40 60 60 " />
                </g>
              </g>
            </marker>
          </defs>
          <g transform="translate(100, 0)">
            <path id="base" d="M 90 450 L 710 450 " />
            <path id="bottom" d="M 90 450 L 710 450 " />
            <path
              id="top"
              d="M 400 350 C 280 350 190 350 90 350 L 90 450 L 710 450 L 710 350 C 620 350 530 350 400 350 "
              markerEnd="url(#cap)"
              markerStart="url(#cap)"
            />
            <path id="slide" d="M 740 400 Q 590 400 520 400 " />
          </g>
        </svg>
        <div className="shark">
          <div className="inner"></div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
