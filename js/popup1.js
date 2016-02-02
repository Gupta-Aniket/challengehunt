var CHALLENGEHUNT = {}

CHALLENGEHUNT.contests = {
	HACKATHONS: 'Hackathons',
	CONTESTS: 'Contests',
	HIRING: 'Hiring',
	DATASCIENCE: 'DataScience',
};

var selectedHost= [
	{"name":"HackerEarth","host":"hackerearth.com"},
	{"name":"CodeForces","host":"codeforces.com"},
	{"name":"CftTime","host":"ctftime.org"},
	{"name":"CodeChef","host":"codechef.com"},
	{"name":"CodeJam","host":"google.com/codejam"},
	{"name":"HackerCup","host":"facebook.com/hackercup"},
	{"name":"HackerRank","host":"hackerrank.com"},
	{"name":"Kaggle","host":"kaggle.com"},
	{"name":"TopCoder","host":"topcoder.com"},
	{"name":"Spoj","host":"spoj.com"}
];

var hosts=[
	
	{"host_name": "hackerearth.com","style":"margin: 8px 8px 3px 18px;","color":"#175e7c","image":"img/hackerearth.com.png"},
	{"host_name": "codeforces.com","style":"width:67px;box-shadow: 1px 1px 5px #288bc9;","color":"#288bc9","image":"img/codeforces.com.png"},
	{"host_name": "ctftime.org","style":"width: 46px;box-shadow: 1px 1px 5px #fc0f3c;margin: 8px 8px 3px 9px;","color":"#fc0f3c","image":"img/ctftime.org.png"},
	{"host_name": "kaggle.com","style":"box-shadow: 1px 1px 5px #40bae5;margin: 8px 8px 3px 19px;","color":"#40bae5","image":"img/kaggle.com.png"},
	{"host_name": "hashcode.withgoogle.com","style":"width: 93px;box-shadow: 1px 1px 5px #4285f4;margin: 8px 5px 0px 0px;","color":"#4285f4","image":"img/hashcode_google.png"},
	{"host_name": "hackerrank.com","style":"box-shadow: 1px 1px 5px #1bb663;margin: 8px 8px 3px 19px;","color":"#1bb663","image":"img/hackerrank.com.png"},
	{"host_name": "topcoder.com","style":"width:58px;box-shadow: 1px 1px 5px #FF9800;","color":"#FF9800","image":"img/topcoder.com.png"},
	{"host_name": "codechef.com","style":"width:58px;box-shadow: 1px 1px 5px #745a46;","color":"#745a46","image":"img/codechef.com.png"},
	{"host_name": "facebook.com/hackercup","style":"width:65px;box-shadow: 1px 1px 5px #3e5d95;","color":"#3e5d95","image":"img/hackercup.jpg"},
	{"host_name": "google.com/codejam","style":"width:65px;box-shadow: 1px 1px 5px #161213;","color":"#161213","image":"img/codejam.png"},
	{"host_name": "spoj.com","style":"box-shadow: 1px 1px 5px #303F9F;margin: 8px 8px 3px 19px;","color":"#303F9F","image":"img/spoj.png"},
	{"host_name": "marathon24.com","style":"box-shadow: 1px 1px 5px #1a99fc;margin: 8px 8px 3px 19px;","color":"#1a99fc","image":"img/marathon24.com.png"},

];

var data= {"hiring": {"active": [{"end": "2016-02-02T17:30:00", "contest_name": "Quantiphi Java Hiring Challenge", "host_url": "http://hackerearth.com", "host_name": "hackerearth.com", "duration": "4 days", "contest_url": "https://www.hackerearth.com/quantiphi-java-hiring-challenge/"}], "upcoming": [{"contest_name": "Cube26 Python Hiring Challenge", "host_url": "http://hackerearth.com", "start": "2016-02-05T12:30:00", "host_name": "hackerearth.com", "duration": "53:00", "contest_url": "https://www.hackerearth.com/cube26-python-hiring-challenge-1/"}, {"contest_name": "Nutanix Backend Hiring Challenge", "host_url": "http://hackerearth.com", "start": "2016-02-12T12:30:00", "host_name": "hackerearth.com", "duration": "53:00", "contest_url": "https://www.hackerearth.com/nutanix-backend-hiring-challenge/"}, {"contest_name": "Gieom Hiring Challenge", "host_url": "http://hackerearth.com", "start": "2016-02-12T12:30:00", "host_name": "hackerearth.com", "duration": "53:00", "contest_url": "https://www.hackerearth.com/gieom-hiring-challenge/"}, {"contest_name": "MakeMyTrip QA Hiring Challenge", "host_url": "http://hackerearth.com", "start": "2016-02-12T12:30:00", "host_name": "hackerearth.com", "duration": "53:00", "contest_url": "https://www.hackerearth.com/makemytrip-qa-hiring-challenge/"}, {"contest_name": "Chipmonk Hiring Challenge", "host_url": "http://hackerearth.com", "start": "2016-02-19T12:30:00", "host_name": "hackerearth.com", "duration": "53:00", "contest_url": "https://www.hackerearth.com/chipmonk-hiring-challenge/"}, {"contest_name": "Accolite Java Hiring Challenge", "host_url": "http://hackerearth.com", "start": "2016-02-26T12:30:00", "host_name": "hackerearth.com", "duration": "53:00", "contest_url": "https://www.hackerearth.com/accolite-java-hiring-challenge/"}]}, "contests": {"active": [{"end": "2016-02-02T17:30:00", "contest_name": "Quantiphi Java Hiring Challenge", "host_url": "http://hackerearth.com", "host_name": "hackerearth.com", "duration": "4 days", "contest_url": "https://www.hackerearth.com/quantiphi-java-hiring-challenge/"}, {"end": "2016-02-04T17:30:00", "contest_name": "IndiaHacks: Travel and Transpo...", "host_url": "http://hackerearth.com", "host_name": "hackerearth.com", "duration": "6 days", "contest_url": "https://www.hackerearth.com/sprints/travel-and-transportation-india-hacks-2016/"}, {"end": "2016-02-04T20:06:00", "contest_name": "VMSS 7WC '16, Week 4", "host_url": "http://dmoj.ca", "host_name": "dmoj.ca", "duration": "7 days", "contest_url": "http://www.dmoj.ca/contest/vmss7wc16c4"}, {"end": "2016-02-07T19:00:00", "contest_name": "5 \u0440\u0430\u0443\u043d\u0434. SnarkNews Winter Seri...", "host_url": "http://contests.snarknews.info", "host_name": "contests.snarknews.info", "duration": "7 days", "contest_url": "http://contests.snarknews.info/index.cgi?data=snws16/schedule&menu=index&head=index&mod=snws16&class=snws16"}, {"end": "2016-02-08T18:00:00", "contest_name": "TENTATIVE Secret Santa Maratho...", "host_url": "http://topcoder.com", "host_name": "topcoder.com", "duration": "14 days", "contest_url": "https://topcoder.com/community/events/"}, {"end": "2016-02-08T23:00:00", "contest_name": "Registration", "host_url": "http://hashcode.withgoogle.com", "host_name": "hashcode.withgoogle.com", "duration": "71 days", "contest_url": "https://hashcode.withgoogle.com/overview.html"}, {"end": "2016-02-08T23:59:00", "contest_name": "Homesite Quote Conversion", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "91 days", "contest_url": "https://www.kaggle.com/c/homesite-quote-conversion"}, {"end": "2016-02-11T23:59:00", "contest_name": "Airbnb New User Bookings", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "78 days", "contest_url": "https://www.kaggle.com/c/airbnb-recruiting-new-user-bookings"}, {"end": "2016-02-11T23:59:00", "contest_name": "Airbnb Recruiting: New User Bo...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "78 days", "contest_url": "https://www.kaggle.com/c/airbnb-recruiting-new-user-bookings"}, {"end": "2016-02-13T16:00:00", "contest_name": "Sums and Products I", "host_url": "http://azspcs.net", "host_name": "azspcs.net", "duration": "91 days", "contest_url": "http://www.azspcs.net/Contest/SumsAndProducts1"}, {"end": "2016-02-13T23:59:00", "contest_name": "The Allen AI Science Challenge", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "129 days", "contest_url": "https://www.kaggle.com/c/the-allen-ai-science-challenge"}, {"end": "2016-02-15T23:59:00", "contest_name": "Prudential Life Insurance Asse...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "84 days", "contest_url": "https://www.kaggle.com/c/prudential-life-insurance-assessment"}, {"end": "2016-02-27T16:00:00", "contest_name": "Sums and Products II", "host_url": "http://azspcs.net", "host_name": "azspcs.net", "duration": "91 days", "contest_url": "http://www.azspcs.net/Contest/SumsAndProducts2"}, {"end": "2016-02-29T23:59:00", "contest_name": "Telstra Network Disruptions", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "96 days", "contest_url": "https://www.kaggle.com/c/telstra-recruiting-network"}, {"end": "2016-02-29T23:59:00", "contest_name": "Telstra Recruiting: Network Di...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "96 days", "contest_url": "https://www.kaggle.com/c/telstra-recruiting-network"}, {"end": "2016-03-01T06:30:00", "contest_name": "Open Source", "host_url": "http://hackerearth.com", "host_name": "hackerearth.com", "duration": "32 days", "contest_url": "https://www.hackerearth.com/sprints/open-source-india-hacks-2016/"}, {"end": "2016-03-14T23:59:00", "contest_name": "Second Annual Data Science Bowl", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "91 days", "contest_url": "https://www.kaggle.com/c/second-annual-data-science-bowl"}, {"end": "2016-03-29T23:59:00", "contest_name": "Hillary Clinton's Emails", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "200 days", "contest_url": "https://www.kaggle.com/c/hillary-clinton-emails"}, {"end": "2016-04-06T23:59:00", "contest_name": "NIPS 2015 Papers", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "119 days", "contest_url": "https://www.kaggle.com/c/nips-2015-papers"}, {"end": "2016-04-12T23:59:00", "contest_name": "Yelp Restaurant Photo Classifi...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "113 days", "contest_url": "https://www.kaggle.com/c/yelp-restaurant-photo-classification"}, {"end": "2016-04-25T23:59:00", "contest_name": "Home Depot Product Search Rele...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "98 days", "contest_url": "https://www.kaggle.com/c/home-depot-product-search-relevance"}, {"end": "2016-06-06T23:59:00", "contest_name": "San Francisco Crime Classifica...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "370 days", "contest_url": "https://www.kaggle.com/c/sf-crime"}, {"end": "2016-12-31T23:59:00", "contest_name": "Digit Recognizer", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "4 years", "contest_url": "https://www.kaggle.com/c/digit-recognizer"}, {"end": "2016-12-31T23:59:00", "contest_name": "Titanic: Machine Learning from...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "4 years", "contest_url": "https://www.kaggle.com/c/titanic"}, {"end": "2016-12-31T23:59:00", "contest_name": "Facial Keypoints Detection", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "3 years", "contest_url": "https://www.kaggle.com/c/facial-keypoints-detection"}, {"end": "2016-12-31T23:59:00", "contest_name": "First Steps With Julia", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "880 days", "contest_url": "https://www.kaggle.com/c/street-view-getting-started-with-julia"}], "upcoming": [{"contest_name": "IndiaHacks- CODE-MANIA 9", "host_url": "http://hackerearth.com", "start": "2016-02-02T13:30:00", "host_name": "hackerearth.com", "duration": "04:00", "contest_url": "https://www.hackerearth.com/indiahacks-code-mania-9/"}, {"contest_name": "Code till You Die", "host_url": "http://hackerearth.com", "start": "2016-02-03T07:00:00", "host_name": "hackerearth.com", "duration": "02:00", "contest_url": "https://www.hackerearth.com/code-till-you-die/"}, {"contest_name": "CODERS - L", "host_url": "http://hackerearth.com", "start": "2016-02-03T14:30:00", "host_name": "hackerearth.com", "duration": "04:00", "contest_url": "https://www.hackerearth.com/coders-l/"}, {"contest_name": "CodeVaitam 2.0", "host_url": "http://codechef.com", "start": "2016-02-03T14:30:00", "host_name": "codechef.com", "duration": "3 days", "contest_url": "http://www.codechef.com/CDVA16"}, {"contest_name": "ICPC Preparatory Series by Tea...", "host_url": "http://codechef.com", "start": "2016-02-03T15:30:00", "host_name": "codechef.com", "duration": "05:00", "contest_url": "http://www.codechef.com/IPC15P2B"}, {"contest_name": "Code till You Die-Final Round", "host_url": "http://hackerearth.com", "start": "2016-02-04T05:30:00", "host_name": "hackerearth.com", "duration": "02:30", "contest_url": "https://www.hackerearth.com/code-till-you-die-final-round/"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-02-04T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "PICT: Code Sprint 4", "host_url": "http://hackerearth.com", "start": "2016-02-04T16:00:00", "host_name": "hackerearth.com", "duration": "02:30", "contest_url": "https://www.hackerearth.com/pict-code-sprint-4/"}, {"contest_name": "AimTech Round (Div. 1)", "host_url": "http://codeforces.com", "start": "2016-02-04T17:05:00", "host_name": "codeforces.com", "duration": "02:00", "contest_url": "http://codeforces.com/contest/623"}, {"contest_name": "AimTech Round (Div. 2)", "host_url": "http://codeforces.com", "start": "2016-02-04T17:05:00", "host_name": "codeforces.com", "duration": "02:00", "contest_url": "http://codeforces.com/contest/624"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-02-05T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "Sharif University CTF 2016", "host_url": "http://ctftime.org", "start": "2016-02-05T06:30:00", "host_name": "ctftime.org", "duration": "36:00", "contest_url": "https://ctftime.org/event/280/"}, {"contest_name": "February Challenge 2016", "host_url": "http://codechef.com", "start": "2016-02-05T09:30:00", "host_name": "codechef.com", "duration": "10 days", "contest_url": "http://www.codechef.com/FEB16"}, {"contest_name": "Cube26 Python Hiring Challenge", "host_url": "http://hackerearth.com", "start": "2016-02-05T12:30:00", "host_name": "hackerearth.com", "duration": "53:00", "contest_url": "https://www.hackerearth.com/cube26-python-hiring-challenge-1/"}, {"contest_name": "IndiaHacks- CODE-MANIA 10", "host_url": "http://hackerearth.com", "start": "2016-02-05T13:30:00", "host_name": "hackerearth.com", "duration": "04:00", "contest_url": "https://www.hackerearth.com/indiahacks-code-mania-10/"}, {"contest_name": "Quark Codejam '16", "host_url": "http://codechef.com", "start": "2016-02-06T08:30:00", "host_name": "codechef.com", "duration": "03:00", "contest_url": "http://www.codechef.com/COJA2016"}, {"contest_name": "CONTEST #6", "host_url": "http://hsin.hr/coci", "start": "2016-02-06T14:00:00", "host_name": "hsin.hr/coci", "duration": "03:00", "contest_url": "http://hsin.hr/coci/"}, {"contest_name": "Algorithms", "host_url": "http://hackerearth.com", "start": "2016-02-06T15:30:00", "host_name": "hackerearth.com", "duration": "24:00", "contest_url": "https://www.hackerearth.com/algorithms-india-hacks-2016/"}, {"contest_name": "Decathlon", "host_url": "http://codechef.com", "start": "2016-02-06T16:00:00", "host_name": "codechef.com", "duration": "15:00", "contest_url": "http://www.codechef.com/DECA2016"}, {"contest_name": "SRM 681", "host_url": "http://topcoder.com", "start": "2016-02-06T17:00:00", "host_name": "topcoder.com", "duration": "02:00", "contest_url": "https://topcoder.com/community/events/"}, {"contest_name": "Problem 546", "host_url": "http://projecteuler.net", "start": "2016-02-07T01:00:00", "host_name": "projecteuler.net", "duration": "00:00", "contest_url": "https://projecteuler.net/news"}, {"contest_name": "Some Grand Prix", "host_url": "http://opencup.ru", "start": "2016-02-07T08:00:00", "host_name": "opencup.ru", "duration": "05:00", "contest_url": "http://opencup.ru/index.cgi?data=ocg/schedule&menu=index&head=index"}, {"contest_name": "ICPC Preparatory Series by Tea...", "host_url": "http://codechef.com", "start": "2016-02-07T08:30:00", "host_name": "codechef.com", "duration": "05:00", "contest_url": "http://www.codechef.com/IPC15P2C"}, {"contest_name": "Codeforces Round #342 (Div. 2)", "host_url": "http://codeforces.com", "start": "2016-02-07T09:05:00", "host_name": "codeforces.com", "duration": "02:00", "contest_url": "http://codeforces.com/contest/625"}, {"contest_name": "\u041b\u0438\u0447\u043d\u0430\u044f \u043e\u043b\u0438\u043c\u043f\u0438\u0430\u0434\u0430 \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432 (\u0412...", "host_url": "http://neerc.ifmo.ru/school", "start": "2016-02-07T12:00:00", "host_name": "neerc.ifmo.ru/school", "duration": "05:00", "contest_url": "http://neerc.ifmo.ru/school/io/"}, {"contest_name": "BYTES", "host_url": "http://codechef.com", "start": "2016-02-07T15:30:00", "host_name": "codechef.com", "duration": "03:00", "contest_url": "http://www.codechef.com/BYTE2016"}, {"contest_name": "Epiphany 5.2", "host_url": "http://hackerearth.com", "start": "2016-02-07T16:00:00", "host_name": "hackerearth.com", "duration": "02:30", "contest_url": "https://www.hackerearth.com/epiphany-52/"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-02-08T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "7 Days of JavaScript", "host_url": "http://hackerrank.com", "start": "2016-02-08T06:30:00", "host_name": "hackerrank.com", "duration": "6 days", "contest_url": "https://www.hackerrank.com/contests/7days-javascript"}, {"contest_name": "\u041e\u0442\u043a\u0440\u044b\u0442\u0430\u044f \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u043e\u043b\u0438\u043c\u043f\u0438\u0430...", "host_url": "http://acmu.ru", "start": "2016-02-08T11:15:00", "host_name": "acmu.ru", "duration": "02:00", "contest_url": "http://acmu.ru/asp/champ/index.asp?main=stage_info&id_stage=40568"}, {"contest_name": "NITS - Game of Codes #1", "host_url": "http://hackerearth.com", "start": "2016-02-08T16:00:00", "host_name": "hackerearth.com", "duration": "03:00", "contest_url": "https://www.hackerearth.com/nits-game-of-codes-1/"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-02-09T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "DMOPC '15 February Contest", "host_url": "http://dmoj.ca", "start": "2016-02-09T17:00:00", "host_name": "dmoj.ca", "duration": "03:00", "contest_url": "http://www.dmoj.ca/contest/dmopc15c5"}, {"contest_name": "Educational Codeforces Round 7", "host_url": "http://codeforces.com", "start": "2016-02-10T15:00:00", "host_name": "codeforces.com", "duration": "02:00", "contest_url": "http://codeforces.com/contest/622"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-02-11T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "Online Qualification Round", "host_url": "http://hashcode.withgoogle.com", "start": "2016-02-11T17:30:00", "host_name": "hashcode.withgoogle.com", "duration": "04:00", "contest_url": "https://hashcode.withgoogle.com/overview.html"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-02-12T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "Nutanix Backend Hiring Challenge", "host_url": "http://hackerearth.com", "start": "2016-02-12T12:30:00", "host_name": "hackerearth.com", "duration": "53:00", "contest_url": "https://www.hackerearth.com/nutanix-backend-hiring-challenge/"}, {"contest_name": "Gieom Hiring Challenge", "host_url": "http://hackerearth.com", "start": "2016-02-12T12:30:00", "host_name": "hackerearth.com", "duration": "53:00", "contest_url": "https://www.hackerearth.com/gieom-hiring-challenge/"}, {"contest_name": "MakeMyTrip QA Hiring Challenge", "host_url": "http://hackerearth.com", "start": "2016-02-12T12:30:00", "host_name": "hackerearth.com", "duration": "53:00", "contest_url": "https://www.hackerearth.com/makemytrip-qa-hiring-challenge/"}, {"contest_name": "Unified Payments Interface Hac...", "host_url": "http://hackerearth.com", "start": "2016-02-13T04:30:00", "host_name": "hackerearth.com", "duration": "22 days", "contest_url": "https://www.hackerearth.com/sprints/unified-payments-interface-hackathon/"}, {"contest_name": "Quest 15.3", "host_url": "http://hackerearth.com", "start": "2016-02-13T14:30:00", "host_name": "hackerearth.com", "duration": "03:00", "contest_url": "https://www.hackerearth.com/quest-153-1/"}, {"contest_name": "8VC Venture Cup 2016 - Elimina...", "host_url": "http://codeforces.com", "start": "2016-02-13T17:35:00", "host_name": "codeforces.com", "duration": "02:00", "contest_url": "http://codeforces.com/contest/626"}, {"contest_name": "Problem 547", "host_url": "http://projecteuler.net", "start": "2016-02-14T04:00:00", "host_name": "projecteuler.net", "duration": "00:00", "contest_url": "https://projecteuler.net/news"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-02-14T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "Some Grand Prix", "host_url": "http://opencup.ru", "start": "2016-02-14T08:00:00", "host_name": "opencup.ru", "duration": "05:00", "contest_url": "http://opencup.ru/index.cgi?data=ocg/schedule&menu=index&head=index"}, {"contest_name": "CODExJEC 2.0", "host_url": "http://hackerearth.com", "start": "2016-02-14T14:30:00", "host_name": "hackerearth.com", "duration": "04:00", "contest_url": "https://www.hackerearth.com/codexjec-20/"}, {"contest_name": "Week of Code - 19", "host_url": "http://hackerrank.com", "start": "2016-02-15T16:00:00", "host_name": "hackerrank.com", "duration": "6 days", "contest_url": "https://www.hackerrank.com/contests/w19"}, {"contest_name": "I-CODE 2016", "host_url": "http://codechef.com", "start": "2016-02-16T12:30:00", "host_name": "codechef.com", "duration": "72:00", "contest_url": "http://www.codechef.com/ICOD2016"}, {"contest_name": "TENTATIVE Robonaut Vision Tool...", "host_url": "http://topcoder.com", "start": "2016-02-16T18:00:00", "host_name": "topcoder.com", "duration": "14 days", "contest_url": "https://topcoder.com/community/events/"}, {"contest_name": "Third Contest", "host_url": "http://usaco.org", "start": "2016-02-19T10:00:00", "host_name": "usaco.org", "duration": "4 days", "contest_url": "http://usaco.org/"}, {"contest_name": "Chipmonk Hiring Challenge", "host_url": "http://hackerearth.com", "start": "2016-02-19T12:30:00", "host_name": "hackerearth.com", "duration": "53:00", "contest_url": "https://www.hackerearth.com/chipmonk-hiring-challenge/"}, {"contest_name": "February Clash '16", "host_url": "http://hackerearth.com", "start": "2016-02-20T06:30:00", "host_name": "hackerearth.com", "duration": "24:00", "contest_url": "https://www.hackerearth.com/february-clash-16/"}, {"contest_name": "Qualification round of Eastern...", "host_url": "http://acm.timus.ru", "start": "2016-02-20T08:00:00", "host_name": "acm.timus.ru", "duration": "05:00", "contest_url": "http://acm.timus.ru/contest.aspx?id=340"}, {"contest_name": "Booking.com Hack a Holiday", "host_url": "http://hackerrank.com", "start": "2016-02-20T10:00:00", "host_name": "hackerrank.com", "duration": "24:00", "contest_url": "https://www.hackerrank.com/contests/booking-hack-a-holiday"}, {"contest_name": "Internetwache CTF 2016", "host_url": "http://ctftime.org", "start": "2016-02-20T11:00:00", "host_name": "ctftime.org", "duration": "36:00", "contest_url": "https://ctftime.org/event/290/"}, {"contest_name": "\u041b\u0438\u0447\u043d\u0430\u044f \u043e\u043b\u0438\u043c\u043f\u0438\u0430\u0434\u0430 \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432", "host_url": "http://neerc.ifmo.ru/school", "start": "2016-02-20T13:00:00", "host_name": "neerc.ifmo.ru/school", "duration": "05:00", "contest_url": "http://neerc.ifmo.ru/school/io/"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-02-21T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "Problem 548", "host_url": "http://projecteuler.net", "start": "2016-02-21T07:00:00", "host_name": "projecteuler.net", "duration": "00:00", "contest_url": "https://projecteuler.net/news"}, {"contest_name": "Some Grand Prix", "host_url": "http://opencup.ru", "start": "2016-02-21T08:00:00", "host_name": "opencup.ru", "duration": "05:00", "contest_url": "http://opencup.ru/index.cgi?data=ocg/schedule&menu=index&head=index"}, {"contest_name": "101 Hack Feb 2016", "host_url": "http://hackerrank.com", "start": "2016-02-21T17:00:00", "host_name": "hackerrank.com", "duration": "02:00", "contest_url": "https://www.hackerrank.com/contests/101hack34"}, {"contest_name": "TENTATIVE Demographic Membersh...", "host_url": "http://topcoder.com", "start": "2016-02-22T18:00:00", "host_name": "topcoder.com", "duration": "14 days", "contest_url": "https://topcoder.com/community/events/"}, {"contest_name": "SRM 682", "host_url": "http://topcoder.com", "start": "2016-02-23T02:00:00", "host_name": "topcoder.com", "duration": "02:00", "contest_url": "https://topcoder.com/community/events/"}, {"contest_name": "Accolite Java Hiring Challenge", "host_url": "http://hackerearth.com", "start": "2016-02-26T12:30:00", "host_name": "hackerearth.com", "duration": "53:00", "contest_url": "https://www.hackerearth.com/accolite-java-hiring-challenge/"}, {"contest_name": "SSCTF 2016 Quals", "host_url": "http://ctftime.org", "start": "2016-02-27T00:00:00", "host_name": "ctftime.org", "duration": "48:00", "contest_url": "https://ctftime.org/event/282/"}, {"contest_name": "Juniper Coding Challenge 2016", "host_url": "http://hackerrank.com", "start": "2016-02-27T13:30:00", "host_name": "hackerrank.com", "duration": "04:00", "contest_url": "https://www.hackerrank.com/contests/juniper-codesprint"}, {"contest_name": "Coders Strike Back", "host_url": "http://codingame.com", "start": "2016-02-27T17:00:00", "host_name": "codingame.com", "duration": "00:00", "contest_url": "http://www.codingame.com/challenge/coders-strike-back"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-02-28T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "The Qualifying Round", "host_url": "http://deadline24.pl", "start": "2016-02-28T08:00:00", "host_name": "deadline24.pl", "duration": "00:00", "contest_url": "https://www.deadline24.pl/contest/competition-stages/"}, {"contest_name": "8VC Venture Cup 2016 - Final R...", "host_url": "http://codeforces.com", "start": "2016-02-28T18:05:00", "host_name": "codeforces.com", "duration": "02:00", "contest_url": "http://codeforces.com/contest/627"}, {"contest_name": "SRM 683", "host_url": "http://topcoder.com", "start": "2016-02-29T12:00:00", "host_name": "topcoder.com", "duration": "02:00", "contest_url": "https://topcoder.com/community/events/"}, {"contest_name": "HourRank 6", "host_url": "http://hackerrank.com", "start": "2016-03-01T16:30:00", "host_name": "hackerrank.com", "duration": "01:00", "contest_url": "https://www.hackerrank.com/contests/hourrank-6"}, {"contest_name": "Onsite Finals", "host_url": "http://facebook.com/hackercup", "start": "2016-03-03T08:00:00", "host_name": "facebook.com/hackercup", "duration": "00:00", "contest_url": "https://www.facebook.com/hackercup"}, {"contest_name": "Boston Key Party CTF 2016", "host_url": "http://ctftime.org", "start": "2016-03-04T22:00:00", "host_name": "ctftime.org", "duration": "48:00", "contest_url": "https://ctftime.org/event/252/"}, {"contest_name": "CONTEST #7", "host_url": "http://hsin.hr/coci", "start": "2016-03-05T14:00:00", "host_name": "hsin.hr/coci", "duration": "03:00", "contest_url": "http://hsin.hr/coci/"}, {"contest_name": "Highline", "host_url": "http://azspcs.net", "start": "2016-03-05T15:00:00", "host_name": "azspcs.net", "duration": "90 days", "contest_url": "http://www.azspcs.net/"}, {"contest_name": "\u0417\u0430\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u044d\u0442\u0430\u043f", "host_url": "http://olympiads.ru", "start": "2016-03-05T21:00:00", "host_name": "olympiads.ru", "duration": "72:00", "contest_url": "https://olympiads.ru/zaoch/"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-03-06T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "TENTATIVE Electronic Parts Cla...", "host_url": "http://topcoder.com", "start": "2016-03-07T18:00:00", "host_name": "topcoder.com", "duration": "13 days", "contest_url": "https://topcoder.com/community/events/"}, {"contest_name": "Registration", "host_url": "http://google.com/codejam", "start": "2016-03-08T19:00:00", "host_name": "google.com/codejam", "duration": "32 days", "contest_url": "http://code.google.com/codejam/schedule.html"}, {"contest_name": "S\u00e9cu'RT 2016", "host_url": "http://ctftime.org", "start": "2016-03-10T13:30:00", "host_name": "ctftime.org", "duration": "09:00", "contest_url": "https://ctftime.org/event/291/"}, {"contest_name": "Battle Of Bots #3", "host_url": "http://hackerearth.com", "start": "2016-03-11T14:30:00", "host_name": "hackerearth.com", "duration": "6 days", "contest_url": "https://www.hackerearth.com/battle-of-bots-3/"}, {"contest_name": "0CTF 2016 Quals", "host_url": "http://ctftime.org", "start": "2016-03-12T00:00:00", "host_name": "ctftime.org", "duration": "48:00", "contest_url": "https://ctftime.org/event/262/"}, {"contest_name": "II AdaByron Contest in Madrid", "host_url": "http://uva.onlinejudge.org", "start": "2016-03-12T09:00:00", "host_name": "uva.onlinejudge.org", "duration": "05:00", "contest_url": "http://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=12&page=show_contest&contest=362"}, {"contest_name": "\u041b\u0438\u0447\u043d\u0430\u044f \u043e\u043b\u0438\u043c\u043f\u0438\u0430\u0434\u0430 \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432", "host_url": "http://neerc.ifmo.ru/school", "start": "2016-03-12T11:00:00", "host_name": "neerc.ifmo.ru/school", "duration": "05:00", "contest_url": "http://neerc.ifmo.ru/school/io/"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-03-13T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-03-14T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-03-15T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-03-17T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430...", "host_url": "http://dl.gsu.by", "start": "2016-03-18T06:00:00", "host_name": "dl.gsu.by", "duration": "05:00", "contest_url": "http://dl.gsu.by/LC.jsp?Type=-1&lng=ru"}, {"contest_name": "Insomni'hack 2016", "host_url": "http://ctftime.org", "start": "2016-03-18T17:00:00", "host_name": "ctftime.org", "duration": "10:00", "contest_url": "https://ctftime.org/event/283/"}, {"contest_name": "BCTF 2016", "host_url": "http://ctftime.org", "start": "2016-03-19T02:00:00", "host_name": "ctftime.org", "duration": "48:00", "contest_url": "https://ctftime.org/event/264/"}, {"contest_name": "Final Round", "host_url": "http://hashcode.withgoogle.com", "start": "2016-03-19T08:30:00", "host_name": "hashcode.withgoogle.com", "duration": "12:00", "contest_url": "https://hashcode.withgoogle.com/overview.html"}, {"contest_name": "VolgaCTF 2016 Quals", "host_url": "http://ctftime.org", "start": "2016-03-25T15:00:00", "host_name": "ctftime.org", "duration": "48:00", "contest_url": "https://ctftime.org/event/279/"}, {"contest_name": "Pwn2Win CTF 2016", "host_url": "http://ctftime.org", "start": "2016-03-25T16:37:00", "host_name": "ctftime.org", "duration": "48:00", "contest_url": "https://ctftime.org/event/281/"}, {"contest_name": "\u041b\u0438\u0447\u043d\u0430\u044f \u043e\u043b\u0438\u043c\u043f\u0438\u0430\u0434\u0430 \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432 (\u041f...", "host_url": "http://neerc.ifmo.ru/school", "start": "2016-03-27T13:00:00", "host_name": "neerc.ifmo.ru/school", "duration": "05:00", "contest_url": "http://neerc.ifmo.ru/school/io/"}, {"contest_name": "US Open", "host_url": "http://usaco.org", "start": "2016-04-01T10:00:00", "host_name": "usaco.org", "duration": "4 days", "contest_url": "http://usaco.org/"}, {"contest_name": "Nuit du Hack CTF Quals 2016", "host_url": "http://ctftime.org", "start": "2016-04-01T21:59:00", "host_name": "ctftime.org", "duration": "24:00", "contest_url": "https://ctftime.org/event/284/"}, {"contest_name": "CROATIAN OLYMPIAD IN INFORMATICS", "host_url": "http://hsin.hr/coci", "start": "2016-04-02T14:00:00", "host_name": "hsin.hr/coci", "duration": "03:00", "contest_url": "http://hsin.hr/coci/"}, {"contest_name": "Sthack 2016", "host_url": "http://ctftime.org", "start": "2016-04-08T21:00:00", "host_name": "ctftime.org", "duration": "12:00", "contest_url": "https://ctftime.org/event/292/"}, {"contest_name": "The Finals", "host_url": "http://deadline24.pl", "start": "2016-04-08T23:00:00", "host_name": "deadline24.pl", "duration": "00:00", "contest_url": "https://www.deadline24.pl/contest/competition-stages/"}, {"contest_name": "Qualification Round", "host_url": "http://google.com/codejam", "start": "2016-04-08T23:00:00", "host_name": "google.com/codejam", "duration": "27:00", "contest_url": "http://code.google.com/codejam/schedule.html"}, {"contest_name": "SSCTF 2016 Final", "host_url": "http://ctftime.org", "start": "2016-04-09T00:00:00", "host_name": "ctftime.org", "duration": "36:00", "contest_url": "https://ctftime.org/event/289/"}, {"contest_name": "BCTF Finals 2016", "host_url": "http://ctftime.org", "start": "2016-04-09T02:00:00", "host_name": "ctftime.org", "duration": "31:00", "contest_url": "https://ctftime.org/event/265/"}, {"contest_name": "RuCTF Finals 2016", "host_url": "http://ctftime.org", "start": "2016-04-14T09:00:00", "host_name": "ctftime.org", "duration": "4 days", "contest_url": "https://ctftime.org/event/253/"}, {"contest_name": "Online Round 1: Sub-Round A", "host_url": "http://google.com/codejam", "start": "2016-04-16T01:00:00", "host_name": "google.com/codejam", "duration": "02:30", "contest_url": "http://code.google.com/codejam/schedule.html"}, {"contest_name": "BlazeCTF 2016", "host_url": "http://ctftime.org", "start": "2016-04-20T04:20:00", "host_name": "ctftime.org", "duration": "4 days", "contest_url": "https://ctftime.org/event/276/"}, {"contest_name": "0CTF 2016 Finals", "host_url": "http://ctftime.org", "start": "2016-04-23T00:00:00", "host_name": "ctftime.org", "duration": "34:00", "contest_url": "https://ctftime.org/event/263/"}, {"contest_name": "Online Round 1: Sub-Round B", "host_url": "http://google.com/codejam", "start": "2016-04-30T16:00:00", "host_name": "google.com/codejam", "duration": "02:30", "contest_url": "http://code.google.com/codejam/schedule.html"}, {"contest_name": "Online Round 1: Sub-Round C", "host_url": "http://google.com/codejam", "start": "2016-05-08T09:00:00", "host_name": "google.com/codejam", "duration": "02:30", "contest_url": "http://code.google.com/codejam/schedule.html"}, {"contest_name": "ACM-ICPC World Finals. Thailand", "host_url": "http://icpc.baylor.edu", "start": "2016-05-15T00:00:00", "host_name": "icpc.baylor.edu", "duration": "5 days", "contest_url": "https://icpc.baylor.edu/worldfinals/schedule"}, {"contest_name": "Online Round 2", "host_url": "http://google.com/codejam", "start": "2016-05-28T14:00:00", "host_name": "google.com/codejam", "duration": "02:30", "contest_url": "http://code.google.com/codejam/schedule.html"}, {"contest_name": "Distributed Code Jam Online Ro...", "host_url": "http://google.com/codejam", "start": "2016-05-29T14:00:00", "host_name": "google.com/codejam", "duration": "03:00", "contest_url": "http://code.google.com/codejam/schedule.html"}, {"contest_name": "Online Round 3", "host_url": "http://google.com/codejam", "start": "2016-06-11T14:00:00", "host_name": "google.com/codejam", "duration": "02:30", "contest_url": "http://code.google.com/codejam/schedule.html"}, {"contest_name": "Distributed Code Jam Online Ro...", "host_url": "http://google.com/codejam", "start": "2016-06-12T14:00:00", "host_name": "google.com/codejam", "duration": "03:00", "contest_url": "http://code.google.com/codejam/schedule.html"}, {"contest_name": "IPSC 2016", "host_url": "http://ipsc.ksp.sk", "start": "2016-06-18T11:00:00", "host_name": "ipsc.ksp.sk", "duration": "05:00", "contest_url": "http://ipsc.ksp.sk/"}, {"contest_name": "Onsite Finals", "host_url": "http://google.com/codejam", "start": "2016-08-05T16:30:00", "host_name": "google.com/codejam", "duration": "04:00", "contest_url": "http://code.google.com/codejam/schedule.html"}, {"contest_name": "Distributed Code Jam Onsite Fi...", "host_url": "http://google.com/codejam", "start": "2016-08-06T16:30:00", "host_name": "google.com/codejam", "duration": "04:00", "contest_url": "http://code.google.com/codejam/schedule.html"}, {"contest_name": "IOI'16 in Kazan, Russia", "host_url": "http://usaco.org", "start": "2016-08-12T10:00:00", "host_name": "usaco.org", "duration": "8 days", "contest_url": "http://usaco.org/"}]}, "hackathons": {"active": [], "upcoming": [{"contest_name": "HackYSU", "end_date": "2016-02-7", "host_url": "https://www.facebook.com/hackysu", "host_name": "Youngstown University", "duration": "", "contest_url": "http://hackysu.com/", "start_date": "2016-02-5", "location": "Youngstown, OH, United States"}, {"contest_name": "HackCWRU", "end_date": "2016-02-14", "host_url": "https://www.facebook.com/HackCWRU/", "host_name": "Case Western Reserve University", "duration": "", "contest_url": "http://hack.cwru.edu/", "start_date": "2016-02-12", "location": "Cleveland, OH, United States"}, {"contest_name": "TreeHacks", "end_date": "2016-02-14", "host_url": "https://www.facebook.com/treehacks", "host_name": "Stanford University", "duration": "", "contest_url": "https://www.treehacks.com", "start_date": "2016-02-12", "location": "Stanford, CA, United States"}, {"contest_name": "SteelHacks", "end_date": "2016-02-21", "host_url": "https://www.facebook.com/steelhacks", "host_name": "University of Pittsburgh", "duration": "", "contest_url": "http://steelhacks.com/", "start_date": "2016-02-19", "location": "Pittsburgh, PA, United States"}, {"contest_name": "HackISU", "end_date": "2016-02-21", "host_url": "https://www.facebook.com/HackISU", "host_name": "Iowa State University", "duration": "", "contest_url": "http://hackisu.com/", "start_date": "2016-02-19", "location": "Ames, IA, United States"}, {"contest_name": "MHacks 7", "end_date": "2016-02-21", "host_url": "https://www.facebook.com/MHacksHackathon/", "host_name": "University of Michigan", "duration": "", "contest_url": "http://mhacks.org/", "start_date": "2016-02-19", "location": "Ann Arbor, MI, United States"}, {"contest_name": "Hacktech", "end_date": "2016-02-28", "host_url": "https://www.facebook.com/thehacktech/", "host_name": "California Institute of Technology", "duration": "", "contest_url": "http://hacktech.io/", "start_date": "2016-02-26", "location": "Pasadena, CA, United States"}, {"contest_name": "LAUNCH Hackathon", "end_date": "2016-02-28", "host_url": "https://www.facebook.com/launch.is", "host_name": "LAUNCH", "duration": "", "contest_url": "http://www.launchhackathon.com/", "start_date": "2016-02-26", "location": "San Francisco, CA, United States"}, {"contest_name": "SpartaHack", "end_date": "2016-02-28", "host_url": "https://www.facebook.com/spartahackmsu", "host_name": "Michigan State University", "duration": "", "contest_url": "https://www.spartahack.com/", "start_date": "2016-02-26", "location": "East Lansing, MI, United States"}, {"contest_name": "HackLondon", "end_date": "2016-02-28", "host_url": "https://www.facebook.com/hacklondonuk", "host_name": "King's College London and University College London", "duration": "", "contest_url": "https://hacklondon.org", "start_date": "2016-02-27", "location": "London, United Kingdom"}, {"contest_name": "HackTCNJ", "end_date": "2016-02-28", "host_url": "", "host_name": "The College of New Jersey / TCNJ ACM", "duration": "", "contest_url": "http://hacktcnj.com/", "start_date": "2016-02-27", "location": "Ewing, NJ, United States"}, {"contest_name": "Hack the Brain", "end_date": "2016-2-5", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://www.bulldoghacks.org/", "start_date": "2016-2-5", "location": "New Haven, CT"}, {"contest_name": "Hack the Left", "end_date": "2016-2-5", "host_url": "", "host_name": "", "duration": "", "contest_url": "https://www.facebook.com/events/205927149755389", "start_date": "2016-2-5", "location": "San Francisco, CA"}, {"contest_name": "HackFSU", "end_date": "2016-2-5", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://hackfsu.com/", "start_date": "2016-2-5", "location": "Tallahassee, FL"}, {"contest_name": "HackYSU", "end_date": "2016-2-5", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://hackysu.com/", "start_date": "2016-2-5", "location": "Youngstown, OH"}, {"contest_name": "Scotiabank Hack IT: Debt Challenge", "end_date": "2016-2-5", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://www.scotiabankhackit.com/", "start_date": "2016-2-5", "location": "Toronto, Canada"}, {"contest_name": "SotonHack", "end_date": "2016-2-5", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://hacka.typeform.com/to/t5o4r5", "start_date": "2016-2-5", "location": "Southampton, UK"}, {"contest_name": "Hack@Brown", "end_date": "2016-2-6", "host_url": "", "host_name": "", "duration": "", "contest_url": "https://2016.hackatbrown.org/", "start_date": "2016-2-6", "location": "Providence, RI"}, {"contest_name": "Hack@Smith", "end_date": "2016-2-6", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://hackatsmith.org/", "start_date": "2016-2-6", "location": "Northampton, MA"}, {"contest_name": "Hackpoly", "end_date": "2016-2-6", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://www.hackpoly.com/", "start_date": "2016-2-6", "location": "Pomona, CA"}, {"contest_name": "HackTJ", "end_date": "2016-2-6", "host_url": "", "host_name": "", "duration": "", "contest_url": "https://hacktj.org/", "start_date": "2016-2-6", "location": "Alexandria, VA"}, {"contest_name": "Venture", "end_date": "2016-2-6", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://venture.leangap.org/", "start_date": "2016-2-6", "location": "Cambridge, MA"}, {"contest_name": "TreeHacks", "end_date": "2016-2-12", "host_url": "", "host_name": "", "duration": "", "contest_url": "https://www.treehacks.com/", "start_date": "2016-2-12", "location": "Stanford, CA"}, {"contest_name": "Winter WonderHack", "end_date": "2016-2-12", "host_url": "", "host_name": "", "duration": "", "contest_url": "https://wwhack.org/", "start_date": "2016-2-12", "location": "Houghton, Michigan"}, {"contest_name": "MakeMIT", "end_date": "2016-2-2016-2-12", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://makemit.org/", "start_date": "2016-2-13", "location": "Cambridge, MA"}, {"contest_name": "HackIllinois", "end_date": "2016-2-19", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://www.hackillinois.org/", "start_date": "2016-2-19", "location": "Champaign, IL"}, {"contest_name": "HackISU", "end_date": "2016-2-19", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://www.hackisu.com/", "start_date": "2016-2-19", "location": "Ames, IA"}, {"contest_name": "MHacks 7", "end_date": "2016-2-19", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://mhacks.org/", "start_date": "2016-2-19", "location": "Ann Arbor, MI"}, {"contest_name": "NFL Hackathon", "end_date": "2016-2-20", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://nflhackathon.com/", "start_date": "2016-2-20", "location": "San Francisco, CA"}, {"contest_name": "OHacks", "end_date": "2016-2-2016-2-20", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://www.ohacks.co/", "start_date": "2016-2-20", "location": "Oakland, CA"}, {"contest_name": "T9Hacks", "end_date": "2016-2-20", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://t9hacks.org/", "start_date": "2016-2-20", "location": "Boulder, CO"}, {"contest_name": "UHack", "end_date": "2016-2-20", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://coe.miami.edu/uhack2015/", "start_date": "2016-2-20", "location": "Miami, FL"}, {"contest_name": "Hacktech", "end_date": "2016-2-26", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://hacktech.io/", "start_date": "2016-2-26", "location": "Pasadena, CA"}, {"contest_name": "SpartaHack 2016", "end_date": "2016-2-26", "host_url": "", "host_name": "", "duration": "", "contest_url": "https://spartahack.com/", "start_date": "2016-2-26", "location": "East Lansing, MI"}, {"contest_name": "HackLondon", "end_date": "2016-2-27", "host_url": "", "host_name": "", "duration": "", "contest_url": "https://hacklondon.org/", "start_date": "2016-2-27", "location": "London, UK"}, {"contest_name": "SIX Hackathon", "end_date": "2016-3-4", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://www.six-group.com/about/en/site/hackathon.html", "start_date": "2016-3-4", "location": "London, UK"}, {"contest_name": "SIX Hackathon", "end_date": "2016-3-4", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://www.six-group.com/about/en/site/hackathon.html", "start_date": "2016-3-4", "location": "Zurich, Switzerland"}, {"contest_name": "BrickHack", "end_date": "2016-3-5", "host_url": "", "host_name": "", "duration": "", "contest_url": "https://brickhack.io/", "start_date": "2016-3-5", "location": "Rochester, NY"}, {"contest_name": "START Hack", "end_date": "2016-3-11", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://starthack.ch/", "start_date": "2016-3-11", "location": "St. Gallen, Switzerland"}, {"contest_name": "WearHacks Waterloo", "end_date": "2016-3-18", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://waterloo.wearhacks.com/", "start_date": "2016-3-18", "location": "Waterloo, Canada"}, {"contest_name": "def hacks()", "end_date": "2016-3-19", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://defhacks.xyz", "start_date": "2016-3-19", "location": "New York, NY"}, {"contest_name": "Makerthon Melbourne", "end_date": "2016-3-19", "host_url": "", "host_name": "", "duration": "", "contest_url": "https://makerthonMelbourne.com/", "start_date": "2016-3-19", "location": "Melbourne, VIC, Australia"}, {"contest_name": "HackBCA", "end_date": "2016-4-2", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://hackbca.com", "start_date": "2016-4-2", "location": "Hackensack, NJ"}, {"contest_name": "PantherHacks", "end_date": "2016-4-2016-4-2", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://pantherhacks.org/", "start_date": "2016-4-2", "location": "Milwaukee, WI"}, {"contest_name": "HackDFW", "end_date": "2016-4-16", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://hackdfw.com/", "start_date": "2016-4-16", "location": "Dallas, TX"}, {"contest_name": "VR Hackathon", "end_date": "2016-4-22", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://vrhackathon.com/seattle.html", "start_date": "2016-4-22", "location": "Seattle, WA"}, {"contest_name": "Koding's Global Virtual Hackathon 2016", "end_date": "2016-02-21", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://www.hackathonwatch.com/h/koding-s-global-virtual-hackathon-2015", "start_date": "2016-02-20", "location": " Worldwide"}, {"contest_name": "Hack4fun Le\u00f3n", "end_date": "2016-02-28", "host_url": "", "host_name": "", "duration": "", "contest_url": "http://www.hackathonwatch.com/h/hack4fun-leon", "start_date": "2016-02-27", "location": " Le\u00f3n Le\u00f3n Spain"}]}, "ds_q": {"active": [{"end": "2016-02-08T23:59:00", "contest_name": "Homesite Quote Conversion", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "91 days", "contest_url": "https://www.kaggle.com/c/homesite-quote-conversion"}, {"end": "2016-02-11T23:59:00", "contest_name": "Airbnb New User Bookings", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "78 days", "contest_url": "https://www.kaggle.com/c/airbnb-recruiting-new-user-bookings"}, {"end": "2016-02-11T23:59:00", "contest_name": "Airbnb Recruiting: New User Bo...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "78 days", "contest_url": "https://www.kaggle.com/c/airbnb-recruiting-new-user-bookings"}, {"end": "2016-02-13T23:59:00", "contest_name": "The Allen AI Science Challenge", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "129 days", "contest_url": "https://www.kaggle.com/c/the-allen-ai-science-challenge"}, {"end": "2016-02-15T23:59:00", "contest_name": "Prudential Life Insurance Asse...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "84 days", "contest_url": "https://www.kaggle.com/c/prudential-life-insurance-assessment"}, {"end": "2016-02-29T23:59:00", "contest_name": "Telstra Network Disruptions", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "96 days", "contest_url": "https://www.kaggle.com/c/telstra-recruiting-network"}, {"end": "2016-02-29T23:59:00", "contest_name": "Telstra Recruiting: Network Di...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "96 days", "contest_url": "https://www.kaggle.com/c/telstra-recruiting-network"}, {"end": "2016-03-14T23:59:00", "contest_name": "Second Annual Data Science Bowl", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "91 days", "contest_url": "https://www.kaggle.com/c/second-annual-data-science-bowl"}, {"end": "2016-03-29T23:59:00", "contest_name": "Hillary Clinton's Emails", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "200 days", "contest_url": "https://www.kaggle.com/c/hillary-clinton-emails"}, {"end": "2016-04-06T23:59:00", "contest_name": "NIPS 2015 Papers", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "119 days", "contest_url": "https://www.kaggle.com/c/nips-2015-papers"}, {"end": "2016-04-12T23:59:00", "contest_name": "Yelp Restaurant Photo Classifi...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "113 days", "contest_url": "https://www.kaggle.com/c/yelp-restaurant-photo-classification"}, {"end": "2016-04-25T23:59:00", "contest_name": "Home Depot Product Search Rele...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "98 days", "contest_url": "https://www.kaggle.com/c/home-depot-product-search-relevance"}, {"end": "2016-06-06T23:59:00", "contest_name": "San Francisco Crime Classifica...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "370 days", "contest_url": "https://www.kaggle.com/c/sf-crime"}, {"end": "2016-12-31T23:59:00", "contest_name": "Digit Recognizer", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "4 years", "contest_url": "https://www.kaggle.com/c/digit-recognizer"}, {"end": "2016-12-31T23:59:00", "contest_name": "Titanic: Machine Learning from...", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "4 years", "contest_url": "https://www.kaggle.com/c/titanic"}, {"end": "2016-12-31T23:59:00", "contest_name": "Facial Keypoints Detection", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "3 years", "contest_url": "https://www.kaggle.com/c/facial-keypoints-detection"}, {"end": "2016-12-31T23:59:00", "contest_name": "First Steps With Julia", "host_url": "http://kaggle.com", "host_name": "kaggle.com", "duration": "880 days", "contest_url": "https://www.kaggle.com/c/street-view-getting-started-with-julia"}], "upcoming": []}}; 

var cards = function (data, type) {

	var currentTime = new Date();

	var activeCategories = data['active'];
	var upcomingCategories = data['upcoming'];

	var activeContainer=('#'+type+"_Active");
	var upcomingContainer=('#'+type+"_Upcoming");

	for(var i=0; i < activeCategories.length ; i++){

		var object = activeCategories[i];
		var contest_name = object['contest_name'];
		var contest_url = object['contest_url']; 
		var host_url = object['host_url']; 
		var host_name = object['host_name'];
		var duration = object['duration']; 

		if(type!="Hackathons"){

			var a=0;
			for(var k=0;k<selectedHost.length;k++){

				if(host_name==selectedHost[k]['host']){

					a=1;
					break;
				}
			}
			if(a==0){

				continue;
			}
			a=0;
		}
		
		if(type=="Hackathons"){

			var val1 = object['start_date'];
			var val2 = object['end_date'];	

			var startdate= val1.split("-");
			var enddate= val2.split("-");

			var startDate = new Date(parseInt(startdate[0]), parseInt(startdate[1]) - 1, parseInt(startdate[2]));
			var endDate = new Date(parseInt(enddate[0]), parseInt(enddate[1]) - 1, parseInt(enddate[2]));	

			var duration= (parseInt(endDate - startDate)/(1000*60*60));
			duration= (duration).toString() + ":00";
			
			var diff = endDate - currentTime;
			var durationInMs = parseInt(endDate - startDate);
			var timeLeft = diff / durationInMs;
			var progress = Math.floor((1-timeLeft)*100);
		}
		else{

			var val1 = object['end'].split('T')[0];
			var val2 = object['end'].split('T')[1];
			var date= val1.split("-");
			var time= val2.split(":");
			var d1 = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]), parseInt(time[0]), parseInt(time[1]), parseInt(time[2]), 0); 
			var diff = d1 - currentTime;

			var dur1=duration;
			var a= dur1.split(":");
			var b= dur1.split(" ");

			if(b.length==2){

				if(b[1]=="days"){

					var dur2=parseInt(duration)*24;
				}
				if(b[1]=="years"){

					var dur2=parseInt(duration)*365*24;
				}
			}
			if(a.length==2){

				var dur2=parseInt(a[0]);
			}

			var durationInMs = dur2*60*60*1000; // duration in milliseconds
			var timeLeft = diff / durationInMs;
			var progress = Math.floor((1-timeLeft)*100);
		}
		
		var host_color="";
		var host_style="";
		var host_image="";

		for(var j=0;j<hosts.length;j++){

			if(hosts[j]['host_name'] == host_name){

				host_color=hosts[j]['color'];
				host_style=hosts[j]['style'];	
				host_image=hosts[j]['image'];	
			}
		}

		if(host_color.length ==0){

			host_color="#292929";
			host_style="box-shadow: 1px 1px 5px #292929;margin: 8px 8px 3px 19px;";
			host_image="img/default.jpg";		
		}
		
		$('' + activeContainer).append(
		  $('<div/>',{
			class: 'card',
		  }).append(
				$('<div/>', {
					class: 'cardHeader',
			  }).append(
			  	$('<div/>', {
			  		class: 'titleBlock',	
			  	}).append(
			  		$('<div/>', {
			  			class: 'cardTitle',
			  			'style': ''+host_color,	
			  			'text': ''+contest_name
			  		})
			  	)
			  	.append(
			  		$('<img>', {
			  			class: 'cardOrganiserPic',
			  			style: ''+host_style,
			  			'src': ''+host_image,
			  			'alt':''+host_name	
			  		})
			  	)		
			  ).append(
			  	$('<div/>', {
			  		class: 'cardOrganiser',
			  		text: ''+host_name		
			  	})
			  ).append(
			  	$('<div/>', {
			  		class: 'cardDate',	
			  	}).append(
			  		$('<div/>', {

			  			class: 'timeTile',	
			  		}).append(
			  			$('<div/>', {

			  				class: 'durationTile',	
			  			}).append(
			  				$('<i/>', {

				  				class: 'fa fa-hourglass-half durationIcon',	
				  			})
			  			).append(
			  				$('<div/>', {

				  				class: 'durationLabel',
				  				'text': duration, 	
				  			})
			  			)
			  		).append(
			  			$('<div/>', {

			  				class: 'timeStamp',	
			  			}).append(
			  				$('<i/>', {

				  				class: 'fa fa-clock-o timeIcon',	
				  			})
			  			).append(
			  				$('<div/>', {

				  				class: 'time',
				  				'text': ''+val1+' '+val2, 	
				  			})
			  			)
			  		)
			  	).append(
			  		$('<div/>', {

			  			class: 'date',	
			  		}).append(
			  			$('<div/>', {

			  				class:'dateTitle',
			  				'text':progress+'% Complete',
			  			})
			  		)
			  	).append(
			  		$('<div/>', {

			  			class: 'dateSlider',	
			  		}).append(
			  			$('<div/>', {

			  				class: 'cardprogress',
			  			}).append(
			  				$('<div/>', {

				  				class: 'progressCss progress',
				  				id:'myProgressbar1',
				  				'style': 'height:10px;width: 100%;'
				  			}).append(
				  				$('<div/>', {

					  				class: 'progress-bar',
					  				role: 'progressbar',
					  				'aria-valuenow': "0",
					  				'aria-valuemi':"0", 
					  				'aria-valuemax':"100",
					  				'style':'height:10px;width: '+progress+"%"+';background-color:#70B230'
					  			}).append(
					  				$('<span/>', {

						  				class: 'sr-only',
						  				'text': progress+'% Complete', 
					  				})
					  			)
					  		)
				  		).append(
				  			$('<div/>',{

				  				class:'circle',
				  			})
				  		)
			  		)
			  	)
			  )
			).append(
				$('<div/>', {
					class: 'cardFooter',
					'style': 'height:30px',
			  })
			)
		);
		
	}

	for(var i=0; i < upcomingCategories.length ; i++){

		var object = upcomingCategories[i];
		var contest_name = object['contest_name'];
		var contest_url = object['contest_url']; 
		var host_url = object['host_url']; 
		var host_name = object['host_name'];
		var duration = object['duration']; 

		if(type!="Hackathons"){

			var a=0;
			for(var k=0;k<selectedHost.length;k++){

				if(host_name==selectedHost[k]['host']){

					a=1;
					break;
				}
			}
			if(a==0){

				continue;
			}
			a=0;
		}

		var startDuration="";
		if(type=="Hackathons"){

			var val1 = object['start_date'];
			var val2 = object['end_date'];
			var startdate= val1.split("-");
			var enddate= val2.split("-");

			var startDate = new Date(parseInt(startdate[0]), parseInt(startdate[1]) - 1, parseInt(startdate[2]));
			var endDate = new Date(parseInt(enddate[0]), parseInt(enddate[1]) - 1, parseInt(enddate[2]));	

			var duration= (parseInt(endDate - startDate)/(1000*60*60));
			duration= (duration).toString() + ":00";
					
		}
		else{

			var val1 = object['start'].split('T')[0];
			var val2 = object['start'].split('T')[1];

			var date= val1.split("-");
			var time= val2.split(":");
			var d1 = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]), parseInt(time[0]), parseInt(time[1]), parseInt(time[2]), 0); 

			var diff = d1- currentTime;
			console.log(contest_name,d1,diff)
			diff_hours=(parseInt(diff)/(60*60*1000));
			diff_days=(parseInt(diff)/(24*60*60*1000));
			console.log(diff_hours,diff_days);
		}

		var host_color="";
		var host_style="";
		var host_image="";
		
		for(var j=0;j<hosts.length;j++){

			if(hosts[j]['host_name'] == host_name){

				host_color=hosts[j]['color'];
				host_style=hosts[j]['style'];	
				host_image=hosts[j]['image'];	
			}
		}

		if(host_color.length ==0){

			host_color="#292929";
			host_style="box-shadow: 1px 1px 5px #292929;margin: 8px 8px 3px 19px;";
			host_image="img/default.jpg";	
		}
		
		$('' + upcomingContainer).append(
		  $('<div/>',{
			class: 'card',
		  }).append(
				$('<div/>', {
					class: 'cardHeader',
			  }).append(
			  	$('<div/>', {
			  		class: 'titleBlock',	
			  	}).append(
			  		$('<div/>', {
			  			class: 'cardTitle',
			  			'style': ''+host_color,	
			  			'text': ''+contest_name
			  		})
			  	)
			  	.append(
			  		$('<img>', {
			  			class: 'cardOrganiserPic',
			  			style: ''+host_style,
			  			'src': ''+host_image,
			  			'alt':''+host_name	
			  		})
			  	)		
			  ).append(
			  	$('<div/>', {
			  		class: 'cardOrganiser',
			  		text: ''+host_name		
			  	})
			  ).append(
			  	$('<div/>', {
			  		class: 'cardDate',	
			  	}).append(
			  		$('<div/>', {

			  			class: 'timeTile',	
			  		}).append(
			  			$('<div/>', {

			  				class: 'durationTile',	
			  			}).append(
			  				$('<i/>', {

				  				class: 'fa fa-hourglass-half durationIcon',	
				  			})
			  			).append(
			  				$('<div/>', {

				  				class: 'durationLabel',
				  				'text': duration, 	
				  			})
			  			)
			  		).append(
			  			$('<div/>', {

			  				class: 'timeStamp',	
			  			}).append(
			  				$('<i/>', {

				  				class: 'fa fa-clock-o timeIcon',	
				  			})
			  			).append(
			  				$('<div/>', {

				  				class: 'time',
				  				'text': ''+val1+' '+val2, 	
				  			})
			  			)
			  		)
			  	).append(
			  		$('<div/>', {

			  			class: 'date',	
			  		}).append(
			  			$('<div/>', {

			  				class:'dateLabel',
			  				'text':'Begins in 2 Days',
			  			})
			  		)
			  	).append(
			  		$('<div/>', {

			  			class: 'dateSlider',	
			  		}).append(
			  			$('<div/>', {

			  				class: 'cardprogress',
			  			}).append(
			  				$('<div/>', {

				  				class: 'progressCss progress',
				  				id:'myProgressbar1',
				  				'style': 'height:10px;width: 100%;'
				  			}).append(
				  				$('<div/>', {

					  				class: 'progress-bar',
					  				role: 'progressbar',
					  				'aria-valuenow': "0",
					  				'aria-valuemi':"0", 
					  				'aria-valuemax':"100",
					  				'style':'width: 0%;height:10px;width:0%;background-color:#70B230'
					  			}).append(
					  				$('<span/>', {

						  				class: 'sr-only',
						  				'text': '45% Complete', 
					  				})
					  			)
					  		)
				  		).append(
				  			$('<div/>',{

				  				class:'circle',
				  			})
				  		)
			  		)
			  	)
			  )
			).append(
				$('<div/>', {

					class: 'cardFooter',
			  	}).append(
					$('<i/>', {

						class: 'fa fa-calendar-check-o',
						'style': 'color:#fff'
					})
			  	).append(
			  		$('<p/>', {

			  			class:'calenderTitle',
			  			'text':'Add To Calender'
			  		})
			  	)
			)
		);
		
	}	

}

var selectedHosts = function () {

	for(var i=0 ;i< selectedHost.length; i++){

		$('input[value="'+selectedHost[i]['host']+'"]').prop("checked",true);
	}

};

var challengeData = function () {
	$.ajax({
		type:'GET',
		url: 'http://testchallengehunt.appspot.com/v1/all',
		beforeSend: function () {
	    // $("#target").loadingOverlay();
		},
	    success: function (data) {

	    	challengeData = JSON.parse(data);
	    	localStorage.cache = JSON.stringify(data);
			localStorage.HACKATHONS = JSON.stringify(data['hackathons']);
			localStorage.HIRING = JSON.stringify(data['hiring']);
			localStorage.CONTESTS = JSON.stringify(data['contests']);
			localStorage.DATASCIENCE = JSON.stringify(data['ds_q']);
			contestsData = data['contests'];
			hiringData = data['hiring'];
			hackathonData = data['hackathons'];	
			datascienceData = data['ds_q'];	
			
			cards(contestsData, CHALLENGEHUNT.contests.CONTESTS);
			cards(hiringData, CHALLENGEHUNT.contests.HIRING);
			cards(hackathonData, CHALLENGEHUNT.contests.HACKATHONS);
			cards(datascienceData, CHALLENGEHUNT.contests.DATASCIENCE);
	    },
	    error: function(jq, status, message) {
	    }
	});
};

$(document).ready(function(){
	challengeData();
	selectedHosts();

	$('.dropdown-toggle').dropdown();

	$("#cmn-toggle-4").click(function(){

		var element=$("#cmn-toggle-4").prop("checked");
		var category=$(".selected")[0].text;
		if(element==true){

			$(".activeCategory").css("display","none");
			$(".upcomingCategory").css("display","block");
			$("#"+category+"_Active").css("display","none");
			$("#"+category+"_Upcoming").css("display","block");
		}
		if(element==false){

			$(".upcomingCategory").css("display","none");	
			$(".activeCategory").css("display","block");
			$("#"+category+"_Upcoming").css("display","none");
			$("#"+category+"_Active").css("display","block");
		}
	});

	$('#saveButton').click(function(){

		var checkedUsers=[];
		$('input:checkbox[name="hosts"]:checked').each(function(){

			checkedUsers.push($(this).attr("id"));
		});

		console.log(checkedUsers);
	});

	$('.navItem').click(function(){

		var element=$("#cmn-toggle-4").prop("checked");
		$('.navItem').parent().css("border-bottom","");	
		$('.navItem').removeClass("selected");	
		$(this).parent().css("border-bottom","3px solid #fff");
		$(this).addClass("selected");
		$('.cards').css("display","none");
		$('.categoryCards').css("display","none");
		var category=$(".selected")[0].text;
		$("#"+category).css("display","block");

		if(element==false){
			$("#"+category+"_Upcoming").css("display","none");
			$("#"+category+"_Active").css("display","block");
		}else{
			$("#"+category+"_Active").css("display","none");
			$("#"+category+"_Upcoming").css("display","block");
		}
		
	});

});