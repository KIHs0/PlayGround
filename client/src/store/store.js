import { proxy } from "valtio";

const store = proxy({
  intro: true,
  color: "blue",
  login: false,
  isLogoTexture: true,
  isFullTexture: false,
  colorOn: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default store;
