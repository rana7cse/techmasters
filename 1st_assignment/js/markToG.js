(function(){

    "use strict";

    function makeResult(mark){
        switch(mark){
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

    console.log(makeResult(80));
})();