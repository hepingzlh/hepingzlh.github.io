<?php
if($_POST['Submit']){
    $user_name=$_POST['user_name'];
    $user_tel=$_POST['user_tel'];
    $user_post=$_POST['user_post'];
    $ah=$_POST['ah'];
    $where=$_POST['where'];
    $str.="������".$user_name."\r\n�绰��".$user_tel."\r\n���ԣ�".$user_post;
    $k=fopen("liuyanban.txt","a+");
    fwrite($k,$str);
    fclose($k);
    echo "����ɹ���";
}
?>