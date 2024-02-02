import Image from "next/image";
import './styles/globals.scss';
import { Main } from "next/document";

export default function Home() {
  return (
    <main>
      <section className="main">
        <div className="container">
          <div>
            <h2 className="main__text-up">Sell online easier with</h2>
            <div className="main__content">
              <div className="main__container">
                <h1 className="main__text-middle">SLT APP</h1>
                <p className="main__text-little">Set up your online store on Instagram, WhatsApp and more. Share links and collect payments with SLT App</p>
              </div>
              <div className="main__footer">
                <div className="footer__view view">
                  <span className="view__number">01</span>
                  <div>
                    <h3 className="view__title">Start selling online, even without a website</h3>
                    <div className="view__content">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis unde tempore distinctio impedit dolorem magni.
                    </div>
                  </div>

                </div>
                <div className="footer__view view">
                  <span className="view__number">02</span>
                  <div>
                    <h3 className="view__title">Start selling online, even without a website</h3>
                    <div className="view__content">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis unde tempore distinctio impedit dolorem magni.
                    </div>
                  </div>

                </div>
                <div className="footer__view view">
                  <span className="view__number">03</span>
                  <div>
                    <h3 className="view__title">Start selling online, even without a website</h3>
                    <div className="view__content">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis unde tempore distinctio impedit dolorem magni.
                    </div>
                  </div>

                </div>
              </div>
              <div className="social__container">
                <svg width="45px" height="45px" viewBox="0 0 20 20" version="1.1">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#000000">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <svg fill="#000000" width="45px" height="45px" viewBox="0 0 32 32"><path d="M11.919 24.94c-2.548 0-4.921-.747-6.919-2.032a9.049 9.049 0 0 0 6.681-1.867 4.512 4.512 0 0 1-4.215-3.137c.276.054.559.082.848.082.412 0 .812-.056 1.193-.156a4.519 4.519 0 0 1-3.622-4.425v-.059a4.478 4.478 0 0 0 2.042.564 4.507 4.507 0 0 1-2.008-3.758c0-.824.225-1.602.612-2.268a12.811 12.811 0 0 0 9.303 4.715 4.517 4.517 0 0 1 7.692-4.115 9.107 9.107 0 0 0 2.866-1.094 4.542 4.542 0 0 1-1.983 2.498 9.08 9.08 0 0 0 2.592-.71 9.283 9.283 0 0 1-2.252 2.337c.008.193.014.388.014.583-.001 5.962-4.542 12.843-12.844 12.842" /></svg>
                <svg width="45px" height="45px" viewBox="-5 0 20 20" version="1.1">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#000000">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]">

                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <svg width="45px" height="45px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F" />
                  <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F" />
                </svg>
                <svg fill="#000" height="45px" width="45px" version="1.1" id="Layer_1"
                  viewBox="0 0 512 512" enable-background="new 0 0 512 512">
                  <path d="M0,462h256v-64H0V462z M0,355.3h512v-64H0V355.3z M256,184.7H0v64h256V184.7z M0,78v64h512V78H0z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
