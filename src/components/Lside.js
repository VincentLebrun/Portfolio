import React, { useRef, useEffect } from "react";
import hoverEffect from "hover-effect";

export const Lside = () => {
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    this.querySelectorAll(".layer").forEach((layer) => {
      const speed = layer.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 50;
      const y = (window.innerHeight - e.pageY * speed) / 50;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  const container = useRef();

  useEffect(() => {
    console.log(container.current);

    new hoverEffect({
      parent: container.current,
      intensity: 0.3,
      image1: "../img/photo.png",
      image2: "https://picsum.photos/420/620",
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg",
    });
  }, [container]);

  return (
    <div className="leftMain">
      <div className="portrait"></div>

      <div
        className="parent"
        id="imgContainer"
        ref={container}
        style={{
          width: 400,
          height: 600,
        }}
      />

      <div className="floatwrapper">
        <p>
          <span class="orange layer f1" data-speed="3">
            css
          </span>
        </p>
        <p>
          <span class="orange layer f2" data-speed="1">
            html
          </span>
        </p>
        <p>
          <span class="orange layer f3" data-speed="3">
            javascript
          </span>
        </p>
        <p>
          <span class="orange layer f4" data-speed="-3">
            php
          </span>
        </p>
        <p>
          <span class="orange layer f5" data-speed="3">
            sass
          </span>
        </p>
        <p>
          <span class="orange layer f6" data-speed="-3">
            git
          </span>
        </p>
        <p>
          <span class="orange layer f7" data-speed="3">
            bootstrap
          </span>
        </p>
        <p>
          <span class="orange layer f8" data-speed="-3">
            mongodb
          </span>
        </p>
        <p>
          <span class="orange layer f9" data-speed="3">
            mysql
          </span>
        </p>
        <p>
          <span class="orange layer f10" data-speed="3">
            react
          </span>
        </p>
      </div>
    </div>
  );
};
