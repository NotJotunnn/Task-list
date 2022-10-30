const arr = []

function enterPress() {
    const input = document.querySelector('input')

    if(event.key == "Enter") addTask()
    if(event.key == "Backspace" && arr.length > 0 && !input.value) removeLastEvent()
}

function addTask() {
    const input = document.querySelector('input')

    if(input.value) {
        arr.push(input.value)

        input.value = ''
        focus(input)

        showAddedTasks()
    }
}

function showAddedTasks() {
    const ul = document.querySelector('ul')

    var pTextContent = ''

    var count = 0

    arr.map(arrItem => {
        pTextContent += `<li class="${count}" onclick="removeTask(${count})">${arrItem}</li>\n`
        count++
        // console.log(arr.indexOf(arrItem))
    })
    ul.innerHTML = pTextContent
}

function removeTask(event) {
    const ulItems = document.querySelectorAll('li')
    
    ulItems[event].remove()
    arr.splice(event, 1)
}

function removeLastEvent() {
    const ulItems = document.querySelectorAll('li')

    ulItems[arr.length - 1].remove()
    arr.pop()
}