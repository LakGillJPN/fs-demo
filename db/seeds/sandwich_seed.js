/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sandwich').del()
  await knex('sandwich').insert([
    {
    img_url: 'BlissfulBagelSandwich.jpeg', 
    name: 'Blissful Bagel Sandwich',
    likes: 64,
    desc: "A holy sandwich",
    prep_time: 20,
    default_serving: 2,
    calories: 800
  },

  {
    img_url: 'BetterBurgerSandwich.jpeg', 
    name: 'Better Burger Sandwich',
    likes: 102,
    desc: "It's not the best but it's better",
    prep_time: 10,
    default_serving: 1,
    calories: 1400
},

{
   img_url: 'OutspokenOpenSandwich.jpeg', 
   name: 'Outspoken Open Sandwich',
   likes: 27,
   desc: "This sandwich is very honest. Do not try to eat it upside down",
   prep_time: 5,
   default_serving: .5,
   calories: 160
},
  
  ]);
};
