var mockData = [
  "Mar 14 01:00:11 [postfix/smtp] connect to mx32.alza.cz[195.250.141.62]:25: Connection timed out",
  "Mar 14 01:00:41 [postfix/smtp] connect to mx33.alza.cz[195.250.141.63]:25: Connection timed out",
  "Mar 14 01:00:55 [postfix/smtpd] initializing the server-side TLS engine",
  "Mar 14 01:00:57 [postfix/smtpd] connect from unknown[181.174.187.23]",
  "Mar 14 01:00:58 [postfix/smtpd] 5241515A09FF: client=unknown[181.174.187.23]",
  "Mar 14 01:00:58 [postfix/smtpd] connect from 114-43-233-100.dynamic.hinet.net[114.43.233.100]",
  "Mar 14 01:01:41 [postfix/smtp] 8001515A09A7: to=<webinfo@info.alza.cz>, relay=none, delay=191847, delays=191697/0.05/150/0, dsn=4.4.1, status=deferred (connect to mx35.alza.cz[195.250.141.65]:25: Connection timed out)",
  "Mar 14 01:02:20 [postfix/smtpd] connect from unknown[196.212.19.162]",
  "Mar 14 01:02:21 [postfix/smtpd] disconnect from unknown[196.212.19.162] helo=1 auth=0/1 quit=1 commands=2/3",
  "Mar 14 01:03:02 [postfix/smtpd] disconnect from unknown[181.174.187.23] ehlo=1 mail=1 rcpt=1 data=1 quit=1 commands=5",
  "Mar 14 01:03:03 [postfix/smtpd] initializing the server-side TLS engine",
  "Mar 14 01:03:03 [postfix/smtpd] connect from localhost[127.0.0.1]",
  "Mar 14 01:03:03 [postfix/smtpd] A32EF15A0A15: client=localhost[127.0.0.1]",
  "Mar 14 01:03:03 [postfix/smtpd] disconnect from localhost[127.0.0.1] helo=1 mail=1 rcpt=1 data=1 quit=1 commands=5"
]

var mockDataArraySplit = [];
var sortedMockData = [];

(function splitMockDataIntoArray(mockData) {
  for (var i = 0; i < mockData.length; i += 1) {
    mockDataArraySplit.push(mockData[i].split(' '));
  }
})(mockData);

(function sortMockDataArray(mockData) {
  for (var i = 0; i < mockData.length; i += 1) {
    var dataObject = {
      date: mockData[i].slice(0, 2).join(' '),
      time: mockData[i].slice(2, 3).join(' '),
      incoming: (mockData[i].slice(3, 4).join(' ') === "[postfix/smtpd]"),
      outgoing: (mockData[i].slice(3, 4).join(' ') === "[postfix/smtp]"),
      connected: (mockData[i].slice(4, 6).join(' ') === "connect to") || (mockData[i].slice(4, 6).join(' ') === "connect from"),
      ifConnectedWasError: mockData[i].slice(7).join(' '),
      success: ((mockData[i].slice(4, 6).join(' ') === "connect to") || (mockData[i].slice(4, 6).join(' ') === "connect from")) && (mockData[i].slice(7).join(' ') == "")
    }
    sortedMockData.push(dataObject);
  }
})(mockDataArraySplit);

var emailLog = [];
var incomingMailLog = [];
var outgoingMailLog = [];

function renderMockDataEntree(sortedMockData) {
  for (var i = 0; i < sortedMockData.length; i += 1) {
    var logEntree = "";
    if (sortedMockData[i].success === true) {
      logEntree += "<div class = 'entree' style = background-color:#009688;>";
    } else {
      logEntree += "<div class = 'entree' style = background-color:#e91e63;>";
    };
    logEntree += "<p>Success: " + sortedMockData[i].success + "</p>";
    logEntree += "<p>Date: " + sortedMockData[i].date + "</p>";
    logEntree += "<p>Time: " + sortedMockData[i].time + "</p>";
    logEntree += "<p>Incoming: " + sortedMockData[i].incoming + "</p>";
    logEntree += "<p>Outgoing: " + sortedMockData[i].outgoing + "</p>";
    logEntree += "<p>Connected: " + sortedMockData[i].connected + "</p>";
    logEntree += "<p>Error Message: " + sortedMockData[i].ifConnectedWasError + "</p>";
    logEntree += "</div>";
    emailLog.push(logEntree);
    if(sortedMockData[i].incoming){
      incomingMailLog.push(logEntree);
    }
    if(sortedMockData[i].outgoing){
      outgoingMailLog.push(logEntree);
    }
  }
};

renderMockDataEntree(sortedMockData);
var logsToRender = emailLog.join(' ');
var incomingMailToRender = incomingMailLog.join(' ');
var outgoingMailToRender = outgoingMailLog.join(' ');
$(document).ready(function() {
  $(".email-log-data").html(logsToRender);
});

$(".trigger-incoming").on('click',function(){
  $(".email-log-data").html(incomingMailToRender);
});

$(".trigger-outgoing").on('click',function(){
  $(".email-log-data").html(outgoingMailToRender);
});

$(".trigger-all-mail").on('click',function(){
  $(".email-log-data").html(logsToRender);
});
