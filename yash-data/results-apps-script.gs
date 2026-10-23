// Google Apps Script for the Aptitude Mock Tests results sheet.
// Paste this into Extensions → Apps Script of the results Google Sheet. Setup: RESULTS-SETUP.md
// doPost adds one row per submitted test; doGet returns all rows so the page can show every attempt.

const SHEET = "Results";
const HEAD = ["Submitted", "Name", "Test", "Day", "Level", "Score", "Total", "Verbal", "Quant", "Logical",
  "Seconds", "Time up", "Started", "Answers"];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName(SHEET) || ss.insertSheet(SHEET);
  if (sh.getLastRow() === 0) { sh.appendRow(HEAD); sh.setFrozenRows(1); sh.getRange(1, 1, 1, HEAD.length).setFontWeight("bold"); }
  return sh;
}

// Stop text like "=..." from being run as a formula in the sheet
function text_(v, max) {
  const s = String(v == null ? "" : v).slice(0, max || 100);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}
const num_ = v => (isFinite(+v) ? +v : 0);
const out_ = o => ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);

function doPost(e) {
  let r;
  try { r = JSON.parse(e.postData.contents); } catch (err) { return out_({ ok: false, error: "bad json" }); }
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sheet_().appendRow([
      new Date(r.submittedAt || Date.now()), text_(r.name, 60), text_(r.exam, 10), text_(r.day, 20), text_(r.level, 20),
      num_(r.score), num_(r.total), num_(r.verbal), num_(r.quant), num_(r.logical),
      num_(r.secs), r.timeUp ? "yes" : "no", text_(r.startedAt, 30), text_(JSON.stringify(r.answers || {}), 5000)
    ]);
  } finally { lock.releaseLock(); }
  return out_({ ok: true });
}

function doGet() {
  const rows = sheet_().getDataRange().getValues().slice(1);
  return out_(rows.map(x => {
    let answers = {};
    try { answers = JSON.parse(x[13]); } catch (err) {}
    return {
      submittedAt: x[0] instanceof Date ? x[0].toISOString() : String(x[0]), name: String(x[1]).replace(/^'/, ""),
      exam: x[2], day: x[3], level: x[4], score: x[5], total: x[6], verbal: x[7], quant: x[8], logical: x[9],
      secs: x[10], timeUp: x[11] === "yes", startedAt: x[12], answers
    };
  }));
}
