import { useState, useEffect } from "react";
import "./App.css";
import avatarImg from "./assets/images/image-avatar.jpg";
import uploadImg from "./assets/images/icon-upload.svg";
import appLogo from "./assets/images/logo-full.svg";
import Form from "./Components/Form";
import Result from "./Components/Result";



function App() {
  const [ isBtnClick, setBtnClick] = useState(false);
  const [ isImageSelected, setImageSelected] = useState(false);

  const [ fullName, setFullName] = useState("");
  const [ email, setEmail] = useState("");
  const [ userName, setUserName] = useState("");
  const [ imgFile, setImgFile ] = useState(avatarImg);
  const [ thumbNail, setThumbNail ] = useState(uploadImg);

  
  function getAvatarInputFile(e){
    const file = e.target.files[0];
    if(file && e.target.value === ""){
      const url = URL.createObjectURL(file)
      setImgFile(url);
      setThumbNail(url);
      setImageSelected(true);
    }
    
  }

  const [currDate, setDate] = useState();

  useEffect(() => {
    const date = new Date();
    setDate(date.toLocaleString());
  }, []);

  function handleSelect() {
    if (fullName.length > 0 && email.length > 0 && userName.length > 0) {
      setBtnClick(true);
    } else {
      alert("First fill the input placeholder.");
    }
  }

  function handleNameValueChange(e) {
    setFullName(e.target.value);
  }

  function emailInputChange(e) {
    setEmail(e.target.value);
  }

  function userNameChange(e) {
    setUserName(e.target.value);
  }

  let header = (
    <h1>
      Your journey to coding conf <br />
      2025 starts here!
    </h1>
  );
  let pageDescription = (
    <p>Secure your spot at next year's biggest coding conference.</p>
  );

  if (isBtnClick) {
    header = (
      <h1>
        Congrats, <span className="gradient-text">{fullName.trim()}!</span> <br />
        Your ticket is ready.
      </h1>
    );

    pageDescription = (
      <p>
        We've emailed your ticket to <br />
        <span className="orange-text">{email.trim()}</span> and will send updates in
        <br /> the run up to the event.
      </p>
    );
  }


  return (
    <>
      <header>
        <img src={appLogo} />
        {header}
        {pageDescription}
      </header>
      <main>
        {isBtnClick && (
          <Result
            fullName={fullName}
            gitHubUserName={userName}
            dateAndLocation={currDate}
            avatar={imgFile}
          />
        )}
        {!isBtnClick && (
          <Form
            imageSelected={isImageSelected}
            onSelect={handleSelect}
            uploadedImageThumbNail={thumbNail}
            handleNameChange={handleNameValueChange}
            handleEmailChange={emailInputChange}
            handleGitUserNameChange={userNameChange}
            handleFileChange={getAvatarInputFile}
          />
        )}
      </main>
    </>
  );
}

export default App;