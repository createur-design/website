window.onload = (e) => {
  const cookie = document.cookie;
  //   console.log(cookie);
  if (!cookie) {
    const div = document.createElement("DIV");
    div.id = "cookie-js";
    div.innerHTML =
      "<p>En poursuivant votre navigation sur ce site, <b>vous acceptez l’utilisation de Cookies</b> pour réaliser des statistiques de visites anonymes.<button id='bt-cookie'>j'accepte les cookies</button> - <a href='mentions-legales'>mentions légales</a>.</p>";
    document.body.appendChild(div);

    document.querySelector("#bt-cookie").addEventListener("click", () => {
      const expires = (60 * 60 * 24 * 365) / 2; // in secondes => 6 months
      document.cookie = `cookie=true; max-age=${expires}; path=/;`;
      document.querySelector("#cookie-js").remove();
    });
  }
};
