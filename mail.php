<?php

$subject = 'Orçamento - Simulador de Cores';
$to = 'comercial@zancollor.com.br,paulo@zancollor.com.br';

$name  = $_REQUEST['name'];
$email = $_REQUEST['mail'];
$phone = $_REQUEST['phone'];
$hexa  = $_REQUEST['hexa'];
$code  = $_REQUEST['code'];
$news  = ($_REQUEST['newsletter'] === "1") ? "Sim" : "Não";

$headers = "From: " .$name.'<'.$email.'>' . "\r\n";
$headers .= "Reply-To: ". strip_tags($email) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="http://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" type="text/css">
    <style type="text/css">

        #outlook a {padding:0;}
        body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; font-family: Arial, sans-serif;color:#424242;}

        .ExternalClass {width:100%;}
        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}

        img {outline:none; text-decoration:none; -ms-interpolation-mode: bicubic;}
        a img {border:none;}
        .image_fix {display:block;}

        table td {border-collapse: collapse;}

        table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }

        @media only screen and (max-device-width: 480px) {

            a[href^="tel"], a[href^="sms"] {
                text-decoration: none;
                pointer-events: none;
                cursor: default;
            }

            .mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
                text-decoration: default;
                pointer-events: auto;
                cursor: default;
            }

        }

        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {

            a[href^="tel"], a[href^="sms"] {
                text-decoration: none;
                pointer-events: none;
                cursor: default;
            }

            .mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
                text-decoration: default;
                pointer-events: auto;
                cursor: default;
            }
        }

        #weare-table {
            font-family: "Lato", Arial, sans-serif;
            color:#424242;
        }
        font { font-family: "Lato", Arial, sans-serif; }
    </style>

</head>
<body>

<table id="weare-table" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff">
    <tr>
        <td>
            <table width="560" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td align="left" height="88" valign="bottom"><a href="http://www.zancollor.com.br"><img src="http://zancollor.com.br/simulador/assets/images/logo.png" alt="Zancollor" width="218" height="60" border="0" /></a></td>
                </tr>
                <tr>
                    <td height="69" valign="middle"><h1 style="font-family:Arial,sans-serif;color:#152e6d;font-size:25px;font-weight:bold;"><font face="Arial,sans-serif" color>Pedido de Orçamento:</font></h1></td>
                </tr>
                <tr>
                    <td>
                        <p>
                            Nome: ' . $name . '<br>
                            E-mail: ' . $email . '<br>
                            Telefone: ' . $phone . '<br><br>
                            <b>Cor (Hexadecimal): ' . $hexa .'</b><br>
                            <b>Cor (Código): ' . $code .'</b>
                            <div style="display: block; width: 100%; height: 60px; background: ' . $hexa . ' ;"></div>
                            <br>Esse contato deseja receber newsletter? <b>' . $news . '</b><br>
                        </p>

                        <p>
                            E-mail enviado através do Simulador de Cores, às ' . date("d/m/Y H:i") . '.<br><br>
                        </p>
                    </td>
                </tr>

                <tr>
                    <td style="border-top:1px solid #D0D0D0;" align="center" valign="middle" height="40">
                        <p style="font-family:Arial,sans-serif;color:#838383;font-size:11px;"><font face="Arial,sans-serif"><a href="http://www.zancollor.com.br/" style="text-decoration:none;color:#152e6d;">www.zancollor.com.br</a></font></p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>

</body>
</html>';

@mail($to, $subject, $message, $headers);
