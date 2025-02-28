import markIcon from "../assets/images/logo-mark.svg";
import gitHubIcon from "../assets/images/icon-github.svg";
import "./Result.css";


export default function Result({ avatar, dateAndLocation, fullName, gitHubUserName }) {
  return (
    <section className="result">
      <div className="resultHeader-wrapper">
        <div className="result-header-icon">
          <img src={markIcon} alt="this is the full icon." />
        </div>
        <div className="result-header-text">
          <h2>Coding Conf</h2>
          <p>{dateAndLocation}</p>
        </div>
      </div>

      <div className="user-about">
        <div className="image-avatar">
          <img src={avatar} alt="this is avatar" className="img-avatar" />
        </div>
        <div className="user-info">
          <h2>{fullName}</h2>
          <div className="github-username-wrapper">
            <img src={gitHubIcon} alt="this is git hub icon" />
            <p>{gitHubUserName}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
