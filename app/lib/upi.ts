// import { Client } from '@vercel/postgres';
// import { users, customers, invoices, revenue } from './placeholder-data'; // Adjust the path if needed

// // Connection string to the 'verceldb' database
// const connectionString = 'postgres://default:YTUAQjEMF03L@ep-little-waterfall-a4pfqtb5-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require';

// // Function to insert data
// async function insertData() {
//   const client = new Client({
//     connectionString,
//   });

//   try {
//     await client.connect();
//     console.log('Connected to the verceldb database successfully!');

//     // Insert users
//     for (const user of users) {
//       const insertUserQuery = `
//         INSERT INTO users (id, name, email, password)
//         VALUES ($1, $2, $3, $4);
//       `;
//       await client.query(insertUserQuery, [user.id, user.name, user.email, user.password]);
//       console.log(Inserted user: ${user.name});
//     }

//     // Insert customers
//     for (const customer of customers) {
//       const insertCustomerQuery = `
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES ($1, $2, $3, $4);
//       `;
//       await client.query(insertCustomerQuery, [customer.id, customer.name, customer.email, customer.image_url]);
//       console.log(Inserted customer: ${customer.name});
//     }

//     // Insert invoices
//     for (const invoice of invoices) {
//       const insertInvoiceQuery = `
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES ($1, $2, $3, $4);
//       `;
//       await client.query(insertInvoiceQuery, [invoice.customer_id, invoice.amount, invoice.status, invoice.date]);
//       console.log(Inserted invoice for customer ID: ${invoice.customer_id});
//     }

//     // Optionally, insert revenue data if you have a table for it
//     // You can modify this based on your database schema
//     /*
//     for (const rev of revenue) {
//       const insertRevenueQuery = `
//         INSERT INTO revenue (month, revenue)
//         VALUES ($1, $2);
//       `;
//       await client.query(insertRevenueQuery, [rev.month, rev.revenue]);
//       console.log(Inserted revenue for month: ${rev.month});
//     }
//     */

//   } catch (err) {
//     console.error('Error inserting data:', err.message);
//   } finally {
//     await client.end();
//     console.log('Connection closed.');
//   }
// }

// // Call the insertData function
// insertData();