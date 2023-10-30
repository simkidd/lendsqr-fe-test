import { User } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Back from "../../assets/icons/np_back_3007750_000000 1.png";
import Star1 from "../../assets/icons/np_star_1171151_000000 1.png";
import Star2 from "../../assets/icons/np_star_1208084_000000 1.png";
import GeneralDetails from "./components/GeneralDetails/GeneralDetails";
import "./userDetails.scss";

const Api_Url =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User>(() => {
    const savedUser = localStorage.getItem('__user');
    if (savedUser) {
      return JSON.parse(savedUser)
    } else {
      return [];
    }
  });
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${Api_Url}/${id}`);
        const user = await res.data;
        setUser(user);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    };
    fetchUsers();
  }, [id]);

  useEffect(() => {
    localStorage.setItem('__user', JSON.stringify(user))
  }, [user])

  if (loading) return <div>Fetching user details...</div>

  return (
    <div className="user-details">
      <div className="back">
        <button className="btn-back" onClick={() => navigate(-1)}>
          <img src={Back} alt="" /> Back to Users
        </button>
      </div>

      <div className="top-buttons-wrapper">
        <h1>User Details</h1>
        <div className="top-buttons">
          <button>blacklist user</button>
          <button>activate user</button>
        </div>
      </div>

      <div className="details-wrapper">
        <div className="details-inner-wrapper">
          <div className="top">
            <div className="profile">
              <div className="img-wrapper">
                <img src={user.profile?.avatar} alt="" />
              </div>
              <div className="info-head">
                <p>
                  <span>{user.profile?.firstName}</span>{" "}
                  <span>{user.profile?.lastName}</span>
                </p>
                <p>{user.accountNumber}</p>
              </div>

              <div className="info-head2">
                <p className="tier">User's Tier</p>
                <span>
                  <img src={Star2} alt="" />
                  <img src={Star1} alt="" />
                  <img src={Star1} alt="" />
                </span>
              </div>
              <div className="info-head2">
                <p>&#8358;{user.accountBalance}</p>
                <span>9912345678/Providus Bank</span>
              </div>
            </div>

            <ul className="profile-tab-nav">
              <li>
                <button
                  className={activeTab === 0 ? "tab-btn active" : "tab-btn"}
                  onClick={() => setActiveTab(0)}
                >
                  General Details
                </button>
              </li>
              <li>
                <button
                  className={activeTab === 1 ? "tab-btn active" : "tab-btn"}
                  onClick={() => setActiveTab(1)}
                >
                  Documents
                </button>
              </li>
              <li>
                <button
                  className={activeTab === 2 ? "tab-btn active" : "tab-btn"}
                  onClick={() => setActiveTab(2)}
                >
                  Bank Details
                </button>
              </li>
              <li>
                <button
                  className={activeTab === 3 ? "tab-btn active" : "tab-btn"}
                  onClick={() => setActiveTab(3)}
                >
                  Loan
                </button>
              </li>
              <li>
                <button
                  className={activeTab === 4 ? "tab-btn active" : "tab-btn"}
                  onClick={() => setActiveTab(4)}
                >
                  Savings
                </button>
              </li>
              <li>
                <button
                  className={activeTab === 5 ? "tab-btn active" : "tab-btn"}
                  onClick={() => setActiveTab(5)}
                >
                  App and System
                </button>
              </li>
            </ul>
          </div>

          {activeTab === 0 && <GeneralDetails user={user} />}
          {activeTab === 1 && (
            <div
              style={{
                background: "#fff",
                borderRadius: "4px",
                border: "1px solid rgba(33,63,125,0.06)",
                boxShadow: "3px 5px 20px rgba(0,0,0,0.04)",
                padding: "30px",
              }}
            >
              Documents
            </div>
          )}
          {activeTab === 2 && (
            <div
              style={{
                background: "#fff",
                borderRadius: "4px",
                border: "1px solid rgba(33,63,125,0.06)",
                boxShadow: "3px 5px 20px rgba(0,0,0,0.04)",
                padding: "30px",
              }}
            >
              Bank Details
            </div>
          )}
          {activeTab === 3 && (
            <div
              style={{
                background: "#fff",
                borderRadius: "4px",
                border: "1px solid rgba(33,63,125,0.06)",
                boxShadow: "3px 5px 20px rgba(0,0,0,0.04)",
                padding: "30px",
              }}
            >
              Loan
            </div>
          )}
          {activeTab === 4 && (
            <div
              style={{
                background: "#fff",
                borderRadius: "4px",
                border: "1px solid rgba(33,63,125,0.06)",
                boxShadow: "3px 5px 20px rgba(0,0,0,0.04)",
                padding: "30px",
              }}
            >
              Savings
            </div>
          )}
          {activeTab === 5 && (
            <div
              style={{
                background: "#fff",
                borderRadius: "4px",
                border: "1px solid rgba(33,63,125,0.06)",
                boxShadow: "3px 5px 20px rgba(0,0,0,0.04)",
                padding: "30px",
              }}
            >
              App and System
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
