
    $(".genD").click(function(){
        $(".slabel").css("display","block");
    });

    // 验证用户名
    $(".cellphone1").blur(function(){
        // 用户名规则：   必须是字母、数字、下划线；  6~20字符； 字母开头；

        //    开始   字母       字母、数字、下划线（5~19）  结束
        //     ^     [a-zA-Z]          \w{5,19}              $
        $(".shuru1").css("visibility","hidden");
        // 验证用户名
        var reg1 = /^[0-9]\w{2,19}$/;
        var str1 = $(".cellphone1").val();

        if (reg1.test(str1))
        {
            // document.write("用户名正确");
            return true
        }
        else
        {
            $(".shuru1").css("visibility","visible");
            return false
        }
    });
    $(".cellphone2").blur(function(){
        // 密码规则：   必须是字母、数字、下划线；  6~20字符； 字母开头；

        //    开始   字母       字母、数字、下划线（5~19）  结束
        //     ^     [a-zA-Z]          \w{5,19}              $
        $(".shuru2").css("visibility","hidden");
        var str2 = $(".cellphone2").val();
        //  密码验证
        var reg2 = /^\d{6,12}$/;

        console.log(str2);

        if (reg2.test(str2))
        {
            // document.write("用户名正确");
            return true
        }
        else
        {
            $(".shuru2").css("visibility","visible");
            return false
        }
    });

    $("#button").click(function(){

        var str1 = $(".cellphone1").val();
        var str2 = $(".cellphone2").val();
        // 地址
        var url = "http://h6.duchengjiu.top/shop/api_user.php";

        // 数据
        var data = {
            status: "login",
            username: str1,
            password: str2
        };

        // ajax 请求
       $.post(url, data, function(obj) {
            console.log(obj.data.token);
            console.log(localStorage.username=str1)
            window.location.href="index.html";
            $(".header-son li a").css("display","none");
               	alert('登录成功');

//          $.cookie("token",obj.data.token())
        });
    });

   
