<?php
if($_POST['Submit']){
    $user_name=$_POST['user_name'];
    $user_tel=$_POST['user_tel'];
    $user_post=$_POST['user_post'];
    $ah=$_POST['ah'];
    $where=$_POST['where'];
    $str.="姓名：".$user_name."\r\n电话：".$user_tel."\r\n留言：".$user_post;
    $k=fopen("liuyanban.txt","a+");
    fwrite($k,$str);
    fclose($k);
    echo "保存成功！";
}
?>