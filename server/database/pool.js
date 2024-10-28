const { Client } = require('pg');

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5); 
}

const getVerses = async () => {
    const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});


await client.connect();

    try{
        const res = await client.query('SELECT * FROM verses');
    return res.rows;
    } catch (error) {
        console.error('Error fetching the verses', error);
        return[];
    } finally {
        await client.end();
    }
};

module.exports =  getVerses ;