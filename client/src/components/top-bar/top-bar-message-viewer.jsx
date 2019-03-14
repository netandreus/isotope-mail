import React from 'react';
import PropTypes from 'prop-types';
import ButtonCollapse from './button-collapse';
import ButtonDelete from './button-delete';
import ButtonReply from './button-reply';
import ButtonForward from './button-forward';
import ButtonMarkUnread from './button-mark-unread';
import mainCss from '../../styles/main.scss';

const TopBarMessageViewer = (
  {
    collapsed, sideBarToggle, clearSelectedMessage,
    outboxEmpty, onReplyMessageClick, onForwardMessageClick,
    onDeleteClick,
    onMarkUnreadClick
  }) => (
  <div className={mainCss['mdc-top-app-bar__row']}>
    <section className={`${mainCss['mdc-top-app-bar__section']} ${mainCss['mdc-top-app-bar__section--align-start']}`}>
      <ButtonCollapse collapsed={collapsed} sideBarToggle={sideBarToggle} />
      <button
        className={`material-icons ${mainCss['mdc-top-app-bar__navigation-icon']}`}
        onClick={clearSelectedMessage}>
        arrow_back
      </button>
    </section>
    <section className={`${mainCss['mdc-top-app-bar__section']} ${mainCss['mdc-top-app-bar__section--align-end']}`}>
      <ButtonReply outboxEmpty={outboxEmpty} replyMessage={onReplyMessageClick}/>
      <ButtonForward outboxEmpty={outboxEmpty} forwardMessage={onForwardMessageClick}/>
      <ButtonDelete onClick={onDeleteClick}/>
      <ButtonMarkUnread onClick={onMarkUnreadClick}/>
    </section>
  </div>
);

TopBarMessageViewer.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  sideBarToggle: PropTypes.func.isRequired,
  clearSelectedMessage: PropTypes.func.isRequired,
  outboxEmpty: PropTypes.bool.isRequired,
  onReplyMessageClick: PropTypes.func.isRequired,
  onForwardMessageClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onMarkUnreadClick: PropTypes.func.isRequired
};

export default TopBarMessageViewer;
