		var saveInput = false;

		function inputFun () {
			$.each(inputArr, function () {
				$(this).on("input", function () {
					jugckInput(function () {
						if (saveInput) {
							$("#qos2").attr("src","images/sds121.png");
						}else {
							$("#qos2").attr("src","images/213123ff.png");
						}
					});
				});
			});
		}
			

		function jugckInput (callback) {
			saveInput = true;
			$.each(inputArr, function () {
				var current_val_len = $(this).val().length;
				if (current_val_len == 0) {
					saveInput = false;
				}
			});
			callback();
		}
