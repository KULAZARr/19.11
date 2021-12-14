function test(){
 let name = prompt("Введите имя")
 document.getElementById('name').textContent = "Имя: " + name

 let sname = prompt("Введите фамилию")
 document.getElementById('sname').textContent = "Фамилия: " + sname

 let age = prompt("Введите возраст")
 document.getElementById('age').textContent = "Возраст: " + age

 let prof = prompt("Введите специальность")
 document.getElementById('prof').textContent = "Специальность: " + prof

 let date = prompt("Введите дату рождения")
 document.getElementById('date').textContent = "Дата рождения " + date

 let Oy = prompt("Расскажите о себе")
 document.getElementById('Oy').textContent = "О себе " + Oy


}