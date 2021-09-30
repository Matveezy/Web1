<?php

function validate($y, $x, $r)
{
    if (($y <= -3) || ($y >= 5)) return false;
    if (!(($x == -4) || ($x == -3) || ($x == -2) || ($x == -1) || ($x == 0) || ($x == 1) || ($x == 2) || ($x == 3)
        || ($x == 4))) return false;
    if (!(($r == 1) || ($r == 2) || ($r == 3) || ($r == 4) || ($r == 5))) return false;
    return true;
}

