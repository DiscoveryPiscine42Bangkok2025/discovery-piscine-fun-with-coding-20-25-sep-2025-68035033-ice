// -------- Utility: Cookie Handling -------- //
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decoded = decodeURIComponent(document.cookie);
  const ca = decoded.split(';');
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length);
    }
  }
  return "";
}

// -------- To-Do Logic -------- //
const list = document.getElementById('ft_list');
const btn = document.getElementById('newBtn');

function saveTodos() {
  // Save all todo texts as JSON array in cookie
  const todos = Array.from(list.children).map(div => div.textContent);
  setCookie('todos', JSON.stringify(todos), 7); // keep 7 days
}

function addTodo(text, save = true) {
  if (!text) return;
  const div = document.createElement('div');
  div.textContent = text;
  div.addEventListener('click', () => {
    if (confirm(`Remove "${text}" ?`)) {
      div.remove();
      saveTodos();
    }
  });
  // insert at top
  if (list.firstChild) {
    list.insertBefore(div, list.firstChild);
  } else {
    list.appendChild(div);
  }
  if (save) saveTodos();
}

// Load from cookie on page load
window.addEventListener('load', () => {
  const saved = getCookie('todos');
  if (saved) {
    try {
      const arr = JSON.parse(saved);
      arr.forEach(t => addTodo(t, false));
    } catch(e) {
      console.error('Error parsing cookie:', e);
    }
  }
});

// New button prompt
btn.addEventListener('click', () => {
  const text = prompt('Enter a new TO DO:');
  if (text && text.trim() !== '') {
    addTodo(text.trim());
  }
});
