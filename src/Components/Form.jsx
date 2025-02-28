import infoImg from "../assets/images/icon-info.svg";

export default function Form({
  imageSelected,
  onSelect,
  uploadedImageThumbNail,
  handleNameChange,
  handleFileChange,
  handleEmailChange,
  handleGitUserNameChange,
}) {

  

  let imgSelectDescription = <p>Click to upload</p>;

  if(imageSelected){
    imgSelectDescription = <div className="image-changer-wrapper">
      <button id="changer-btn">Remove image</button>
      <button id="changer-btn" >Change image</button>
    </div> 
  }

  return (
    <form action="">
      <div className="avatar-uploader-wrapper">
        <p className="avatar-uploader-description">Upload Avatar</p>
        <label htmlFor="uploader" className="file-uploader">
          <img src={uploadedImageThumbNail} />
          {imgSelectDescription}
        </label>
        <input
          type="file"
          accept="image/png, image/jpg"
          name="uploader"
          id="uploader"
          onChange={handleFileChange}
        />
      </div>
        <div className="info-wrapper">
          <img src={infoImg} alt="this is an info icon" />
          <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
        </div>
      <div className="fullName-wrapper">
        <label htmlFor="fullname">Full Name</label>
        <input type="text" id="fullname" onChange={handleNameChange} />
      </div>
      <div className="email-wrapper">
        <label htmlFor="user-email">Email Address</label>
        <input
          type="email"
          id="user-email"
          placeholder="example@email.com"
          onChange={handleEmailChange}
        />
      </div>
      <div className="userName-wrapper">
        <label htmlFor="username">GitHub Username</label>
        <input
          type="text"
          placeholder="@yourusername"
          id="username"
          onChange={handleGitUserNameChange}
        />
      </div>
      <button onClick={onSelect}>Generate My Ticket</button>
    </form>
  );
}
