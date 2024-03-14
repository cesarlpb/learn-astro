import { db, Author } from 'astro:db';

export default async function() {
  await db.insert(Author).values([
    { name: 'Pepu'},
    
  ])
}