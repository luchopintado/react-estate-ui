import { useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";

function ProfilePage(){
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await apiRequest.post("/auth/logout");
            localStorage.removeItem("user");
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User information</h1>
                        <button>Update profile</button>
                    </div>

                    <div className="info">
                        <span>
                            Avatar:
                            <img src="https://i.pravatar.cc/100" alt="avatar"/>
                        </span>
                        <span>Username: <b>John Doe</b></span>
                        <span>E-mail: <b>JohnDoe@gmail.com</b></span>

                        <button onClick={handleLogout}>Logout</button>
                    </div>

                    <div className="title">
                        <h1>My List</h1>
                        <button>Create new post</button>
                    </div>

                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
