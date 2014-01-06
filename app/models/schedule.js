var Schedule = DS.Model.extend({
  title:       DS.attr('string'),
  time:        DS.attr('string'),
  autor:       DS.attr('string')
});

Schedule.FIXTURES = [
  {
    id:          1,
    title:       "19.15 - 19.30 Регистрация",
    autor:        ""
  },
  {
    id:          2,
    title:       "19.30 - 19.45 Миссия, формат и перспективы клуба",
    autor:       "Yevhenii Kurtov"
  },

  {
    id:          3,
    title:       "19.45 - 20.15 Ember.js - инструмент быстрого прототипирования",
    autor:       "Alex Opak"
  }
];

export default Schedule;