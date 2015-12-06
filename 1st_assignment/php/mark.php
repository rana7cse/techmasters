<?php
    function makeResult($mark){
        switch($mark){
            case 60 :
            case 61 :
            case 62 :
            case 63 :
            case 64 :
            case 65 :
            case 66 :
            case 67 :
            case 68 :
            case 69 :
                return "D";
                break;

            case 70 :
            case 71 :
            case 72 :
            case 73 :
            case 74 :
            case 75 :
            case 76 :
            case 77 :
            case 78 :
            case 79 :
                return "C";
                break;

            case 80 :
            case 81 :
            case 82 :
            case 83 :
            case 84 :
            case 85 :
            case 86 :
            case 87 :
            case 88 :
            case 89 :
                return "B";
                break;

            case 90 :
            case 91 :
            case 92 :
            case 93 :
            case 94 :
            case 95 :
            case 96 :
            case 97 :
            case 98 :
            case 99 :
            case 100 :
                return "A";
                break;

            default :
                return "F";
        }
    }

echo makeResult(60);

# num divided by 7
$res = [];
for($i = 1; $i <= 20000; $i++){
    if($i%7 == 0){
        array_push($res,$i);
    }
}
print_r($res);

#half_piramid

function makePiramid($col){
    $rows = ($col*2) - 1;
    for($i = 1; $i <= $rows; $i++){
        if($i <= $col){
            for($m = 1; $m <= $i; $m++){
                echo "*";
            }
        }else{
            for($m = $i; $m <= $rows; $m++){
                echo "*";
            }
        }
        echo "\n";
    }
}

makePiramid(5);





