// ============================================
// TELLEZ OTIMIZER WEB SIT
// COLOQUE SEUS LINKS AQUI
// ============================================

// Exemplo:
// Instagram: https://instagram.com/seu_usuario
// WhatsApp: https://wa.me/55DDDNUMERO
const COLOQUE_SEU_WHATSAPP_AQUI = "https://wa.me/5571981265142?utm_source=chatgpt.com";
const COLOQUE_SEU_INSTAGRAM_AQUI = "https://www.instagram.com/tellez.xac?knvt=MXFuNHpjcmt5MDk2Ng%3D%3D&utm_source=qr";
const COLOQUE_SEU_TIKTOK_AQUI = "https://www.tiktok.com/@tellez.ofc?_r=1&_t=ZS-9BUnKjpbCnS";
const COLOQUE_SEU_DISCORD_AQUI = "https://discord.gg/qnnVcJJJF";

// Não precisa mexer daqui para baixo.
const links = {
  whatsapp: COLOQUE_SEU_WHATSAPP_AQUI,
  instagram: COLOQUE_SEU_INSTAGRAM_AQUI,
  tiktok: COLOQUE_SEU_TIKTOK_AQUI,
  discord: COLOQUE_SEU_DISCORD_AQUI
};

document.querySelectorAll("[data-social]").forEach((link) => {
  const url = links[link.dataset.social];
  const placeholder = url.includes("COLOQUE_SEU_");

  if (!placeholder) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.querySelector("b").textContent = "Abrir perfil ↗";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Esse link ainda não foi configurado. Edite o script.js e coloque seu link.");
    });
  }
});

const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#nav");

menuButton?.addEventListener("click", () => {
  nav.classList.toggle("open");
});
