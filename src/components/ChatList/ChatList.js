import React from 'react'
import chatImg from '../../assets/Dashboard/chat-img1.png'
import chatImg2 from '../../assets/Dashboard/chat-img2.png'
import Search from '../Search/Search'
import './ChatList.scss'

const ChatList = () => (
  <div className="chat-list" data-testid="ChatList">
    <h2 className="reusable-heading-border-bottom">Chat</h2>
    <div className="chat-list-items">
      <div className="chat-list-item">
        <div className="chat-list-item-img">
          <img src={chatImg} alt="" />
          <div className="chat-list-item-img-status" />
        </div>
        <p>Mary Robbinson</p>
      </div>
      <div className="chat-list-item">
        <div className="chat-list-item-img">

          <div className="chat-list-item-img-no flex-center-r">J</div>
          <div className="chat-list-item-img-status c-gray" />

        </div>
        <p>Jane Cooper</p>
      </div>
      <div className="chat-list-item">
        <div className="chat-list-item-img">
          <div className="chat-list-item-img-no flex-center-r">R</div>
          <div className="chat-list-item-img-status" />
        </div>
        <p>Robert Fox</p>
      </div>
      <div className="chat-list-item">
        <div className="chat-list-item-img">
          <img src={chatImg2} alt="" />
          <div className="chat-list-item-img-status c-gray" />
        </div>
        <p>Cameron Williamson</p>
      </div>
      <div className="chat-list-item">
        <div className="chat-list-item-img">
          <div className="chat-list-item-img-no flex-center-r">R</div>
          <div className="chat-list-item-img-status c-gray" />
        </div>
        <p>Robert Fox</p>
      </div>
      <div className="chat-list-item">
        <div className="chat-list-item-img">
          <div className="chat-list-item-img-no flex-center-r">R</div>
          <div className="chat-list-item-img-status c-gray" />
        </div>
        <p>Robert Fox</p>
      </div>
      <div className="chat-list-item">
        <div className="chat-list-item-img">
          <div className="chat-list-item-img-no flex-center-r">R</div>
          <div className="chat-list-item-img-status c-gray" />
        </div>
        <p>Robert Fox</p>
      </div>
    </div>

    <div className="chat-list-search">
      <Search width="col-lg-12 col-xl-12" />

    </div>

  </div>

)

ChatList.propTypes = {
}

ChatList.defaultProps = {
}

export default ChatList
