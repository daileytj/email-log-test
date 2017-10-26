var mockData = [
  "Mar 14 01:00:11 [postfix/smtp] connect to mx32.alza.cz[195.250.141.62]:25: Connection timed out",
  "Mar 14 01:00:41 [postfix/smtp] connect to mx33.alza.cz[195.250.141.63]:25: Connection timed out",
  "Mar 14 01:00:55 [postfix/smtpd] initializing the server-side TLS engine",
  "Mar 14 01:00:57 [postfix/smtpd] connect from unknown[181.174.187.23]",
  "Mar 14 01:00:58 [postfix/smtpd] 5241515A09FF: client=unknown[181.174.187.23]",
  "Mar 14 01:00:58 [postfix/smtpd] connect from 114-43-233-100.dynamic.hinet.net[114.43.233.100]",
  "Mar 14 01:01:02 [postfix/smtpd] NOQUEUE: reject: RCPT from 114-43-233-100.dynamic.hinet.net[114.43.233.100]: 554 5.7.1 Service unavailable; Client host [114.43.233.100] blocked using zen.spamhaus.org; https://www.spamhaus.org/query/ip/114.43.233.100; from=<mmurray8@hinet.net> to=<stanislav.soloviev@memos.cz> proto=SMTP helo=<hinet.net>",
  "Mar 14 01:01:03 [postfix/smtpd] lost connection after RCPT from 114-43-233-100.dynamic.hinet.net[114.43.233.100]",
  "Mar 14 01:01:03 [postfix/smtpd] disconnect from 114-43-233-100.dynamic.hinet.net[114.43.233.100] helo=1 mail=1 rcpt=0/1 commands=2/3",
  "Mar 14 01:01:11 [postfix/smtp] connect to mx34.alza.cz[195.250.141.64]:25: Connection timed out",
  "Mar 14 01:01:41 [postfix/smtp] connect to mx35.alza.cz[195.250.141.65]:25: Connection timed out",
  "Mar 14 01:01:41 [postfix/smtp] 8001515A09A7: to=<webinfo@info.alza.cz>, relay=none, delay=191847, delays=191697/0.05/150/0, dsn=4.4.1, status=deferred (connect to mx35.alza.cz[195.250.141.65]:25: Connection timed out)",
  "Mar 14 01:02:20 [postfix/smtpd] connect from unknown[196.212.19.162]",
  "Mar 14 01:02:21 [postfix/smtpd] disconnect from unknown[196.212.19.162] helo=1 auth=0/1 quit=1 commands=2/3",
  "Mar 14 01:03:02 [postfix/smtpd] disconnect from unknown[181.174.187.23] ehlo=1 mail=1 rcpt=1 data=1 quit=1 commands=5",
  "Mar 14 01:03:03 [postfix/smtpd] initializing the server-side TLS engine",
  "Mar 14 01:03:03 [postfix/smtpd] connect from localhost[127.0.0.1]",
  "Mar 14 01:03:03 [postfix/smtpd] A32EF15A0A15: client=localhost[127.0.0.1]",
  "Mar 14 01:03:03 [postfix/smtpd] disconnect from localhost[127.0.0.1] helo=1 mail=1 rcpt=1 data=1 quit=1 commands=5",
  "Mar 14 01:03:54 [postfix/smtpd] connect from localhost[127.0.0.1]",
  "Mar 14 01:03:54 [postfix/smtpd] disconnect from unknown[181.174.187.23] ehlo=1 mail=1 rcpt=1 data=1 quit=1 commands=5",
  "Mar 14 01:03:54 [postfix/smtpd] 837AF15A09FF: client=localhost[127.0.0.1]",
  "Mar 14 01:03:54 [postfix/smtpd] disconnect from localhost[127.0.0.1] helo=1 mail=1 rcpt=1 data=1 quit=1 commands=5",
  "Mar 14 01:03:56 [postfix/smtp] 837AF15A09FF: to=<radim.brixi@memos.cz>, relay=mail.memos.cz[95.80.208.204]:25, delay=2.2, delays=0.23/0.02/0.01/2, dsn=4.7.1, status=deferred (host mail.memos.cz[95.80.208.204] said: 451 4.7.1 Temporarily rejected. Try again later. (in reply to RCPT TO command))",
  "Mar 14 01:04:12 [postfix/smtp] 55D6F15A0A17: to=<testimonialize@yizcor.com>, relay=yizcor.com[216.126.239.117]:25, delay=38695, delays=38694/0.02/0.34/0, dsn=4.0.0, status=deferred (host yizcor.com[216.126.239.117] refused to talk to me: 421 tachypo.com out of connection slots)",
  "Mar 14 01:04:12 [postfix/smtp] 061A415A0A1F: to=<traumatizing@shxwo.com>, relay=shxwo.com[216.126.239.103]:25, delay=101684, delays=101684/0.03/0.34/0, dsn=4.0.0, status=deferred (host shxwo.com[216.126.239.103] refused to talk to me: 421 tachypo.com out of connection slots)",
  "Mar 14 01:04:12 [postfix/smtp] 3D6B515A0A1E: to=<shucker@shxwo.com>, relay=shxwo.com[216.126.239.103]:25, delay=101697, delays=101696/0.07/0.31/0, dsn=4.0.0, status=deferred (host shxwo.com[216.126.239.103] refused to talk to me: 421 tachypo.com out of connection slots)",
  "Mar 14 01:04:12 [postfix/smtp] CE8E315A036A: to=<swung@csxca.com>, relay=csxca.com[216.126.239.77]:25, delay=144297, delays=144297/0.05/0.33/0, dsn=4.0.0, status=deferred (host csxca.com[216.126.239.77] refused to talk to me: 421 tachypo.com out of connection slots)",
  "Mar 14 01:05:36 [postfix/smtpd] initializing the server-side TLS engine",
  "Mar 14 01:05:36 [postfix/smtpd] connect from rrcs-67-52-138-42.west.biz.rr.com[67.52.138.42]",
  "Mar 14 01:05:38 [postfix/smtpd] disconnect from rrcs-67-52-138-42.west.biz.rr.com[67.52.138.42] helo=1 auth=0/1 quit=1 commands=2/3",
  "Mar 14 01:08:50 [postfix/smtpd] initializing the server-side TLS engine",
  "Mar 14 01:08:51 [postfix/smtpd] warning: hostname suzunui.co.jp does not resolve to address 210.239.210.80: Name or service not known",
  "Mar 14 01:08:51 [postfix/smtpd] connect from unknown[210.239.210.80]",
  "Mar 14 01:08:52 [postfix/smtpd] disconnect from unknown[210.239.210.80] helo=1 auth=0/1 quit=1 commands=2/3",
  "Mar 14 01:09:11 [postfix/smtp] 6BA6D15A09C1: to=<hectolitre@cgdfer.com>, relay=cgdfer.com[216.126.239.107]:25, delay=83095, delays=83095/0.02/0.33/0, dsn=4.0.0, status=deferred (host cgdfer.com[216.126.239.107] refused to talk to me: 421 tachypo.com out of connection slots)",
  "Mar 14 01:09:11 [postfix/smtp] 149EE15A0A16: to=<cori@diabert.com>, relay=diabert.com[216.126.239.120]:25, delay=23994, delays=23993/0.04/0.33/0, dsn=4.0.0, status=deferred (host diabert.com[216.126.239.120] refused to talk to me: 421 tachypo.com out of connection slots)",
  "Mar 14 01:09:17 [postfix/smtp] 837AF15A09FF: to=<radim.brixi@memos.cz>, relay=mail.memos.cz[95.80.208.204]:25, delay=323, delays=317/0.08/0.02/6.2, dsn=5.7.1, status=bounced (host mail.memos.cz[95.80.208.204] said: 550 5.7.1 Message rejected (no valid recipients). (in reply to end of DATA command))",
  "Mar 14 01:09:18 [postfix/smtp] B262415A0A15: to=<superclaim@tachypo.com>, relay=tachypo.com[181.174.187.23]:25, delay=0.33, delays=0.06/0/0.26/0, dsn=4.0.0, status=deferred (host tachypo.com[181.174.187.23] refused to talk to me: 421 tachypo.com out of connection slots)"
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
    var id = mockData[i].slice(4,5).join(' ');
    if(id !== "connect" && id !== "disconnect" && id !== "warning:" && id !== "NOQUEUE:" && id !== "lost" && id !== "initializing"){
    var dataObject = {
      date: mockData[i].slice(0, 2).join(' '),
      time: mockData[i].slice(2, 3).join(' '),
      incoming: (mockData[i].slice(3, 4).join(' ') === "[postfix/smtpd]"),
      outgoing: (mockData[i].slice(3, 4).join(' ') === "[postfix/smtp]"),
      id: id,
      details: mockData[i].slice(7).join(' '),
    }
    sortedMockData.push(dataObject);
  }}
})(mockDataArraySplit);

var emailLog = [
  "<tr><th class = 'date-cell'>Date</th><th class = 'time-cell'>Time</th><th class = 'incoming-outgoing-cell'>Incoming/Outgoing</th><th class = 'id-cell'>Id</th><th class = 'details-cell'>Details</th></tr>"
];
var incomingMailLog = [
  "<tr><th class = 'date-cell'>Date</th><th class = 'time-cell'>Time</th><th class = 'incoming-outgoing-cell'>Incoming/Outgoing</th><th class = 'id-cell'>Id</th><th class = 'details-cell'>Details</th></tr>"
];
var outgoingMailLog = [
  "<tr><th class = 'date-cell'>Date</th><th class = 'time-cell'>Time</th><th class = 'incoming-outgoing-cell'>Incoming/Outgoing</th><th class = 'id-cell'>Id</th><th class = 'details-cell'>Details</th></tr>"
];

function renderMockDataEntree(sortedMockData) {
  for (var i = 0; i < sortedMockData.length; i += 1) {
    var logEntree = "";
    if (sortedMockData[i].incoming) {
      logEntree += "<tr class = 'entree' style = background-color:#009688;>";
    } else {
      logEntree += "<tr class = 'entree' style = background-color:#e91e63;>";
    };
    // logEntree += "<p>Success: " + sortedMockData[i].success + "</p>";
    logEntree += "<td class = 'date-cell'>" + sortedMockData[i].date + "</td>";
    logEntree += "<td class = 'time-cell'>" + sortedMockData[i].time + "</td>";
    if(sortedMockData[i].incoming === true){
      logEntree += "<td class = 'incoming-outgoing-cell'>Incoming</td>";
    };
    if(sortedMockData[i].outgoing === true){
      logEntree += "<td class = 'incoming-outgoing-cell'>Outgoing</td>";
    };
    logEntree += "<td class = 'id-cell'>" + sortedMockData[i].id + "</td>";
    logEntree += "<td class = 'details-cell'>" + sortedMockData[i].details + "</td>";
    logEntree += "</tr>";
    emailLog.push(logEntree);
    if (sortedMockData[i].incoming) {
      incomingMailLog.push(logEntree);
    }
    if (sortedMockData[i].outgoing) {
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

$(".trigger-incoming").on('click', function() {
  $(".email-log-data").html(incomingMailToRender);
});

$(".trigger-outgoing").on('click', function() {
  $(".email-log-data").html(outgoingMailToRender);
});

$(".trigger-all-mail").on('click', function() {
  $(".email-log-data").html(logsToRender);
});
