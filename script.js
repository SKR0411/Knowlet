const semestersDiv = document.getElementById("semesters");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupBody = document.getElementById("popup-body");
const closeBtn = document.getElementById("closeBtn");
const popupContent = document.getElementById("popup-content");
const imgPopup = document.getElementById("img-popup");
const imgClose = document.getElementById("img-close");
const popupImage = document.getElementById("popup-image");
const imgTitle = document.getElementById("img-title");


// --- Stack to keep history ---
let popupStack = [];

function showPopup(title, content) {
  // Save current popup state to stack
  popupStack.push({ title, content });
  renderPopup(title, content);
}

function renderPopup(title, content) {
  popupTitle.textContent = title;
  popupBody.innerHTML = "";

  content.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = item.name || item;
    div.onclick = item.onClick;
    
    popupBody.appendChild(div);
  });

  popup.classList.remove("hidden");
}

function goBack() {
  popupStack.pop(); // remove current
  if (popupStack.length === 0) {
    popup.classList.add("hidden");
  } else {
    const prev = popupStack[popupStack.length - 1];
    renderPopup(prev.title, prev.content);
  }
}

// Close popup
closeBtn.onclick = () => {goBack()};

window.onclick = (e) => {
  if (e.target === popup) {
    popupStack = [];
    popup.classList.add("hidden");
  }
};

// --- Load semesters ---
data.semesters.forEach((sem, si) => {
  const div = document.createElement("div");
  div.className = "card";
  div.textContent = sem.name;
  div.onclick = () => {
    showPopup(sem.name, sem.subjects.map((sub, sj) => ({
      name: sub.name,
      onClick: () => {
        showPopup(sub.name, Object.keys(sub.papers).map(paperType => ({
          name: paperType,
          onClick: () => {
            showPopup(paperType, sub.papers[paperType].map(unit => ({
              name: unit.unit
            })));
            
            const unit = sub.papers[paperType];
            popupBody.innerHTML = ``;
            unit.forEach(unit => {
              console.log(unit);
              const noteCard = document.createElement("div");
              noteCard.className = "note-card";
              noteCard.innerHTML = `
                <h3>${unit.unit}</h3>
                <button class="btn" onClick="viewImg('${unit.unit}', '${unit.file}')">View</button>
                <a href="${unit.file}" download class="btn btn-download">Download</a>
              `;
              popupBody.appendChild(noteCard);
            })
            
          }
        })));
      }
    })));
  };
  semestersDiv.appendChild(div);
});

function viewIm(unit, file) {
  console.log(unit);
  //alert("done");
  
  showPopup(unit, []);
  popupBody.innerHTML = "";
  
  
  const noteContent = document.createElement("div");
  noteContent.className = "noteContent";
  noteContent.innerHTML =`
    <div class="image-container">
      <img src="${file}" alt="${file}" />
    </div>
  `
  document.body.appendChild(noteContent);
}

function viewImg(unit, file) {
  
  imgPopup.style.display = "flex"
  popupImage.src = file;
  popupImage.alt = unit;
  imgTitle.textContent = unit;   // 👈 set heading
  //imgPopup.classList.remove("hidden");
}

// Close image popup
imgClose.onclick = () => {
  imgPopup.style.display = "none"
  //imgPopup.classList.add("hidden");
  //popupImage.src = "";
};

