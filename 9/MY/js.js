// массив правильных ответов
let answer = ["яблоко","груша","город","школа","сайт", "браузер", 
"плагин", "цвет", "стиль", "язык", "узор", "сорока"];

// переменная для 
let num = Math.floor(1 + Math.random() * 12);

let was = [];

// knob прогресс правильных ответов
let progress = 0;

$(document).ready(function () {

	// добавляем knob
	$(".progress").knob({
		'min': 0, 
		'max': 5,
		'angleOffset': -60,
		'angleArc': 120,
		'readOnly': true,
		'width' : '100%',
		'thickness': 0.2,
		'lineCap': 'round',
		'displayInput' : false,
		'bgColor' : '#cde8ea',
		'fgColor' : '#991525'
	});

	// выпадающее меню по нажатию
	$("#rules").slideUp();
		$(".slideRules").click(function () {
			$("#rules").slideToggle();
	});

	startRebus(num);

	$("#btnTask1").click(function() {
		if ($("#inputTask1").val().toLowerCase() ==`${answer[num-1]}` ) {
			alertify.success("Right answer!");
			$("#inputTask1").val("");
			progress++;
			$(".progress").val(progress).trigger('change');
			was.push(num);
			console.log(was);

			//вызываем функцию показа картинок
			startRebus(num);

			if (progress < 5) {
				do {
					num = Math.floor(1 + Math.random() * 12);
				} while (was.includes(num));
				console.log(num); //выводится массив
				startRebus(num);  //выводится номер картинки
			} else {
				$(".img, #btnTask1, #inputTask1").css({
					'display' : 'none'
				});
				$("#nextTask").css({
					'display' : 'flex'
				});
			}
		} else {
			alertify.error("Wrong answer. Try again!");
		}
	});
});

//для отображения картинки
function startRebus (arg) {
	$("#picture").attr("src",`rebuses/${arg}.jpg`);
}