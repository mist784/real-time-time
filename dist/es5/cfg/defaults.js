"use strict";

var DEFAULTS = {
    domElement: null,
    remoteTimezoneOffsetHours: 0,
    intervalDelayMillis: 500,
    timeDisplayFormat: "It's {time} there{diff}",
    timeFormat: {
        locales: "en-US",
        options: {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true
        }
    },
    diffFormat: {
        wrapper: " ({diffTxt})",
        noDiffTxt: "my timezone PogChamp",
        diffTxt: "{h}h {course} btw",
        course: {
            ahead: "ahead",
            behind: "behind"
        }
    }
};

module.exports = DEFAULTS;