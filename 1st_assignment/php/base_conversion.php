<?php
    $char = [
        '0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',
        'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'কাঁঠাল','লিচু','জাম','আম','চমচম','বরফি','রসমালাই','সিঙ্গারা','পুড়ি','চপ'
    ];

    function base_10to_any($my_num,$base){
        global $char;
        $input_num = $my_num;
        $temp_result = "";
        while (1 <= $input_num) {
            $temp_result = $char[$input_num % $base].$temp_result;
            $input_num = $input_num / $base;
        }
        return $temp_result;
    }

    function base_anyto_10($my_str,$base){
        global $char;
        $input_string = (string)$my_str;
        $temp_result = 0;
        for ($i = 0; $i < strlen($input_string); $i++) {
            $index = array_search($input_string[strlen($input_string)-1-$i],$char);
            $temp_result += $index*pow($base,$i);
        }
        return $temp_result;
    }

    function base_convertX($your_string,$current_base,$target_base){
        $num = base_anyto_10($your_string,$current_base);
        return base_10to_any($num,$target_base);
    }

    if(base_convertX(100,8,10) == base_convert(100,8,10)){
        echo "Yes poko you did it :)";
    }else{
        echo "Something wrong in your logic or else poko ! :(";
    }