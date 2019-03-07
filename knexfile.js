// Update with your config settings.

// this is dummy data, would need to be replaced with actual data
// this is needed if pg is running on your own computer
const localPgConnection = {
  host: 'localhost',
  database: 'hobbits',
  user: 'student', // need to exist as credentials
  password: 'hired'
};

// run on projection, if no production run on local
const prodDbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/hobbits.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: prodDbConnection, // can be object or string
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      // each pool is like one phone call, you have to juggle the conversations, like a conference call, default is usually between 2 and 10
      min: 2,
      max: 10
    }
  }
};
