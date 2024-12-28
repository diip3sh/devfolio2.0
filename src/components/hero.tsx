export const HeroComponent = () => {
  return (
    <section className="bg-primary relative">
      <div
        className="px-8 h-[80dvh] 2xl:max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1
          className="text-[10dvh] text-secondary font-extrabold"
          id="heading-svg-text"
        >
          PORTFOLIO
        </h1>
      </div>
      <div className="px-8 2xl:max-w-7xl mx-auto pb-12 relative">
        <div className="mt-6 space-y-2">
          <div
            className="h-0.5 bg-secondary"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></div>
          <div
            className="flex flex-col sm:flex-row gap-3 justify-between items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flex gap-3 items-center">
              <h3 className="text-secondary text-xs font-medium">
                <span className="font-bold">Creative Front-End developer</span>
              </h3>
              <span className="h-auto border-secondary border"></span>
              <span className="text-secondary text-xs font-semibold">
                Available for work
              </span>
            </div>
            <div>
              <ul className="items-center inline-flex gap-3 relative">
                <li>
                  <a
                    href="https://github.com/pilladipesh33"
                    className="hover:text-secondary/80 text-secondary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/pilladipesh/"
                    className="hover:text-secondary/80 text-secondary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      role="img"
                      aria-labelledby="af42d6w76mbvmeg1ykvpj0buofsgjcz7"
                      className="octicon"
                    >
                      <title id="af42d6w76mbvmeg1ykvpj0buofsgjcz7">
                        LinkedIn
                      </title>
                      <g clip-path="url(#clip0_202_91845)">
                        <path
                          d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/dip3sh_"
                    className="hover:text-secondary/80 text-secondary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:pilladipesh.pd@gmail.com"
                    className="hover:text-secondary/80 text-secondary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="h-1.5 bg-secondary"
            data-aos="fade-up"
            data-aos-duration="2000"
          ></div>
          <div
            className="h-3 bg-secondary"
            data-aos="fade-up"
            data-aos-duration="2500"
          ></div>
          <div
            className="h-6 bg-secondary"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="h-12 bg-secondary"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="h-24 bg-secondary flex items-end p-4"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="150"
          ></div>
        </div>
      </div>
    </section>
  );
};
