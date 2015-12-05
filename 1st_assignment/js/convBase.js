(function(){
    var num = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',
        'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'কাঁঠাল','লিচু','জাম','আম','চমচম','বরফি','রসমালাই','সিঙ্গারা','পুড়ি','চপ'];

    function convBase10ToAny(str,target) {
        var inp_t = String(str);
        var tmp_res = "";
        while (1 <= inp_t) {
            tmp_res = num[Math.floor( inp_t % target )]+tmp_res;
            inp_t = inp_t / target;
        }
        return tmp_res;
    }

    function convBaseAnyTo10( str, current ) {
        var inp_t = String(str);
        var temp_res = 0;
        for ( var i = 0 ; i < inp_t.length ; i++ ) {
            temp_res += num.indexOf(inp_t[inp_t.length-1-i])*Math.pow(current,i);
        }
        return temp_res;
    }

    function convBase( your_string, current_base, target_base ){
        var deci = convBaseAnyTo10( your_string, current_base );
        return convBase10ToAny( deci, target_base );
    }

    console.log( convBase("POKOPOKO",32,16) );
})();
