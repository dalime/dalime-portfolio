// Types
import { WPPost } from '../types';

/**
 * Fetches the blog posts associated with the agency WordPress
 * @returns WPPost[]
 */
export const fetchAgencyPosts = async (): Promise<WPPost[]> => {
  return fetch(`${process.env.REACT_APP_AGENCY_WP_URL}/wp-json/wp/v2/posts`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.text()).then((res) => {
    // eslint-disable-next-line no-useless-escape
    const fixedRes = res.replace(/\<\? header\(\"Access-Control-Allow-Origin: \*\"\); \?>/g, "");
    const jsonRes = JSON.parse(fixedRes);
    console.log("Fetched agency posts", jsonRes);
    return jsonRes as WPPost[];
  }).catch((error) => {
    console.error("Error fetching agency posts", error);
    return [];
  });
};

/**
 * Fetches the blog posts associated with the team members' WordPress websites
 * @returns WPPost[]
 */
export const fetchTeamPosts = async (): Promise<WPPost[]> => {
  return fetch(`${process.env.REACT_APP_PERSONAL_WP_URL}/wp-json/wp/v2/posts`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.text()).then((res) => {
    // eslint-disable-next-line no-useless-escape
    const fixedRes = res.replace(/\<\? header\(\"Access-Control-Allow-Origin: \*\"\); \?>/g, "");
    const jsonRes = JSON.parse(fixedRes);
    console.log("Fetched team members' posts", jsonRes);
    return jsonRes as WPPost[];
  }).catch((error) => {
    console.error("Error fetching team members' posts", error);
    return [];
  });
};
