// Constants
const TOKEN = `7778759750:AAF2wXbC-KIijbw_CVI-JpPLeonZZ8DrI9Y`;
const BASE_URL = `https://api.telegram.org/bot${TOKEN}`;
const CHAT_ID = "6027651602";
const DEPLOYED_URL = "<YourScriptDeployedURL>";
const SUM_CELL = "G2";
const METHODS = {
  SEND_MESSAGE: "sendMessage",
  SET_WEBHOOK: "setWebhook",
  GET_UPDATES: "getUpdates",
};

// Utils

const toQueryParamsString = (obj) => {
  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
};

// Telegram APIs

const makeRequest = async (method, queryParams = {}) => {
  const url = `${BASE_URL}/${method}?${toQueryParamsString(queryParams)}`;
  const response = await UrlFetchApp.fetch(url);
  return response.getContentText();
};

const sendMessage = (text) => {
  makeRequest(METHODS.SEND_MESSAGE, {
    chat_id: CHAT_ID,
    text,
  });
};

const setWebhook = () => {
  makeRequest(METHODS.SET_WEBHOOK, {
    url: DEPLOYED_URL,
  });
};

const getChatId = async () => {
  const res = await makeRequest(METHODS.GET_UPDATES);
  console.log("ChatId: ", JSON.parse(res)?.result[0]?.message?.chat?.id);
};

// Google Sheet

const addNewRow = (content = []) => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const Avals = sheet.getRange("A1:A").getValues();
  const Alast = Avals.filter(String).length;
  const columnNumber = content.length;
  const newRow = sheet.getRange(Alast + 1, 1, 1, columnNumber);
  newRow.setValues([content]);
};

// Extract label & price

const getMultiplyBase = (unitLabel) => {
  switch (unitLabel) {
    case "k":
    case "K":
    case "nghìn":
    case "ng":
    case "ngàn":
      return 1000;
    case "lít":
    case "lit":
    case "l":
      return 100000;
    case "củ":
    case "tr":
    case "m":
    case "M":
      return 1000000;
    default:
      return 1;
  }
};

const addExpense = (text) => {
  const regex = /(.*)\s(\d*)(\w*)/g;
  const label = text.replace(regex, "$1");
  const priceText = text.replace(regex, "$2");
  const unitLabel = text.replace(regex, "$3");
  const time = new Date().toLocaleString();
  const price = Number(priceText) * getMultiplyBase(unitLabel);

  addNewRow([time, label, price]);
};

// Webhooks
const doPost = (request) => {
  const contents = JSON.parse(request.postData.contents);
  const text = contents.message.text;
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  addExpense(text);
  const totalExpenses = sheet
    .getRange(SUM_CELL)
    .getValue()
    .toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  sendMessage(`Tổng chi tiêu: ${totalExpenses}`);
};
