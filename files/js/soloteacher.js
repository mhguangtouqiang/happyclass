
//չ������
$(function () {
	$('.nik').click(function () {
		$('#uiosed').animate({height:"130px"});
		$('.nik').hide();
		$('.nik2').show();
		$('#bosic').show();
		$('#qosic').show();
	})
	$('.nik2').click(function () {
		$('#uiosed').animate({height:"60px"});
		$('.nik2').hide();
		$('.nik').show();
		$('#bosic').hide();
		$('#qosic').hide();
	})
})
//��ʾ���ؾŹ���
$(function () {
	$('#wenst').click(function () {
		$('.sok').show().css({'position':'relative','right':'-202px'}).animate({'right':'0px'}, '1000');;
		$('.sok2').hide();

	})
	$('#wenst2').click(function () {
		$('.sok').hide();
		$('.sok2').show().css({'position':'relative','right':'-202px'}).animate({'right':'0px'}, '1000');;

	})
})
//�滻����
	$(function () {
		$('#wenst .hhd').click(function () {
			$('.hhd').css("background-image","url(images/btn_list_selected.png)");
			$('.hhb').css("background-image","url(images/btn_gongge_nor.png)");
		})
		$('#wenst2 .hhb').click(function () {
			$('.hhb').css("background-image","url(images/564.png)");
			$('.hhd').css("background-image","url(images/btn_list_nor.png)");
		})
	})
//�滻color
$(function () {
	$('#puios li').click(function () {
		var i=$(this).index();
		if($(this).hasClass('yss')) return false;
		$('#puios li').eq(i).addClass('yss').siblings().removeClass('yss');
	})
	$('.iosic li').click(function () {
		var i=$(this).index()
		if($(this).hasClass('yss2')) return false;
		$('.iosic li').eq(i).addClass('yss2').siblings().removeClass('yss2');
	})
	$('#qosic li').click(function () {
		var i=$(this).index()
		if($(this).hasClass('yss3')) return false;
		$('#qosic li').eq(i).addClass('yss3').siblings().removeClass('yss3');
	})
	$('#bosic .wlo').click(function () {
		var i=$('#bosic .wlo').index(this);
		if($(this).hasClass('yss4')) return false;
		$('#bosic .wlo').eq(i).addClass('yss4').siblings().removeClass('yss4');
	})

	
})
//����ֵ�ж�input�Ƿ�ѡ��
$(function () {
	$('.sssw').click(function () {
		$('.hipe').hide();
		$('.hipe2').show();
	})
	$('.sjsj').click(function () {
		$('#puios li').removeClass('yss');
		var ssswInput = $(".ssswInput");
		for(var i=0;i<ssswInput.length;i++){
			if (ssswInput[i].checked) {
				$('#puios li').eq(i+1).addClass('yss');
			};
		}
		$('.hipe2').hide();
		$('.hipe').show();
	})
	$('.sssw2').click(function () {
		$('.iosic').hide();
		$('.iosic2').show();
	})
	$('.sjsj2').click(function () {
		$('.iosic li').removeClass('yss2');
		var sssw2Input = $(".sssw2Input");
		for(var i=0;i<sssw2Input.length;i++){
			if (sssw2Input[i].checked) {
				$('.iosic li').eq(i+1).addClass('yss2');
			};
		}
		$('.iosic2').hide();
		$('.iosic').show();
	})
})