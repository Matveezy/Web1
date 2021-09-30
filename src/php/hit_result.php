<?php

function hit_result($y, $x, $r)
{
    if (($x * $x + $y * $y <= $r / 2) && ($x >= 0) && ($y >= 0)) return true;
    else if (($x <= 0) && ($x >= (-1 * $r)) && ($y >= 0) && ($y <= $r)) return true;
    else if (($x <= 0) && ($y <= 0) && ($y >= ((-1 * $x) - $r)) / 2) return true;
    else return false;
}



