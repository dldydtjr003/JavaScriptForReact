import { Cookies } from "react-cookie";

const cookies = new Cookies();

// 쿠키에 저장
export const setCookie = (name, value, days) => {
  const expires = new Date();
  expires.setUTCDate(expires.getUTCDate() + days); // 현재 + 보관기한
  // path : "/"  쿠키값이 저장 될 장소, expires : 저장기간
  return cookies.set(name, value, { path: "/", expires: expires });
};

// 쿠키에 로드
export const getCookie = (name) => {
  return cookies.get(name);
};

// 쿠키에 삭제
export const removeCookie = (name, path = "/") => {
  cookies.remove(name, { path });
};
