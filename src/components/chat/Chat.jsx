import { useState } from "react";
import "./chat.scss";

function Chatbox({ setOpen: setChat }) {
    return (
        <div className="chatbox">
            <div className="top">
                <div className="user">
                    <img src="https://i.pravatar.cc/50" alt="" />
                    <span>John Doe</span>
                </div>
                <div className="close" onClick={() => setChat(null)}>&times;</div>
            </div>
            <div className="center">
                <div className="chatMessage">
                    <p>Suscipit dolorum dolores ad nisi ex sed.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Suscipit dolorum dolores ad nisi ex sed.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Suscipit dolorum dolores ad nisi ex sed.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Suscipit dolorum dolores ad nisi ex sed.</p>
                    <span>1 hour ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>
    );
}

function Chat(){
    const [chat, setChat] = useState({});

    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>

                <div className="message" onClick={() => setChat(true)}>
                    <img src="https://i.pravatar.cc/50" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur...
                    </p>
                </div>

                <div className="message" onClick={() => setChat(true)}>
                    <img src="https://i.pravatar.cc/50" alt="" />
                    <span>Amet Offic</span>
                    <p>
                    Sis modi harum accusamus ratione ...
                    </p>
                </div>

                <div className="message" onClick={() => setChat(true)}>
                    <img src="https://i.pravatar.cc/50" alt="" />
                    <span>Daener Targ</span>
                    <p>
                    ducimus cum? Facere praesentium corporis ...
                    </p>
                </div>

                <div className="message" onClick={() => setChat(true)}>
                    <img src="https://i.pravatar.cc/50" alt="" />
                    <span>Bran Const</span>
                    <p>
                        Natus deserunt alias dolorem nemo.
                    </p>
                </div>

                <div className="message" onClick={() => setChat(true)}>
                    <img src="https://i.pravatar.cc/50" alt="" />
                    <span>Masc Natus</span>
                    <p>
                        Fugiat, quis nobis. Rerum, ut blanditiis.
                    </p>
                </div>

                <div className="message" onClick={() => setChat(true)}>
                    <img src="https://i.pravatar.cc/50" alt="" />
                    <span>Pep Guard</span>
                    <p>
                        Corporis est repudiandae, iste
                    </p>
                </div>

                <div className="message" onClick={() => setChat(true)}>
                    <img src="https://i.pravatar.cc/50" alt="" />
                    <span>John Doe</span>
                    <p>
                        Consectetur, adipisicing elit...
                    </p>
                </div>
            </div>

            {
                chat ? <Chatbox setOpen={setChat} /> : null
            }
        </div>
    )
}

export default Chat;
