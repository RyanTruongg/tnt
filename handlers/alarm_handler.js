import constants from "../constants.js";

class AlarmHandler {
  /**
   *
   * @param {chrome.alarms.Alarm} alarm
   */
  static createTodoReminder(alarm) {
    chrome.bookmarks.search({ title: "td" }, (nodes) => {
      const todoFolderId = nodes[0].id;
      chrome.bookmarks.getChildren(todoFolderId, (children) => {
        if (children.length > 0) {
          const message = children.reduce(
            (previousValue, currentElement) => previousValue + "- " + currentElement.title + "\n",
            constants.EMPTY_STRING
          );
          chrome.notifications.create(null, {
            type: "basic",
            iconUrl: "/assets/icon128.png",
            message: message,
            title: `${children.length} task${children.length > 1 ? "s" : ""} to do`,
          });
        }
      });
    });
  }
}

export default AlarmHandler;
