export function jsonResponse(statusCode: number, body: any) {
  return {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body),
    statusCode,
  };
}
