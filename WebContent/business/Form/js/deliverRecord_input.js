$(document).ready(function(){	
	//projectBtcode需要到后台进行验证
	$('#OrderNum').blur(function(){
		var OrderNum = $(this).val();
		var workerId = $(window.parent.parent.frames["topFrame"].document).find('#workerId').text();
		/*先验证是不是9位数字*/
		//code
		$.ajax({
			type: "post",
			url: "business/checkOrderNum.do",
			data: {"ordernum":OrderNum,"workerId":workerId},
			success:function(data,status)
			{
				if(data=="true")
				{
					$('#OrderNum').parent().find('.help-block').text("correct");
				}
				else
				{
					$('#OrderNum').parent().find('.help-block').text("无权限");
				}
			},
			error:function(data,status)
			{
				alert("server error!")
			}
		});
	});
	
	/*
	 * 与后台交互数据
	 */
	

	$('#submit').click(function(){
		//action="business/addSowRecordInfo.do" type="post"
		var OrderNum=$('#OrderNum').val();
		var deliverTime=$('#deliverTime').val();
		var deliverAddress=$('#deliverAddress').val();
		var LogisticsCompany=$('#LogisticsCompany').val();
		var LogisticsNum=$('#LogisticsNum').val();
		var Distributor=$('#Distributor').val();
		var Logistics=$('#Logistics').val();
		var Comment= $('#Comment').summernote('code');
		alert("表单");
		$.ajax({
			type: "post",
			url: "business/addDeliverRecordInfo.do",
			data:{
				"ordernum":OrderNum,
				"delivertime":deliverTime,
				"deliveraddress":deliverAddress,
				"logisticscompany":LogisticsCompany,
				"logisticsnum":LogisticsNum,
				"distributor":Distributor,
				"logistics":Logistics,
				"comment":Comment	
			},
			success:function(data,status)
			{
				alert("添加成功");
			},
			error:function(data,status)
			{
				alert("server error!")
			}
		});
		
	});
	
	
	
});