const schedule = require("node-schedule");

const scheduleReminder = (itemId, reminderTime, callback) => {
  schedule.scheduleJob(reminderTime, () => {
    console.log(`Reminder for item ${itemId}`);
    callback();
  });
};

module.exports = { scheduleReminder };