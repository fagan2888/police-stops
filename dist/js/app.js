var dataproject = {
    allChars: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "." ],
    init: function() {
        dataproject.share();
        dataproject.interactives();
    },
    share: function() {
        $(".icon-twitter").on("click", function() {
            var tweet = "";
            var url = "";
            var twitter_url = "https://twitter.com/intent/tweet?text=" + tweet + "&url=" + url + "&tw_p=tweetbutton";
            window.open(twitter_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
        $(".icon-facebook").on("click", function() {
            var picture = "";
            var title = "";
            var description = "";
            var url = "";
            var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link=" + url + "&picture=" + picture + "&name=" + title + "&description=" + description + "&redirect_uri=http://www.facebook.com";
            window.open(facebook_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
    },
    interactives: function() {
        var data = [ [ "0.6", "39.9", "10.5", "49.0", "944,728" ], [ "0.4", "34.8", "12.5", "52.4", "306,167" ], [ "0.8", "42.4", "9.5", "47.3", "637,650" ], [ "0.6", "39.6", "12.8", "46.9", "764,160" ], [ "0.4", "34.7", "14.5", "50.4", "261,837" ], [ "0.8", "42.2", "11.9", "45.1", "501,932" ], [ "0.7", "41.2", "0.5", "57.6", "180,098" ], [ "0.4", "35.3", "0.6", "63.7", "44,258" ], [ "0.8", "43.3", "0.5", "55.5", "135,338" ], [ "0.4", "39.0", "10.8", "49.8", "17,273" ], [ "0.2", "35.6", "11.5", "52.7", "5,228" ], [ "0.5", "40.5", "10.5", "48.5", "12,042" ], [ "0.4", "38.3", "14.1", "47.2", "13,118" ], [ "0.3", "34.4", "13.9", "51.4", "4,306" ], [ "0.4", "40.2", "14.2", "45.2", "8,809" ], [ "0.4", "41.3", "0.5", "57.9", "4,145" ], [ "0.0", "40.8", "0.5", "58.7", "919" ], [ "0.5", "41.4", "0.4", "57.6", "3,226" ], [ "0.8", "41.5", "10.6", "47.2", "285,254" ], [ "0.3", "37.4", "12.5", "49.7", "97,301" ], [ "1.0", "43.5", "9.5", "45.9", "187,949" ], [ "0.7", "41.5", "12.7", "45.1", "235,171" ], [ "0.3", "37.7", "14.4", "47.6", "83,821" ], [ "0.9", "43.6", "11.7", "43.7", "151,346" ], [ "0.9", "41.2", "0.7", "57.2", "49,978" ], [ "0.4", "35.9", "0.9", "62.7", "13,458" ], [ "1.1", "43.2", "0.6", "55.1", "36,520" ], [ "0.9", "46.1", "10.0", "43.0", "40,240" ], [ "0.4", "40.7", "11.3", "47.6", "7,124" ], [ "1.0", "47.3", "9.7", "42.0", "33,109" ], [ "0.9", "46.4", "12.9", "39.8", "30,722" ], [ "0.3", "40.5", "13.6", "45.6", "5,866" ], [ "1.0", "47.8", "12.8", "38.4", "24,850" ], [ "1.0", "45.2", "0.5", "53.3", "9,471" ], [ "0.6", "41.3", "0.9", "57.2", "1,249" ], [ "1.1", "45.8", "0.5", "52.7", "8,221" ], [ "0.5", "43.3", "9.5", "46.7", "26,823" ], [ "0.2", "37.1", "12.4", "50.3", "5,630" ], [ "0.6", "46.5", "9.0", "43.9", "20,314" ], [ "0.5", "42.1", "13.4", "44.1", "18,653" ], [ "0.2", "37.0", "15.0", "47.7", "4,593" ], [ "0.6", "44.4", "13.2", "41.8", "13,689" ], [ "0.6", "46.2", "0.5", "52.7", "8,139" ], [ "0.2", "37.3", "0.8", "61.7", "1,035" ], [ "0.7", "50.8", "0.5", "48.1", "6,606" ], [ "0.6", "38.6", "10.5", "50.3", "573,621" ], [ "0.4", "33.1", "12.6", "53.9", "190,715" ], [ "0.6", "41.3", "9.5", "48.5", "382,898" ], [ "0.6", "38.1", "12.9", "48.4", "465,497" ], [ "0.4", "32.9", "14.6", "52.1", "163,126" ], [ "0.7", "41.0", "11.9", "46.4", "302,366" ], [ "0.5", "40.4", "0.4", "58.6", "107,855" ], [ "0.4", "34.4", "0.5", "64.7", "27,553" ], [ "0.6", "42.5", "0.4", "56.5", "80,299" ] ];
        var currData = data[0];
        var domStats = $(".outcomesStat");
        $(".options--outcomes select").change(function() {
            currData = data[$(".outcomes--0").val() * 9 + $(".outcomes--1").val() * 3 + $(".outcomes--2").val() * 1];
            for (var i = 0; i < domStats.length; i++) {
                dataproject.charScrambler(currData[i], domStats[i].children, 0);
            }
        });
    },
    charScrambler: function(chars, dom, count) {
        var char_cycles = 10;
        var char_cycle_length = 30;
        if (count < char_cycles) {
            setTimeout(function() {
                for (var x = 0; x < chars.length; x++) {
                    $(dom[x]).text(dataproject.allChars[Math.floor(Math.random() * 11)]);
                }
                dataproject.charScrambler(chars, dom, count + 1);
            }, char_cycle_length);
        } else {
            for (var y = 0; y < 4; y++) {
                $(dom[y]).text(chars.substring(y, y + 1));
            }
        }
        return false;
    }
};

$(document).ready(function() {
    dataproject.init();
    console.log("connected");
});