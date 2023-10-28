const inputs = document.querySelectorAll('.inp');

inputs.forEach((el, i)=> {
    el.addEventListener('keydown', () => {
        el.style.width = ((el.value.length + 1) * 8) + 'px';
        el.style.minWidth = '30px';
    })
    el.addEventListener('focus', () => {
        el.value = '';
        el.style.width = '30px';
    })
});


//Task-1

const inp11 = document.querySelector('.task-1 div:first-child .inp.name'),
    inp12 = document.querySelector('.task-1 div:first-child .inp.surname'),
    inp13 = document.querySelector('.task-1 div:first-child .inp.salary'),
    inp14 = document.querySelector('.task-1 div:first-child .inp.days'),
    btn1 = document.querySelector('.task-1 .btn1'),
    btn2 = document.querySelector('.task-1 .btn2'),
    res1 = document.querySelector('.task-1 .res');

let workers = 0,
    salaries = 0;


class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary(rate, days) {
        const span = document.createElement('span');
        span.innerHTML = `
            Зарплата: ${rate * days}
        `;
        res1.querySelector(`.worker:last-child`).appendChild(span);
    }

    getSurname(name, surname) {
        const div = document.createElement('div');
        div.classList.add('worker');
        const span = document.createElement('span');
        res1.appendChild(div);
        span.innerHTML = `
            ${name} ${surname}
        `;
        div.appendChild(span);
        res1.appendChild(div);
    }
}


class Boss extends Worker {

    getSalaryAll() {
        salaries = 0;
        let arr = res1.querySelectorAll('.worker');
        let arr2 = res1.querySelectorAll('.boss');
        arr2.forEach(el => {
            el.remove();
        })
        arr.forEach(el => {
            salaries += +el.querySelector('span:nth-child(2)').textContent.match(/\d/gi).join('');
        });

        const div = document.createElement('div');
        div.classList.add('boss');
        div.textContent = `Работников: ${arr.length} Зарплаты: ${salaries}`;
        res1.appendChild(div);
    }
}

btn1.onclick = () => {
    const person = new Worker;
    person.getSurname(inp11.value, inp12.value);
    person.getSalary(inp13.value, inp14.value);
}

btn2.onclick = () => {
    const boss = new Boss;
    boss.getSalaryAll();
}