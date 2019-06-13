// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };

exports.seed = async function(knex) {
  await knex('users').insert([
    {id: 1,
      username: 'Jon',
      password: 'pass',
      department: 'student'
    },
    {id: 2,
      username: 'Kate',
      password: 'pass',
      department: 'admin'
    },
    {id: 3,
      username: 'Gabe',
      password: 'pass',
      department: 'admin'
    }
  ]);
};
