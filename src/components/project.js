import React, { useContext, useEffect, useState } from "react";
import { AiFillEye, AiOutlineStar } from "react-icons/ai";
import { Stars, VoteButton } from "./styledComponents/style";
import { LoadContext } from "./useContext";
import { Spinner } from "./spinner";

export const Project = () => {
  const [watch] = useState({
    weather: localStorage.getItem("weather"),
    todo: localStorage.getItem("todo"),
    movie: localStorage.getItem("movie"),
  });

  const starIcon = Array(5).fill(0);
  const [spinner, setSpinner] = useContext(LoadContext);
  const [startTodoVal, setStarTodoVal] = useState(0);
  const [startWeatherVal, setStarWeatherVal] = useState(0);
  const [startMoovieVal, setStartMoovieVal] = useState(0);
  const [weatherHover, setWeatherHover] = useState(undefined);
  const [todoHover, setTodoHover] = useState(undefined);
  const [movieHover, setMovieHover] = useState(undefined);

  const [weatherWatch, setWeatherWatch] = useState(
    watch.weather ? JSON.parse(watch.weather) : null
  );
  const [todoWatch, setTodoWatch] = useState(
    watch.todo ? JSON.parse(watch.todo) : null
  );
  const [movieWatch, setMovieWatch] = useState(
    watch.movie ? JSON.parse(watch.movie) : null
  );
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date();
    const dayName = days[d.getDay()];
    setDay(dayName);
  }, []);
  useEffect(() => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const m = new Date();
    const monthName = month[m.getMonth()];
    setMonth(monthName);
  }, []);

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weatherWatch));
  }, [weatherWatch]);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoWatch));
  }, [todoWatch]);
  useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(movieWatch));
  }, [movieWatch]);

  function starsClick(value, setValue) {
    setValue(value);
  }
  function starsMouseOver(value, setValue) {
    setValue(value);
  }
  function starsMouseLeave(setValue) {
    setValue(undefined);
  }

  return (
    <div className="projectBody">
      {spinner ? (
        <Spinner />
      ) : (
        <div>
          <h1>PROJECT</h1>
          <div className="projectPost">
            <div className="projectImg">
              <img src="https://9to5google.com/wp-content/uploads/sites/4/2021/10/samsung_android_12_beta_weather_app.jpg?quality=82&strip=all"></img>
            </div>
            <div className="projectInfo">
              <div className="projectInfoContainer">
                <div className="projectDate">
                  <span>{day} </span>
                  <span>{new Date().getFullYear()} </span>
                  <span>{month} </span>
                </div>
                <div className="watch">
                  <AiFillEye />
                  <span style={{ marginLeft: "5px" }} className="watchNumber">
                    {weatherWatch || "0"}
                  </span>
                </div>
              </div>
              <div className="projectClassification">
                <h1 className="projectTitle">Weather App</h1>
                <div className="stars">
                  <Stars>
                    {starIcon.map((item, index) => {
                      return (
                        <AiOutlineStar
                          className="star"
                          size={20}
                          key={index}
                          cursor="pointer"
                          onClick={() =>
                            starsClick(index + 1, setStarWeatherVal)
                          }
                          color={
                            (weatherHover || startWeatherVal) > index
                              ? "#e8e819"
                              : "grey"
                          }
                          onMouseOver={() =>
                            starsMouseOver(index + 1, setWeatherHover)
                          }
                          onMouseLeave={() => starsMouseLeave(setWeatherHover)}
                        />
                      );
                    })}
                  </Stars>
                </div>
                <VoteButton onClick={() => setStarWeatherVal(0)}>
                  Nem szavazok
                </VoteButton>
              </div>
              <p className="projectText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It
                was popularised in the 1960s with the release of Letraset sheets
              </p>
              <a
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => setWeatherWatch(weatherWatch + 1)}
                className="projectButton"
                href="https://github.com/Arpi30/weatherapp">
                Read More...
              </a>
            </div>
          </div>
          <div className="projectPost">
            <div className="projectImg">
              <img src="https://user-images.githubusercontent.com/61280281/99399723-0b3fa980-290c-11eb-8728-03d974be548d.png"></img>
            </div>
            <div className="projectInfo">
              <div className="projectInfoContainer">
                <div className="projectDate">
                  <span>{day} </span>
                  <span>{new Date().getFullYear()} </span>
                  <span>{month} </span>
                </div>
                <div className="watch">
                  <AiFillEye />
                  <span style={{ marginLeft: "5px" }} className="watchNumber">
                    {todoWatch || "0"}
                  </span>
                </div>
              </div>
              <div className="projectClassification">
                <h1 className="projectTitle">ToDo App</h1>
                <div className="stars">
                  <Stars>
                    {starIcon.map((item, index) => {
                      return (
                        <AiOutlineStar
                          className="star"
                          size={20}
                          key={index}
                          cursor="pointer"
                          onClick={() => starsClick(index + 1, setStarTodoVal)}
                          color={
                            (todoHover || startTodoVal) > index
                              ? "#e8e819"
                              : "grey"
                          }
                          onMouseOver={() =>
                            starsMouseOver(index + 1, setTodoHover)
                          }
                          onMouseLeave={() => starsMouseLeave(setTodoHover)}
                        />
                      );
                    })}
                  </Stars>
                </div>
                <VoteButton onClick={() => setStarTodoVal(0)}>
                  Nem szavazok
                </VoteButton>
              </div>
              <p className="projectText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It
                was popularised in the 1960s with the release of Letraset sheets
              </p>

              <a
                onClick={() => setTodoWatch(todoWatch + 1)}
                style={{ textDecoration: "none", color: "black" }}
                className="projectButton"
                href="https://github.com/Arpi30/reactTodo">
                Read More...
              </a>
            </div>
          </div>
          <div className="projectPost">
            <div className="projectImg">
              <img src="https://i.cdn29.hu/apix_collect_c/1207/netflix/netflix_screenshot_20180707133224_2_original_760x425_cover.jpg"></img>
            </div>
            <div className="projectInfo">
              <div className="projectInfoContainer">
                <div className="projectDate">
                  <span>{day} </span>
                  <span>{new Date().getFullYear()} </span>
                  <span>{month} </span>
                </div>
                <div className="watch">
                  <AiFillEye />
                  <span style={{ marginLeft: "5px" }} className="watchNumber">
                    {movieWatch || "0"}
                  </span>
                </div>
              </div>
              <div className="projectClassification">
                <h1 className="projectTitle">Online Movie App</h1>
                <div className="stars">
                  <Stars>
                    {starIcon.map((item, index) => {
                      return (
                        <AiOutlineStar
                          className="star"
                          size={20}
                          key={index}
                          cursor="pointer"
                          onClick={() =>
                            starsClick(index + 1, setStartMoovieVal)
                          }
                          color={
                            (movieHover || startMoovieVal) > index
                              ? "#e8e819"
                              : "grey"
                          }
                          onMouseOver={() =>
                            starsMouseOver(index + 1, setMovieHover)
                          }
                          onMouseLeave={() => starsMouseLeave(setMovieHover)}
                        />
                      );
                    })}
                  </Stars>
                </div>
                <VoteButton onClick={() => setStartMoovieVal(0)}>
                  Nem szavazok
                </VoteButton>
              </div>
              <p className="projectText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It
                was popularised in the 1960s with the release of Letraset sheets
              </p>
              <a
                onClick={() => setMovieWatch(movieWatch + 1)}
                style={{ textDecoration: "none", color: "black" }}
                className="projectButton"
                href="https://github.com/Arpi30/onlineMovie">
                Read More...
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
