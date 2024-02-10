
// 랜덤번호 지정
// 사용자가 번호를 입력하고 go 라는 버튼을 누름
// 만약 사용자가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 Down !!!
// 랜덤번호가 > 유저번호 Up !!
// Reset 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다 쓰면 게임이 끝난다 (더 이상 추측 불가, 버튼이 disable)
// 사용자가 1 ~ 100  범위 밖 숫자를 입력하면 알려준다. 기회는 그대로 유지한다.
// 사용자가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회는 그대로 유지한다.


let randomNum = 0
let playButton = document.getElementById("playBtn")
let userInput = document.getElementById("userInput")
let resultArea = document.getElementById("resultArea")

playButton.addEventListener("click",play) // 함수를 매개변수로 넘김 / 함수가 매개변수로 들어갈 땐 ()를 빼야 한다!
// addEventListener (이벤트 이름, 이벤트 발생시 실행할 함수)

function pickRandomNum(){
    randomNum = Math.floor(Math.random() *100)+1; // 1 ~ 100까지 범위 설정
    console.log("정답",randomNum);
}

function play(){
    //console.log("게임시작")
    //유저가 입력한 값 가져오기
    let userValue = userInput.value
    //console.log(userValue)
    if(userValue < randomNum){
        resultArea.textContent = "Up !!!"
    }else if(userValue > randomNum){
        resultArea.textContent = "Down !!!"
    }else {
        resultArea.textContent = "맞췄습니다 !!!"
    }
}


pickRandomNum()
