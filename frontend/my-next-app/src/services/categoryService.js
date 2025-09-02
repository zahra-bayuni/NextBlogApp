import http from "./httpService";

// const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
//   const {data : {categories}} = await res.json();
  

export async function getCategoryApi(options){
     return http.get("/category/list", options).then(({ data }) => data.data);
}