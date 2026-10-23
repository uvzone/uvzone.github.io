# Results Google Sheet: one-time setup

Every submitted test is added as a row to a Google Sheet. Anyone using the page can save results without signing in.

1. Create a new Google Sheet, for example **Aptitude Mock Results**.
2. In the sheet, open **Extensions → Apps Script**.
3. Delete the sample code, paste in everything from `results-apps-script.gs`, then click **Save**.
4. Click **Deploy → New deployment**. Click the gear icon and pick **Web app**, then set:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, allow the permissions Google asks for, and copy the **Web app URL**. It ends in `/exec`.
6. In `yash.html`, paste that URL into `const RESULTS_URL = "";`, then push to `main`.

The sheet itself stays private to you. The page only writes rows and reads them back through the script.
A **Results** tab with headers is created when the first result comes in. Use **File → Download → Microsoft Excel** to get it as .xlsx.

If you change the script later, use **Deploy → Manage deployments → Edit → New version**. That keeps the same URL.

# Questions

Questions are in `questions.xlsx` (Tests and Questions sheets). The "How to edit" sheet explains the columns.
