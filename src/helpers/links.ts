/**
 * Navigates to a given URL in the browser
 * @param url string
 */
export const navigateToUrl = (url: string, sameTab?: boolean): void => {
  window.open(url, sameTab ? "_self" : "_blank");
};
