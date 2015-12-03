(function(){
    var num = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    function convBase10ToAny(number,target) {
        var inp_t = number;
        var tmp_res = [];
        while (1 <= inp_t) {
            tmp_res.push( num[Math.floor( inp_t % target )] );
            inp_t = inp_t / target;
        }
        return tmp_res.reverse().join("");
    }

    function convBaseAnyTo10( number, current ) {
        var inp_t = number+"";
        var temp_res = 0;
        for ( var i = 0 ; i < inp_t.length ; i++ ) {
            temp_res += Math.abs( parseInt(num.indexOf(inp_t[inp_t.length-1-i])*Math.pow(current,i)) );
        }
        return temp_res;
    }

    function convBase( num_str, cur_base, tar_base ){
        var deci = convBaseAnyTo10( num_str, cur_base );
        return convBase10ToAny( deci, tar_base );
    }

    console.log( convBase( "A", 16, 2 ) );
})();
