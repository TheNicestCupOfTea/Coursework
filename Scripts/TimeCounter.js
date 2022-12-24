var birthday;

//Запись информации о моем дне рождения в переменную
function update() {
    todaydate = new Date();
    birthday = `My birthday `;
    if (todaydate.getMonth()+1 == 4 && todaydate.getDate() == 12) {
        birthday += 'is today! Yay!'
    } else {
        if (((todaydate.getMonth()+1)<4) || 
            ((todaydate.getMonth()+1)==4 && todaydate.getDate() < 12)) {
            birthday += 'is in '
            
            bdate = new Date();
            bdate.setDate(12);
            bdate.setMonth(3);
            difference = (bdate - todaydate);
        } else {
            birthday += 'has already passed this year, it\'s in '
            
            bdate = new Date();
            bdate.setFullYear(todaydate.getFullYear() + 1);
            bdate.setDate(12);
            bdate.setMonth(3);
            difference = (bdate - todaydate);

        }
        daystilbday = Math.floor(difference / (1000 * 60 * 60 * 24));
        difference -= daystilbday * (1000 * 60 * 60 * 24);

        birthday += `${daystilbday} days.`;
    }
}

//Записываем в переменную в самом начале.
update()

//Периодическое обновление информации о моем дне рождения.
setTimeout(() => update(), 1000);