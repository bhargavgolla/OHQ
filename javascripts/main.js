var count={
	strongly_disagree:0,
	moderately_disagree:0,
	slightly_disagree:0,
	slightly_agree:0,
	moderately_agree:0,
	strongly_agree:0
};
var params = [
               {
                "name": "entry.199567677",
                "value": "f2009140"
              },
              {
                "name": "entry.1986758172",
                "value": "21"
              },
              {
                "name": "entry.1542732942",
                "value": "Male"
              },
              {
                "name": "entry.1108189892",
                "value": "Andhra+Pradesh"
              },
              {
                "name": "entry.513721068",
                "value": "Yes"
              },
              {
                "name": "entry.859800556",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.1594819559",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.1125405238",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.1686456049",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.1470758992",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.71935976",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.1620755690",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.1043555314",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.994781497",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.885259077",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.67341474",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.1261082346",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.1027318",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.1295743116",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.2104200573",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.1892945828",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.987701389",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.412387370",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.459128900",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.1461841554",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.2022613729",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.275512709",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.6940694",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.379783395",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.1482509974",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.905512334",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.2065783494",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.113208607",
                "value": "strongly+disagree"
              },
              {
                "name": "entry.2054190663",
                "value": "strongly+disagree"
              },
              {
                "name": "draftResponse",
                "value": "%5B%5D%0D%0A"
              },
              {
                "name": "pageHistory",
                "value": "0"
              }
             ];
var requestHeaders = [
            {
              "name": ":host",
              "value": "docs.google.com"
            },
            {
              "name": ":version",
              "value": "HTTP/1.1"
            },
            {
              "name": "origin",
              "value": "https://docs.google.com"
            },
            {
              "name": "accept-encoding",
              "value": "gzip,deflate,sdch"
            },
            {
              "name": "accept-language",
              "value": "en-US,en;q=0.8"
            },
            {
              "name": "cookie",
              "value": "S=spreadsheet_forms=6i6Pbc_GNqIZ-3rFowIjdw; NID=67=CmFQiE-Ih1-O_OV4ZI8MODT_Ag5rX6G4bT0AfsWdGx04e2wJz2kY_4pVQqbbLW49ls_8osZPZJAEhcnrUmnSDbXrXkUbyPej4wIyEjEFns2tLEVupqxKylVyj0Wcj_us; PREF=ID=803281760cd7829b:FF=0:TM=1361016736:LM=1361016736:S=iXSi3rEyfbZUgfrF"
            },
            {
              "name": "content-length",
              "value": "1154"
            },
            {
              "name": ":path",
              "value": "/forms/d/1qTzutgub2BbBMD9lplnWFSVJxYl7gRpNp1I38tb8RjI/formResponse?pli=1"
            },
            {
              "name": "accept-charset",
              "value": "ISO-8859-1,utf-8;q=0.7,*;q=0.3"
            },
            {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.57 Safari/537.17"
            },
            {
              "name": "content-type",
              "value": "application/x-www-form-urlencoded"
            },
            {
              "name": "accept",
              "value": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
            },
            {
              "name": "cache-control",
              "value": "max-age=0"
            },
            {
              "name": "referer",
              "value": "https://docs.google.com/forms/d/1qTzutgub2BbBMD9lplnWFSVJxYl7gRpNp1I38tb8RjI/viewform?edit_requested=true&pli=1"
            },
            {
              "name": ":scheme",
              "value": "https"
            },
            {
              "name": ":method",
              "value": "POST"
            }
          ];
function timeOut(){
	alert('Time is up!!');
	formSubmit();
}

function updateCount(value){
	switch(value)
	{
		case "strongly+disagree":
		  count.strongly_disagree++;
		  break;
		case "moderately+disagree":
		  count.moderately_disagree++;
		  break;
		case "slightly+disagree":
		  count.slightly_disagree++;
		  break;
		case "slightly+agree":
		  count.slightly_agree++;
		  break;
		case "moderately+agree":
		  count.moderately_agree++;
		  break;
		case "strongly+agree":
		  count.strongly_agree++;
		  break;
	}
}

function score(){
	var total_score=0;
	for (x in count)
	{
		switch(x)
		{
			case "strongly_disagree":
			  total_score=total_score+count.strongly_disagree*6;
			  break;
			case "moderately_disagree":
			  total_score=total_score+count.moderately_disagree*5;
			  break;
			case "slightly_disagree":
			  total_score=total_score+count.slightly_disagree*4;
			  break;
			case "slightly_agree":
			  total_score=total_score+count.slightly_agree*3;
			  break;
			case "moderately_agree":
			  total_score=total_score+count.moderately_agree*2;
			  break;
			case "strongly_agree":
			  total_score=total_score+count.strongly_agree*1;
			  break;
		}
	}
	total_score=total_score/29;
	console.log(total_score);
	total_score=Math.floor(total_score * 100) / 100
	$('#score').text(total_score);
	if(total_score>=6)
	{
		$('#mood').text("too happy");
	}
	else if(total_score>=5)
	{
		$('#mood').text("very happy");
	}
	else if(total_score>4)
	{
		$('#mood').text("rather happy");
	}
	else if(total_score==4)
	{
		$('#mood').text("somewhat happy");
	}
	else if(total_score>=3)
	{
		$('#mood').text("not particularly happy or unhappy");
	}
	else if(total_score>=2)
	{
		$('#mood').text("somewhat unhappy");
	}
	else
	{
		$('#mood').text("not happy");
	}
	$('#score_content').toggle();
}

function formSubmit(){
	$('#defaultCountdown').hide(); 
	for (var i = 0; i < params.length; i++)
	{
		var input_selector='input[name="'+params[i].name+'"]';
		var value = $(input_selector).val();
		if($(input_selector).attr('type')==='radio')
		{
			value=$(input_selector+':checked').val();
			console.log(value);
		}
		if (typeof value !== "undefined"){
			var new_value = value.split(' ').join('+');
			console.log(new_value);
			params[i].value= new_value;
		}
		else
		{
			var select_selector='select[name="'+params[i].name+'"]';
			var select_value = $(select_selector).val();
			if (typeof select_value !== "undefined"){
				var new_select_value = select_value.split(' ').join('+');
				console.log(new_select_value);
				params[i].value= new_select_value;
			}
		}
		updateCount(params[i].value);
	}
	for(x in count){
		console.log(count[x]);
	}
	$.ajax({  
			type: "POST",  
			url: "https://docs.google.com/forms/d/1qTzutgub2BbBMD9lplnWFSVJxYl7gRpNp1I38tb8RjI/formResponse?pli=1",
			crossDomain:true,
			data: params, 
			//headers: requestHeaders,
			success: function() {
				console.log("Success!!!");
			},
			error:function(){
				console.log("Failed!!!!");
				alert("Failed!!!");
			},
			complete:function(){
				score();
			}
		});	
	$('#main_content').toggle();
}

$(document).ready(function(){
	alert('This Survey is a good way to get a snapshot of your current level of happiness.Please read the statements carefully, because some are phrased positively and others negatively. Do not take too long over individual questions; there are no right or wrong answers (and no trick questions). The first answer that comes into your head is probably the right one for you. If you find some of the questions difficult, please give the answer that is true for you in general or for most of the time. Please finish the questionnaire in 10 minutes. Click OK when you are ready.');
	shortly = new Date(); 
    shortly.setSeconds(shortly.getSeconds() + 600.5); 
	//shortly.setSeconds(shortly.getSeconds() + 5.5); 
    $('#defaultCountdown').countdown({until: shortly,onExpiry:formSubmit}); 
	$('#main_content').toggle();
	$('#ss-submit').click(function(e){
		e.preventDefault();
		formSubmit();
	});
});
