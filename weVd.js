$(function(){
$(&quot;#slidervideo-tabs a&quot;).click(function(){
var container = $(&quot;#slidervideo-content&quot;);
container.html(&quot;&lt;img src=&#39;http://3.bp.blogspot.com/-IbCgBm3kukw/UI3nvBbvtUI/AAAAAAAADL0/lfqoLXFkhfU/s400/loading.gif&#39; class=&#39;loading-vid&#39; /&gt;&quot;);
var id = $(this).attr(&quot;href&quot;).slice(1);
loadvideo(id);
return false;
});
 
$(&quot;#slidervideo-tabs li&quot;).hover(function(){$(this).addClass(&quot;hover&quot;);},function(){$(this).removeClass(&quot;hover&quot;);});
loadvideo();
});

function loadvideo (hash){if(hash){hash = hash.slice(3);$(&quot;#slidervideo-content&quot;).html(video[hash]);$(&quot;#slidervideo-tabs li&quot;).removeClass(&quot;actVid&quot;);$(&quot;#slidervideo-tabs a[href=#vid&quot;+hash+&quot;]&quot;).parent().addClass(&quot;actVid&quot;);}else{$(&quot;#slidervideo-content&quot;).html(video[1]);$(&quot;#slidervideo-tabs li&quot;).removeClass(&quot;actVid&quot;);$(&quot;#slidervideo-tabs a[href=#vid1]&quot;).parent().addClass(&quot;actVid&quot;);}}
 
$(function () {
    setIFrameSize();
    $(window).resize(function () {
        setIFrameSize();
    });
});

function setIFrameSize() {
    var ogWidth = 300;
    var ogHeight = 200;
    var ogRatio = ogWidth / ogHeight;

    var windowWidth = $(window).width();
    if (windowWidth &lt; 531) {
        var parentDivWidth = $(&quot;.iframe-class&quot;).parent().width();
        var newHeight = (parentDivWidth / ogRatio);
        $(&quot;.iframe-class&quot;).addClass(&quot;iframe-class-resize&quot;);
        $(&quot;.iframe-class-resize&quot;).css(&quot;width&quot;, parentDivWidth);
        $(&quot;.iframe-class-resize&quot;).css(&quot;height&quot;, newHeight);
    } else {
        // $(&quot;.iframe-class-resize&quot;).removeAttr(&quot;width&quot;);
        // $(&quot;.iframe-class-resize&quot;).removeAttr(&quot;height&quot;);
        $(&quot;.iframe-class&quot;).removeClass(&quot;iframe-class-resize&quot;);
    }
}
