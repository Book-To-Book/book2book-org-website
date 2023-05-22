import Bowser from "bowser";

const browser = Bowser.getParser(window.navigator.userAgent);

const IOS_LINK = "https://apps.apple.com/it/app/book2book/id1671517327";

const ANDROID_LINK = "https://play.google.com/store/apps/details?id=it.book2book";

export const useAppDownloadLink = () => {

  const os = browser.getOSName();

  if (os === 'macOS' || os === 'iOS') {
    return IOS_LINK;
  }

  return ANDROID_LINK;
};