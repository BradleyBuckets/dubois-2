let content = document.getElementById("content");

class Nav {
  build = (elm, target, content) => {
    let div = document.createElement("div");
    div.classList.add(elm);
    div.textContent = content;
    document.querySelector(`.${target}`).appendChild(div);
  };

  remove = (target) => {
    document.querySelector(`.${target}`).remove();
  };

  buildNav = () => {
    let arr = [
      ["nav2", "content", ""],
      ["navContainer2", "nav2", ""],
      ["logo2", "navContainer2", "Du Bois"],
      ["navItems2", "navContainer2", ""],
      ["about2", "navItems2", "About"],
      ["menu2", "navItems2", "Menu"],
      ["bookNow2", "navItems2", "Book Now"],
    ];
    for (let arg of arr) {
      this.build(arg[0], arg[1], arg[2]);
    }
  };
  addTriangle = (side) => {
    let arr = [
      [`triContainer2${side}`, "nav2", ""],
      ["triangle2", `triContainer2${side}`, ""],
    ];
    for (let arg of arr) {
      this.build(arg[0], arg[1], arg[2]);
    }
  };
}

let nav = new Nav();

nav.buildNav();
nav.addTriangle("Menu");
nav.remove("triContainer2Menu");
nav.addTriangle("About");
nav.remove("triContainer2About");
