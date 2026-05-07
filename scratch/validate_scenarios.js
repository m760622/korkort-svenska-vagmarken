
const { SCENARIOS } = require('../scenarios-data.js');

console.log('Validating ' + SCENARIOS.length + ' scenarios...');

SCENARIOS.forEach((sc, i) => {
  const fields = ['id', 'img', 'questionAr', 'questionSv', 'optionsAr', 'optionsSv', 'correctIdx'];
  fields.forEach(f => {
    if (sc[f] === undefined) {
      console.error('Scenario ' + i + ' (ID: ' + sc.id + ') is missing field: ' + f);
      process.exit(1);
    }
  });
  if (!Array.isArray(sc.optionsAr) || sc.optionsAr.length !== 4) {
    console.error('Scenario ' + i + ' (ID: ' + sc.id + ') has invalid optionsAr');
    process.exit(1);
  }
  if (!Array.isArray(sc.optionsSv) || sc.optionsSv.length !== 4) {
    console.error('Scenario ' + i + ' (ID: ' + sc.id + ') has invalid optionsSv');
    process.exit(1);
  }
  if (typeof sc.correctIdx !== 'number' || sc.correctIdx < 0 || sc.correctIdx > 3) {
    console.error('Scenario ' + i + ' (ID: ' + sc.id + ') has invalid correctIdx: ' + sc.correctIdx);
    process.exit(1);
  }
});

console.log('All scenarios are valid!');
