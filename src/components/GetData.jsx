"use client";
function GetData({ data }) {
  console.log(data);
  return data && data.map(order => <div>{order.id}</div>);
}

export default GetData;
