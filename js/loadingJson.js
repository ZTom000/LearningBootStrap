$(document).ready(function(){
    var url = "../js/gettingdata.json";
    $.getJSON(url,function(data){
        $.each(data,function(infoIndex,info){//遍历Json数组
            if(infoIndex == "navbar") {
                var $jsontip = $("#bs-example-navbar-collapse-1");
                var strHtml = "";//存储数据的变量
                $jsontip.empty();//清空内容
                strHtml += "<ul class=\"nav navbar-nav\">";
                $.each(info, function (titleIndex, title) {
                    if(title["dropmenu-group"] == null){
                        strHtml += "<li><a href=\"#\" style=\"color: #ffffff\">" + title["detail"] + "</a></li>";
                    }
                    else{
                       strHtml += "<li class=\"dropdown\">"
                            +"<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: #ffffff\">"
                            + title["detail"] + "</a>"
                            + "<ul class=\"dropdown-menu\">";
                            $.each(title["dropmenu-group"],function (dropmenuIndex, dropmenu) {
                                 strHtml += "<li><a href=\"#\">" + dropmenu["detail"] + "</a></li>";
                            });
                        strHtml += "</ul>"
                    }

                });
                strHtml += "</ul>";
                $jsontip.html(strHtml);//显示处理后的数据
            }//获取导航栏navbar配置数据

            if(infoIndex == "slider") {
                var $jsontip = $(".carousel-inner");
                var strHtml = "";//存储数据的变量
                $jsontip.empty();//清空内容
                $.each(info, function (sliderIndex, slider) {
                    if (slider["slider_id"] == "s001") {
                        strHtml += "<div class=\"item active\"><img src=\""
                            + slider["src"] + "\" alt=\""
                            + slider["slider_id"] + "\"></div>";
                    }
                    else {
                        strHtml += "<div class=\"item\"><img src=\""
                            + slider["src"] + "\" alt=\""
                            + slider["slider_id"] + "\"></div>";
                    }

                });
                $jsontip.html(strHtml);//显示处理后的数据
            }//获取轮播器slider配置数据

            if(infoIndex == "thumbnails"){
                var $jsontip = $("#main-details");
                var strHtml = "";//存储数据的变量
                $jsontip.empty();//清空内容
                $.each(info,function (thumbnailsIndex,thumbnails) {
                    strHtml += " <div class=\"col-sm-4\"><div class=\"thumbnail thumbnail-customer\"><div>"
                    + "<a class=\"img\" href=\""+ thumbnails["thumbnail_url"] +"\"><img src=\"" + thumbnails["thumbnail_img"]
                        + "\" alt=\"...\" style=\"height:128px;width:280px;\"></a></div>"
                        + "<div class=\"caption\"><h3>" + thumbnails["thumbnail_header"]
                        + "</h3><p>" + thumbnails["thumbnail_detail"] + "</p></div></div></div>";
                });
                $jsontip.html(strHtml);//显示处理后的数据
            };//获取主体内容介绍thumbnails配置数据

            if(infoIndex =="news"){
                var $jsontip = $(".new-info");
                var strHtml = "";//存储数据的变量
                $jsontip.empty();//清空内容
                $.each(info,function (newsIndex,news) {
                    if(news["news_status"] == "new"){
                        strHtml += "<li class=\"list-group-item list-group-item-customer\"><a href=\""
                            + news["news_url"] + "\" class=\"a\">" + news["news_detail"] + "</a><span class=\"badge\">"
                            + news["news_status"] + "</span></li>";
                    }
                    else{
                        strHtml += "<li class=\"list-group-item list-group-item-customer\"><a href=\""
                            + news["news_url"] + "\" class=\"a\">" + news["news_detail"] + "</a><span>&nbsp;&nbsp;&nbsp;</span>></li>";
                    }
                });
                $jsontip.html(strHtml);//显示处理后的数据
            };//获取动态信息news配置数据

            if(infoIndex == "sidenavbar"){
                var $jsontip = $("#side-navbar");
                var strHtml = "";//存储数据的变量
                $jsontip.empty();//清空内容
                strHtml += "<ul class=\"nav bs-docs-sidenav\"  role=\"complementary\">";
                $.each(info,function(sidenavIndex,sidenav) {
                    strHtml += "<li role=\"presentation\"><a class=\""+ sidenav["sidenavbar_target"] +"\" href=\"#"
                        + sidenav["sidenavbar_target"] + "\" aria-controls=\"" + sidenav["sidenavbar_target"]
                        + "\" role=\"tab\" data-toggle=\"tab\">" + sidenav["sidenavbar_detail"] + "</a></li>";
                });
                strHtml += "</ul>";
                $jsontip.html(strHtml);//显示处理后的数据
            }//获取侧栏sidenavbar配置数据

 /*           if(infoIndex == "messageslist"){
                var $jsontip = $("#side-navbar");
                var strHtml = "";//存储数据的变量
                $.each(info,function (messageslistIndex,messageslist) {
                    var messagesList = messageslistIndex;
                    for(i=0;i<(messageslistIndex.length);i++){

                    }
                });

                $jsontip.empty();//清空内容
            };*/
        })
    });
});
