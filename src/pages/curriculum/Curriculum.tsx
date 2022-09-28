import { Grid, GridItem } from "@chakra-ui/react";

// https://codepen.io/srikrushnapal/pen/dxZqQN

export const Curriculum = () => {
  return (
    <Grid ml="20px" mr="20px">
      <GridItem mt="10vh">
        <div className="sub-title">Curriculum</div>
      </GridItem>
      <GridItem w="100%" h="70vh" mt="20vh">
        <div className="containerTimeline">
          <ul className="timeline">
            <li className="active">
              <div className="popover__wrapper">
                <a href="#">
                  <h2 className="popover__title">START</h2>
                </a>
                <div className="popover__content">
                  <img
                    className="popover__img"
                    alt="Foto Empresa"
                    src="https://media.giphy.com/media/11SIBu3s72Co8w/giphy.gif"
                  />
                  <p className="popover__message">Lcc</p>
                  <div className="popover__date">Noviembre 2016 -Mayo 2017</div>
                  <p className="popover__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    maximus felis ac bibendum congue.{" "}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="popover__wrapper">
                <a href="#">
                  <h2 className="popover__title">📚</h2>
                </a>
                <div className="popover__content">
                  <p className="popover__message">Lcc</p>
                  <img
                    alt="Joseph Francis Joey Tribbiani, Jr."
                    src="https://media.giphy.com/media/11SIBu3s72Co8w/giphy.gif"
                  />
                  <div className="popover__date">Noviembre 2016 -Mayo 2017</div>
                  <p className="popover__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    maximus felis ac bibendum congue.{" "}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="popover__wrapper">
                <a href="#">
                  <h2 className="popover__title">📚</h2>
                </a>
                <div className="popover__content">
                  <p className="popover__message">Lcc</p>
                  <img
                    alt="Joseph Francis Joey Tribbiani, Jr."
                    src="https://media.giphy.com/media/11SIBu3s72Co8w/giphy.gif"
                  />
                  <div className="popover__date">Noviembre 2016 -Mayo 2017</div>
                  <p className="popover__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    maximus felis ac bibendum congue.{" "}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="popover__wrapper">
                <a href="#">
                  <h2 className="popover__title">🚶</h2>
                </a>
                <div className="popover__content">
                  <p className="popover__message">Lcc</p>
                  <img
                    alt="Joseph Francis Joey Tribbiani, Jr."
                    src="https://media.giphy.com/media/11SIBu3s72Co8w/giphy.gif"
                  />
                  <div className="popover__date">Noviembre 2016 -Mayo 2017</div>
                  <p className="popover__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    maximus felis ac bibendum congue.{" "}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="popover__wrapper">
                <a href="#">
                  <h2 className="popover__title">🚶</h2>
                </a>
                <div className="popover__content">
                  <p className="popover__message">Lcc</p>
                  <img
                    alt="Joseph Francis Joey Tribbiani, Jr."
                    src="https://media.giphy.com/media/11SIBu3s72Co8w/giphy.gif"
                  />
                  <div className="popover__date">Noviembre 2016 -Mayo 2017</div>
                  <p className="popover__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    maximus felis ac bibendum congue.{" "}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="popover__wrapper">
                <a href="#">
                  <h2 className="popover__title">🏃</h2>
                </a>
                <div className="popover__content">
                  <p className="popover__message">Lcc</p>
                  <img
                    alt="Joseph Francis Joey Tribbiani, Jr."
                    src="https://media.giphy.com/media/11SIBu3s72Co8w/giphy.gif"
                  />
                  <div className="popover__date">Noviembre 2016 -Mayo 2017</div>
                  <p className="popover__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    maximus felis ac bibendum congue.{" "}
                  </p>
                </div>
              </div>
            </li>
            <li className="active">
              <div className="popover__wrapper">
                <a href="#">
                  <h2 className="popover__title">NOW</h2>
                </a>
                <div className="popover__content">
                  <p className="popover__message">Lcc</p>
                  <img
                    alt="Joseph Francis Joey Tribbiani, Jr."
                    src="https://media.giphy.com/media/11SIBu3s72Co8w/giphy.gif"
                  />
                  <div className="popover__date">Noviembre 2016 -Mayo 2017</div>
                  <p className="popover__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    maximus felis ac bibendum congue.{" "}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </GridItem>
    </Grid>
  );
};
