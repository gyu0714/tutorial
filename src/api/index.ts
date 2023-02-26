import { ICubeResult } from '../type/type';

export const cubeResultApi = async ({
  count,
  date,
  cursor,
}: {
  count: number;
  date?: string;
  cursor?: string;
}) => {
  const url = `/openapi/maplestory/v1/cube-use-results?count=10&date=2023-01-01&cursor=`;
  const headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjUwMzU5Njk5OSIsImF1dGhfaWQiOiIyIiwiZXhwIjoxNjg3MDk5MjkzLCJpYXQiOjE2NzE1NDcyOTMsIm5iZiI6MTY3MTU0NzI5Mywic2VydmljZV9pZCI6IjQzMDAxMTM5NyIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9.Rhqqgxda6DcmmRFDrTEvqNlgsRdm3IrUCJ0AgxxrZpw',
  };
  const params = {
    count: count,
    date: date ? date : '',
    cursor: cursor ? cursor : '',
  };

  const response = await fetch(url, {
    method: 'GET',
    headers: headers,
    // body: JSON.stringify(params),
  }).catch((error) => {
    console.log('❗️error : ', error);
  });

  // return response;
};
