class ContextMenuHandler {
  /**
   *
   * @param {chrome.contextMenus.OnClickData} onClickData
   * @param {chrome.tabs.Tab} tab
   */
  static createTask(onClickData, tab) {
    chrome.bookmarks.search({ title: "td" }, async (nodes) => {
      const todoFolderId = nodes[0].id;

      chrome.scripting.executeScript(
        {
          args: [onClickData.pageUrl],
          target: { tabId: (await chrome.tabs.query({ active: true }))[0].id },
          func: (pUrl) => prompt("Please enter url", pUrl),
          world: "MAIN",
        },
        (url) => {
          chrome.bookmarks.create({
            title: onClickData.selectionText,
            parentId: todoFolderId,
            url: url[0].result,
          });
        }
      );
    });
  }
}

export default ContextMenuHandler;
