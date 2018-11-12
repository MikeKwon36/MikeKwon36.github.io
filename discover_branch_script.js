(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking getBrowserFingerprintId".split(" "), 0);

// validate external script can pull context from page 
console.log('Page User Agent: ' + navigator.userAgent);

// function to retrieve cookie value that is dropped on the public site if a user had previously logged in to Discover.com,
function getCookieValue(cookieName) {
    if (document.cookie.length > 0) {
        dcuser_start = document.cookie.indexOf(cookieName + "=");
        if (dcuser_start != -1) {
            dcuser_start = dcuser_start + cookieName.length + 1;
            dcuser_end = document.cookie.indexOf(";", dcuser_start);
            if (dcuser_end == -1) c_endV3 = document.cookie.length;
            console.log(document.cookie.substring(dcuser_start, dcuser_end));
            return unescape(document.cookie.substring(dcuser_start, dcuser_end));
        }
    }
    return 'false';
}

// initialize Branch
branch.init('key_test_nfzPCMNBa2WFWYXfOmWqLdmmyFfKNTt3', function(err, data) {
    console.log(data);
    console.log('Branch SDK finished initializing at ' + Math.floor(Date.now() / 1000));
});

// Branch listener object that retrieves banner link data and prints it to console
var listener = function(event, data) {
console.log(event + ' fired at ' + Math.floor(Date.now() / 1000));
console.log(data);
};

// Listener objects are activated in the Branch instance for specific events via .addListener
branch.addListener("willShowJourney", listener);
branch.addListener("didShowJourney", listener);
branch.addListener("willNotShowJourney", listener);
branch.addListener("didClickJourneyCTA", listener);
branch.addListener("didClickJourneyClose", listener);
branch.addListener("willCloseJourney", listener);
branch.addListener("didCloseJourney", listener);
branch.addListener("didCallJourneyClose", listener);

// function for button to launch journey
function launchBranchJourney(){
    branch.track('pageview');
}

// function for button to close journey (will NOT activate template dismissal period)
function closeBranchJourney(){
    branch.closeJourney(function(err) { console.log(err); });
}
