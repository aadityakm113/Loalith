import "../app.css";

const Hero = () => {
  return (
    <div className="hero_container">
      <h1>Welcome to Loalith Manpower Services Pvt Ltd</h1>
      <p>
        We, Loalith Manpower have created a niche for ourselves in our domain
        of executive search, placement, compensation surveys, management
        consultancy services, management training & more. We are a team of
        highly committed & experienced professionals, catering to the specific
        requirements of various organizations.
      </p>
      <h3>Who we are</h3>
      <p>
        Loalith Manpower services, being a 9 year stable company offering
        services towards manpower recruitment with utmost commitment. With
        promising expertise and experience in recruitment, Loalith is a stand
        out by providing pioneered solutions towards staffing and recruitment.
        Loalith is unique in its own way of approach as it is being led by a
        woman entrepreneur. We are specialized in various verticals such as
        Contract staffing, Permanent Staffing, Banking Sector, Financial
        sector, Engineering, IT, ITes and Pharma.
      </p>
      <p>
        We are empowered with people having varied and vast experience in
        distinct fields. This not only enables us to relate ourselves with the
        requirements of different fields but also to provide them with the
        right solutions by providing highly skilled personnel full of positive
        and vibrant energy to benefit the company and it's objectives.
      </p>
      <p>
        Moreover, in order to fulfill the regular requirements of our clientèle,
        we maintain a data bank that is regularly updated to provide maximum
        choice and quality of candidates. We also fulfill specific requirement
        of clients through undertaking head hunting with focus on the desired
        candidate's profile.
      </p>
      <div className="services">
        <div className="service_container">
          <img
            src="./assets/consultancy.jpg"
            alt=""
            className="service_img"
          />
          <p className="text">
            We provide IT Consulting (logistics & SCM consulting), Portal
            Design, Market Research and Data Analysis.Portal Design, Market
            Research and Data Analysis.
          </p>
        </div>
        <div className="service_container">
          <img
            src="./assets/recruitment.jpg"
            alt=""
            className="recruitment_img"
          />
          <p className="text">
            We believe in serving our clients giving them the flexibility to
            choose from the best available resources & flexibility to choose
            from the best available resources.to choose from
          </p>
        </div>
        <div className="service_container">
          <img src="./assets/training.jpeg" alt="" className="service_img" />
          <p>
            Corporate or Individual need based training is our expertise. We
            understand your requirements.is ourunderstand your requirements.is
            our expertise. We understand your requirements.
          </p>
        </div>
      </div>
      <div className="login">
        <h3>Login Here!</h3>
        <form>
          <label htmlFor="email">Email ID</label>
          <input type="text" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <input type="button" value="Login" onClick={() => {}} />
        </form>
      </div>
    </div>
  );
};

export default Hero;
