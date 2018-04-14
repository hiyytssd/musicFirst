// 打乱顺序
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle(arr) {
    var _arr = arr.slice()
    for (let i = 0; i < _arr.length; i++){
        let j = getRandomInt(0, i);
        let temp = arr[i]
        _arr[i] = _arr[j]
        _arr[j] = temp
    }
    return _arr
}