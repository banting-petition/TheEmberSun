import db from '$lib/db';
export async function POST() {
    const slug = 'This is  test!';
    const title = 'This is test!';
    const image = 'KenaiSpries.jpg';
    const description = 'This is test!';

    const stmt = db.prepare(`
    INSERT INFO articles (slug, title, image, content)
    VALUES (?, ?, ?, ?,)
    
`);
    stmt.run(slug, title, image, content);
    return new Response(JSON.stringify({message: 'Successfully created!'}), {
        status: 200,
        headers: {'content-type': 'application/json'},
    });
}