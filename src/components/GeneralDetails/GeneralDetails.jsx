import React from "react";
import "./generalDetails.scss";

const GeneralDetails = ({user}) => {
  return (
    <div id="general-details" className="profile-information">
      <div className="info-title">
        <h3>Personal Information</h3>
        <div className="inner">
          <div>
            <p>full name</p>
            <div>
              <span>{user.profile?.firstName}</span>{" "}
              <span>{user.profile?.lastName}</span>
            </div>
          </div>
          <div>
            <p>phone number</p>
            <span>{user.profile?.phoneNumber}</span>
          </div>
          <div>
            <p>email address</p>
            <span>{user.email}</span>
          </div>
          <div>
            <p>bvn</p>
            <span>{user.profile?.bvn}</span>
          </div>
          <div>
            <p>gender</p>
            <span>{user.profile?.gender}</span>
          </div>
          <div>
            <p>marital status</p>
            <span>Single</span>
          </div>
          <div>
            <p>children</p>
            <span>None</span>
          </div>
          <div>
            <p>type of residence</p>
            <span>Grace Effiom</span>
          </div>
        </div>
      </div>
      <div className="info-title">
        <h3>Education and Employment</h3>
        <div className="inner">
          <div>
            <p>level of education</p>
            <span>{user.education?.level}</span>
          </div>
          <div>
            <p>employment status</p>
            <span>{user.education?.employmentStatus}</span>
          </div>
          <div>
            <p>sector of employment</p>
            <span>{user.education?.sector}</span>
          </div>
          <div>
            <p>durration of employment</p>
            <span>{user.education?.duration}</span>
          </div>
          <div>
            <p>office email</p>
            <span>{user.education?.officeEmail}</span>
          </div>
          <div>
            <p>monthly income</p>
            <div>
              <span>&#8358;{user.education?.monthlyIncome[0]} </span>-
              <span> &#8358;{user.education?.monthlyIncome[1]}</span>
            </div>
          </div>
          <div>
            <p>loan repayment</p>
            <span>{user.education?.loanRepayment}</span>
          </div>
        </div>
      </div>
      <div className="info-title">
        <h3>Socials</h3>
        <div className="inner">
          <div>
            <p>twitter</p>
            <span>{user.socials?.facebook}</span>
          </div>
          <div>
            <p>facebook</p>
            <span>{user.socials?.twitter}</span>
          </div>
          <div>
            <p>instagram</p>
            <span>{user.socials?.instagram}</span>
          </div>
        </div>
      </div>
      <div className="info-title">
        <h3>Guarantor</h3>
        <div className="inner">
          <div>
            <p>full name</p>
            <div>
              <span>{user.guarantor?.firstName}</span>{" "}
              <span>{user.guarantor?.lastName}</span>
            </div>
          </div>
          <div>
            <p>phone number</p>
            <span>{user.guarantor?.phoneNumber}</span>
          </div>
          <div>
            <p>address</p>
            <span>{user.guarantor?.address}</span>
          </div>
          <div>
            <p>relationship</p>
            <span>
              {user.guarantor?.gender === "Male" ? "Brother" : "Sister"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;
