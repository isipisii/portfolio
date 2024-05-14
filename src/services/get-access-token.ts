import queryString from "query-string";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

export const getAccessToken = async () => {
  //generated a base64 code of client_id:client_secret as required by the spotify API
  const basic = Buffer.from(
    `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
  ).toString("base64");

  //request access token along with the refresh token
  const response = await fetch(TOKEN_ENDPOINT, {
    cache: "no-store",
    // next: { revalidate: 0 },
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "refresh_token",
      refresh_token: process.env.REFRESH_TOKEN
    }),
  });

  return await response.json();
};
