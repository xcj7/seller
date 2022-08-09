<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .title{
            font-size: 13px;
            color: blue;
        }
        .pass{
            color: green;
        }
    </style>
</head>
<body>
    <h2>Dear  {{$details['title']}},</h2>
    <h4>Your Account for <span class="title">GOODS BUYING AND SELLING </span> application has been successfuly created</h4>
      <h4>By using Email:  <email>{{$details['email']}}</email> and Password:<span class="pass"> {{$details['password']}}</span> 
    now you are able to login </h4>
    <span>Dont't share your Email and Password with any one </span><br><br>

<h2>Thanks,</h2>
<h2 class="title">GOODS BUYING AND SELLING</h2>
</body>
</html>

