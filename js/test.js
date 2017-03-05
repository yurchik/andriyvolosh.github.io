var test = [
    {
        question: 'Вопрос 1',
        answers: ["Вариант1", "Вариант2", "Вариант3"],
        right_answer: "Вариант2"
    },
    {
        question: 'Вопрос 2',
        answers: ["Вариант1", "Вариант2", "Вариант3"],
        right_answer: "Вариант3"
    },
    {
        question: 'Вопрос 3',
        answers: ["Вариант1", "Вариант2", "Вариант3"],
        right_answer: "Вариант1"
    },
    {
        question: 'Вопрос 4',
        answers: ["Вариант1", "Вариант2", "Вариант3"],
        right_answer: "Вариант 2"
    },
    {
        question: 'Вопрос 5',
        answers: ["Вариант1", "Вариант2", "Вариант3"],
        right_answer: "Вариант3"
    }
];
var form_test = document.getElementById('test');
for(var obj in test){
    quest = test[obj].question;
    quest = document.createTextNode(quest);
    legend = document.createElement('legend');
    legend.appendChild(quest);
    fieldset = document.createElement('fieldset');
    fieldset.appendChild(legend);
    
    
    answ = test[obj].answers;
    obj++;
    for(var item in answ){
        answer = document.createTextNode(answ[item]);
        input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer'+obj;
        input.value = item;
        label = document.createElement('label');
        label.appendChild(input);
        label.appendChild(answer);
        fieldset.appendChild(label);
    }
    form_test.appendChild(fieldset);
}
var button = document.createElement('input');
button.type = 'submit';
button.value = 'Ответить';
form_test.appendChild(button);