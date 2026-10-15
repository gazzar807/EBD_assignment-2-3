// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// TODO: export the five functions spec.md asks for:
//   loadOrders()        async
//   myOrders(orders)
//   summarize(orders)
//   describeOrder(id)   async, and must never throw
//   toJsonLines(orders)
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.
export async function loadOrders() {
    const retrieve = await findAllOrders();

    return retrieve;
}

export function myOrders(orders){
    const test = orders.filter((student) => student.city == "Mansoura")
    const test2 = test.filter((student) => student.status == "pending")

    return test2;
}

//console.log(myOrders( await loadOrders()));


export function summarize(orders){
    
    return orders.reduce((total, student) => total + student.quantity, 0);
}

//console.log(summarize(await findAllOrders()));

export async function describeOrder(id){
   try {
       const product = await findOrderById(id);
       return `${product.quantity} x ${product.item} for ${product.student}`;
     } catch (error) {
       return `Could not find order ${id}`;
     }
}

console.log(await describeOrder(999999));

export function toJsonLines(orders){
    const json = orders.map((order) => { return {student: order.student, city: order.city} });
    return JSON.stringify(json);
}

console.log(toJsonLines(await loadOrders()));