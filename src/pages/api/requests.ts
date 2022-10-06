import { Product } from "./types/Product";
import { TabbedProducts } from "./types/TabbedProducts";

const apiUrl = "http://localhost:5000/api/";
// const apiUrl = "https://api.comeforhealth.ca/api/";
const cookieKey = "authorization";
export const isAdminKey = "isAdmin";

export async function getAllTabbedProducts(): Promise<
  Record<string, TabbedProducts>
> {
  let response = await fetch(`${apiUrl}allproducts-tabs-format`, {
    mode: "cors",
  });
  if (response.ok) {
    return (await response.json()) as Record<string, TabbedProducts>;
  }
  return {};
}

export async function getAllProductsHandleFormat() {
  let response = await fetch(`${apiUrl}allproducts-handle-format`, {
    mode: "cors",
  });
  if (response.ok) {
    return response.json();
  }
  return {};
}

export async function getProductByHandle(handle: string) {
  let response = await fetch(`${apiUrl}product/handle-format/${handle}`, {
    mode: "cors",
  });
  if (response.ok) {
    return response.json();
  }
  return {};
}

export async function updateProduct(product: string) {
  const response = await fetch(`${apiUrl}product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(product),
  });
  if (response.ok) {
    return response.json();
  }
  return {};
}

export async function addProduct(product: string) {
  const response = await fetch(`${apiUrl}product/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(product),
  });
  if (response.ok) {
    return response.json();
  }
  return {};
}

export async function deleteProductByObject(product: string) {
  const response = await fetch(`${apiUrl}product/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(product),
  });
  if (response.ok) {
    return response.json();
  }
  return {};
}

export async function sendLogin(username: string, password: string) {
  const response = await fetch(`${apiUrl}admin-login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ username: username, password: password }),
  });
  return response.json();
}

export function setAdminCookie(value: string) {
  addCookie(isAdminKey, value, 1);
}

function addCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function generateCookieObject() {
  return document.cookie.split("; ").reduce((prev: any, current) => {
    const [name, ...value] = current.split("=");
    prev[name] = value.join("=");
    return prev;
  }, {});
}

export function getCookieAt(key: string) {
  return generateCookieObject()[key];
}

// // Image Service?

// import { AWS } from "aws-sdk";
// // Load the AWS SDK for Node.js
// // Set the region
// AWS.config.update({ region: "REGION" });

// // Create S3 service object
// s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// // Create the parameters for calling createBucket
// var bucketParams = {
//   Bucket: process.argv[2],
// };

// // call S3 to create the bucket
// s3.createBucket(bucketParams, function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Location);
//   }
// });
