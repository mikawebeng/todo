import "./styles.css";

const onClickadd = () => {
  const inputText = document.getElementById("add-txt").value;
  document.getElementById("add-txt").value = "";
  createIncompleteList(inputText);
};

//未完了リスト関数化
const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  document.getElementById("incomp-list").appendChild(div);

  const compButton = document.createElement("button");
  compButton.innerText = "完了";

  compButton.addEventListener("click", () => {
    const compTarget = compButton.parentNode;
    document.getElementById("incomp-list").removeChild(compTarget);
    const txt = compTarget.firstElementChild.innerText;
    compTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = txt;

    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";

    returnButton.addEventListener("click", () => {
      const deleteTarget2 = returnButton.parentNode;
      document.getElementById("comp-list").removeChild(deleteTarget2);

      const txt2 = deleteTarget2.firstElementChild.innerText;
      createIncompleteList(text);
    });

    compTarget.appendChild(li);
    compTarget.appendChild(returnButton);

    document.getElementById("comp-list").appendChild(compTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomp-list").removeChild(deleteTarget);
    //deleteTarget.remove();
  });

  div.appendChild(li);
  div.appendChild(compButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickadd());
