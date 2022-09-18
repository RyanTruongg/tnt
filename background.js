import ContextMenuHandler from "./handlers/context_menu_handler.js";
import AlarmHandler from "./handlers/alarm_handler.js";
import constants from "./constants.js";

chrome.alarms.create(constants.TASK_REMINDER_TODO, { when: Date.now() });
chrome.alarms.onAlarm.addListener((alarm) => {
  if ((alarm.name = constants.TASK_REMINDER_TODO)) {
    AlarmHandler.createTodoReminder(alarm);
  }
});

chrome.contextMenus.create({
  title: "Create task",
  contexts: ["selection", "link"],
  type: "normal",
  id: constants.CONTEXT_MENU_CREATE_TASK_ID,
});
chrome.contextMenus.onClicked.addListener((onClickData, tab) => {
  if (onClickData.menuItemId == constants.CONTEXT_MENU_CREATE_TASK_ID) {
    ContextMenuHandler.createTask(onClickData, tab);
  }
});
