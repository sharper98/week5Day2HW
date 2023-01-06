let menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];
  
  // Task 1.0
  let mainEl = document.querySelector("main");
  
  // Task 1.1
    mainEl.style.backgroundColor = "var(--main-bg)";
  
  // Task 1.2
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
  
  // Task 1.3
  mainEl.classList.add("flex-ctr");
  
  // Task 2.0
  let topMenuEl = document.getElementById("top-menu");
  
  // Task 2.1
  topMenuEl.style.height = "100%";
  
  // Task 2.2
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  
  // Task 2.3
  topMenuEl.classList.add("flex-around");
  
  // Task 3.0
  // Completed!
  
  // Task 3.1
  function iterateMenuLink(array, menuElement) {
    array.forEach((element) => {
      const newElement = document.createElement("a");
  
      newElement.setAttribute("href", element.href);
  
      newElement.innerHTML = element.text;
  
      menuElement.append(newElement);
    });
  }
  
  iterateMenuLink(menuLinks, topMenuEl);
  
  //5.2 HW - DOM MENU LAB 2
  
  // Task 4.0
  let subMenuEl = document.getElementById("sub-menu");
  
  // Task 4.1
  subMenuEl.style.height = "100%";
  
  // Task 4.2
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  
  // Task 4.3
  subMenuEl.classList.add("flex-around");
  
  // Task 4.4
  subMenuEl.style.position = "absolute";
  
  // Task 4.5
  subMenuEl.style.top = "0";
  
  // Task 5.0
  // Updated!
  
  // Task 5.1
  let topMenuLinks = document.querySelectorAll("#top-menu a");
  
  let showingSubMenu = false;
  
  // Task 5.2
  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = "";
  
    subLinks.forEach((link) => {
      const subMenuLink = document.createElement("a");
  
      subMenuLink.href = link.href;
  
      subMenuLink.textContent = link.text;
  
      subMenuEl.appendChild(subMenuLink);
    });
  }
  
  topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
  
    if (event.target.tagName !== "A") {
      return;
    }
    console.log(event.target.textContent);
  
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
  
      showingSubMenu = false;
  
      subMenuEl.style.top = "0";
  
      return;
    }
  
    topMenuLinks.forEach((link) => link.classList.remove("active"));
  
    event.target.classList.add("active");
  
    const link = menuLinks.find((link) => link.text === event.target.textContent);
  
    if (link && link.subLinks) {
      showingSubMenu = true;
    } else {
      showingSubMenu = false;
    }
  
    if (showingSubMenu) {
      
      buildSubMenu(link.subLinks);
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
  });
  
  
  // Task 5.3
  // Completed!

  // Task 5.4 
  // Completed!

  // Task 5.5
  // Completed!
  
  // Task 5.6
  // Completed!
  
  // Task 5.7
  // Completed!

  // Task 5.8
  // Completed!
  
  // Task 6.0
  subMenuEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.tagName !== "A") {
      return;
    }
    showingSubMenu = false;
    subMenuEl.style.top = "0";
  
    topMenuLinks.forEach((element) => {
      element.classList.remove("active");
    });
  });
  
  // Task 6.1
  // Completed!
  
  // Task 6.2
  // Completed!
  
  // Task 6.3 
  subMenuEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.tagName !== "A") {
      return;
    }
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    mainEl.innerHTML = `<h1>${event.target.innerHTML}</h1>`;
  });
  
  // Task 6.4
  topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName !== "A") {
      return;
    }
    if (event.target.innerHTML === "ABOUT") {
      mainEl.innerHTML = `<h1>about</h1>`;
    } else {
      mainEl.innerHTML = `<h1>${event.target.innerHTML}</h1>`;
    }
  });