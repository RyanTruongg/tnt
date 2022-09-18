function test() {
  chrome.bookmarks.search("todo", (nodes) => {
    const todoFolderId = nodes[0].id;
    chrome.bookmarks.create({
      title: "asfa",
      parentId: todoFolderId,
      url: "https://microservices.io/",
    });
  });
}

const testBtn = document.getElementById("test");

testBtn.addEventListener("click", () => {
  test();
});
